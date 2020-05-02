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
              <v-text-field
                ref="name"
                label="Name"
                outlined
                v-model="name"
                :rules="[() => !!name || 'This field is required']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                ref="surname"
                label="Surname"
                outlined
                v-model="surname"
                :rules="[() => !!surname || 'This field is required']"
                :error-messages="errorMessages"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                ref="projectTitle"
                label="Project title"
                outlined
                v-model="projectTitle"
                :rules="[() => !!projectTitle || 'This field is required']"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                ref="projectDescription"
                label="Project description"
                outlined
                v-model="projectDescription"
                :rules="[() => !!projectDescription || 'This field is required']"
                :error-messages="errorMessages"
                required
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closePopup">Close</v-btn>
        <v-btn color="blue darken-1" text @click="submitForm">Add project</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import Service from '../helpers/service'

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
    },
    form() {
      return {
        name: this.name,
        surname: this.surname,
        projectTitle: this.projectTitle,
        projectDescription: this.projectDescription
      };
    }
  },
  data: () => ({
    errorMessages: "",
    formHasErrors: false,
    name: null,
    surname: null,
    projectTitle: null,
    projectDescription: null
  }),
  methods: {
    submitForm() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });

      if (!this.formHasErrors) {

        var obj = {
          title: this.projectTitle,
          orginator: this.name + ' ' + this.surname,
          description: this.projectDescription,
          githubPage: '',
          solutionPage: '',
          status: 1,
          rate: 0
        };

        Service.add(obj).then(data => { console.log(data);});
        this.resetForm()
        this.closePopup()
      }
    },
    closePopup() {
      this.show = false;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;
      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset();
      });
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