<template>
  <v-dialog v-model="show" max-width="600px">
    <v-card class="dialogBackground">
      <v-card-title>
        <span class="dialogHeader">Add new project</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field label="Name" solo></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field label="Surname" solo></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Project title" solo></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Project description" solo></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="show = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="show = false">Add project</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style scoped>
.dialogBackground {
  background: #eeeeee;
}

.dialogHeader {
  font-weight: bold;
  font-size: 28px;
  color: #333333;
}
</style>