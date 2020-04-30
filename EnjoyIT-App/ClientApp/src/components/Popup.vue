<template>
  <v-dialog v-model="show" width="600px">
    <v-card>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="show=false">Close</v-btn>
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