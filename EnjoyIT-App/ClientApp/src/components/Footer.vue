<template>
  <v-footer class="footer"
    dark
    padless>
    <v-card
      flat
      tile
      class="primary lighten-1 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-1">
      Projekt aplikacji internetowej z wykorzystaniem Vue (frontend) oraz .NET Core (backend). Wykonany został przez M.Owczarski, K. Mąka, K. Kwiatek.
      Vue.js jest strukturą JavaScript typu open source Model-view-viewmodel do budowania interfejsów użytkownika i aplikacji jednostronicowych. Został stworzony przez Evana You i jest utrzymywany przez niego i resztę aktywnych członków podstawowego zespołu z różnych firm, takich jak Netlify.
      </v-card-text>
      
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>EnjoyIT</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<!--<style> 
    .footer {
        margin-top: 50px;

    }
</style>-->