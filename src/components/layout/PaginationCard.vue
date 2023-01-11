
<template>
  <div class="main-products">
    <ul class="pagination">
      <li class="pagination-item pagination-link">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
        >
          First
        </button>
      </li>

      <li class="pagination-item pagination-link">
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          Previous
        </button>
      </li>

      <!-- Visible Buttons Start -->
      <li
        v-for="page in pages"
        :key="page.name"
        class="pagination-item pagination-link"
        :class="{ active: isPageActive(page.name) }"
      >
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </button>
      </li>

      <!-- Visible Buttons End -->

      <li class="pagination-item pagination-link">
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
          Next
        </button>
      </li>

      <li class="pagination-item pagination-link">
        <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 4,
    },
    totalPages: {
      type: Number,
      required: true,
      default: 10,
    },
    perPage: {
      type: Number,
      required: true,
      default: 3,
    },
    currentPage: {
      type: Number,
      required: true,
      default: 3,
    },
  },

  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        console.log(
          '🚀 ~ file: PaginationCard.vue:93 ~ startPage ~ this.totalPages',
          this.totalPages
        );

        console.log(
          '🚀 ~ file: PaginationCard.vue:95 ~ startPage ~ this.maxVisibleButtons',
          this.maxVisibleButtons
        );
        return this.totalPages - this.maxVisibleButtons;
      }
      //When on current and last Page
      if (this.currentPage === this.totalPages) {
        const start = this.totalPages - (this.maxVisibleButtons - 1);

        if (start === 0) {
          return 1;
        } else {
          return start;
        }
      }

      // When in between
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
  },
};
</script>
<style scoped>
.main-products {
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #1e3161;
  color: #ffffff;
}
</style>
