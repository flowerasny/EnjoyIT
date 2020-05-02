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
            <span class="dialogText">Project name: {{projectName}}</span>
          </v-row>
          <v-row>
            <span class="dialogText">Contributors: {{contributors}}</span>
          </v-row>
          <v-row>
            <span class="dialogText dialogTextMargin">
              Check progress on github page:
              <a :href="project.githubPage">{{project.githubPage}}</a>
            </span>
          </v-row>
          <v-row>
            <span class="dialogText">To finish the project paste a project page link here</span>
            <v-col cols="12">
              <v-text-field
                ref="projectPage"
                label="Project page"
                outlined
                v-model="projectPage"
                @input="clearLinkError"
                :rules="[
                  () => !!projectPage || 'Please add project link if you want to close the project',
                  () => !!projectPage && urlValid || 'Please make sure that the url is valid'
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
        <v-btn color="blue darken-1" text @click="submitForm">Done</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import github from "../helpers/github";
import Service from "../helpers/service"
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
    projectName() {
      return github.getProjectName(this.project.githubPage);
    },
    form() {
      return {
        projectPage: this.projectPage
      };
    }
  },
  data: () => ({
    errorMessages: "",
    formHasErrors: false,
    urlValid: true,
    contributors: "",
    projectPage: ""
  }),
  mounted() {
    // github
    //   .getContributors(this.project.githubPage)
    //   .then(result => this.contributors = result);
  },
  methods: {
    submitForm() {
      if (github.validateURL(this.projectPage)) {
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
            githubPage: this.project.githubPage,
            solutionPage: this.projectPage,
            status: 3,
            rate: this.project.rate
          };

          Service.edit(this.project.id, obj).then(data => {console.log(data);});

          this.resetForm();
          this.closePopup();
        }
      } else {
        this.urlValid = false;
        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true;
          this.$refs[f].validate(true);
        });
      }
    },
    clearLinkError() {
      this.urlValid = true;
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