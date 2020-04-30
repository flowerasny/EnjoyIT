<template>
<div>
      <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"/>
      </div>

      <h2>Enjoy-IT</h2>

      <v-spacer></v-spacer>
      <v-btn href="/login" text>
        <span class="mr-2">LOGIN</span>
      </v-btn>
      <v-btn href="/projects" text>
        <span class="mr-2">PROJECTS</span>
      </v-btn>

      <v-btn href="/aboutUs" >
        <span class="mr-2">ABOUT US</span>
      </v-btn> 

      <v-btn
        href="https://github.com/flowerasny/EnjoyIT"
        target="_blank" text>
        <span class="mr-2">GITHUB PAGE</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

    </v-app-bar>

  <v-parallax
    dark
    src="../assets/navbar.jpg">
  </v-parallax>
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>
