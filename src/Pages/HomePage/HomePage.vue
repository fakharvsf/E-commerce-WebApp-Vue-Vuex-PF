<template>
  <!-- <img src="../../assets/images/Hero_Image.jfif" alt="asdf" /> -->
  <!-- -------------------------Slider------------------------- -->
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="../../assets/Images/Hero_Image.jfif"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="../../assets/Images/Hero_Image_01.png"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="../../assets/Images/Hero_Image_02.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="../../assets/Images/Hero_Image_03.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="../../assets/Images/Hero_Image_04.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="../../assets/Images/Hero_Image_05.jpg"
          alt="Third slide"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <!-- ----------------------------Products Card----------------------- -->

  <div class="card-shopping mt-5">
    <shopping-card></shopping-card>
  </div>
</template>
<script>
export default {
  // Name of Page
  name: 'home',

  // Data
  data() {
    return {
      addNewProduct: null,
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.card-shopping {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
</style>
