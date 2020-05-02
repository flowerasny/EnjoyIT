<template>
  <v-dialog v-model="show" max-width="600px">
    <v-card class="dialogBackground">
      <v-card-title>
        <span class="dialogHeader">{{project.title}}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <span class="dialogText dialogTextMargin">{{project.originator}}</span>
          </v-row>
          <v-row>
            <span class="dialogText dialogTextMargin">{{project.description}}</span>
          </v-row>
          <v-row>
            <span class="dialogText">To start the project paste github repository link</span>
            <v-col cols="12">
              <v-text-field
                ref="githubPage"
                label="Github page"
                outlined
                v-model="githubPage"
                @input="clearGithubError"
                :rules="[
                  () => !!githubPage || 'Please add github project page to start a contribution',
                  () => !!githubPage && repoValid || 'Please paste the proper repository here'
                ]"
                :error-messages="errorMessages"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closePopup">Close</v-btn>
        <v-btn color="blue darken-1" text @click="submitForm">Contribute</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import github from "../helpers/github";
import Service from '../helpers/service'

export default {
  props: {
    value: Object
  },
  computed: {
    show: {
      get() {
        return this.value.shouldShow;
      },
      set(newValue) {
        this.value.shouldShow = newValue;
        this.$emit("input", this.value);
      }
    },
    project: {
      get() {
        return this.value.data;
      }
    },
    form() {
      return {
        githubPage: this.githubPage
      };
    }
  },
  data: () => ({
    errorMessages: "",
    formHasErrors: false,
    repoValid: true,
    githubPage: ""
  }),
  methods: {
    submitForm() {
      github.isGithubRepositoryValid(this.githubPage).then(isRepoValid => {
        if (isRepoValid) {
          this.formHasErrors = false;

          Object.keys(this.form).forEach(f => {
            if (!this.form[f]) this.formHasErrors = true;
            this.$refs[f].validate(true);
          });

          if (!this.formHasErrors) {
 
            var obj = {
              id: this.project.id,
              title: this.project.title,
              orginator: this.project.orginator,
              description: this.project.description,
              githubPage: this.githubPage,
              solutionPage: this.project.solutionPage,
              status: 2,
              rate: this.project.rate
            };

            Service.edit(this.project.id, obj).then(data => { console.log(data);});

            this.resetForm();
            this.closePopup();
          }
        } else {
          this.repoValid = false
          Object.keys(this.form).forEach(f => {
            if (!this.form[f]) this.formHasErrors = true;
            this.$refs[f].validate(true);
          });
        }
      });
    },
    clearGithubError() {
      this.repoValid = true
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
.dialogText {
  font-size: 16px;
  color: #333333;
}
.dialogTextMargin {
  margin-bottom: 20px;
}

.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>