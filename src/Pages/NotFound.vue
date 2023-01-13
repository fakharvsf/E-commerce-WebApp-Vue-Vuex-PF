<template>
  <div class="text-center">
    <v-btn color="primary">
      Open Dialog

      <v-dialog v-model="dialog" activator="parent">
        <v-card>
          <div>
            <div class="form-title mt-3">
              <h1 class="text-center">Edit Product</h1>
            </div>
          </div>
          <!-- --------------Vuetify Form----------------- -->
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <!-- --------------Getting form data----------------- -->

                  <v-text-field
                    label="Product Name"
                    variant="outlined"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Product Stock"
                    variant="outlined"
                    type="number"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Brand Name"
                    variant="outlined"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Product Category"
                    variant="outlined"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Product Price"
                    type="number"
                    prefix="$"
                    variant="outlined"
                    clearable
                  ></v-text-field> </v-col
                ><v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Discount Percentage"
                    prefix="%"
                    type="number"
                    variant="outlined"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <!-- v-model="form.bio" -->
                  <v-textarea
                    color="teal"
                    prepend-icon="mdi-comment"
                    counter="50"
                  >
                    <template v-slot:label>
                      <div>Product Description <small>(Required)</small></div>
                    </template>
                  </v-textarea>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-text-field
                    label="image URL"
                    prepend-icon="mdi-link"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <div class="d-flex justify-center align-center w-100">
                  <div>
                    <!-- --------------Submit Form Button ----------------- -->

                    <v-btn
                      variant="outlined"
                      size="large"
                      class="btn-dark"
                      rounded="pill"
                    >
                      <v-icon>mdi-pencil</v-icon>
                      Add Product
                    </v-btn>
                  </div>
                </div>
              </v-row>
            </v-container>
          </v-form>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false"
              >Close Dialog</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
