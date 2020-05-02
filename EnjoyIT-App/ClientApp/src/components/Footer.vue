<template>
    <v-footer padless>
      <v-card
        flat
        tile
        width="100%"
        class="primary lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            :href="icon.path"
            class="mx-5 white--text"
            icon target="_blank">
            <v-icon size="35px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
          { path: 'https://www.facebook.com', icon: 'mdi-facebook' },
          { path: 'https://www.twitter.com', icon: 'mdi-twitter' },
          { path: 'https://www.linkedin.com', icon: 'mdi-linkedin' },
          { path: 'https://www.instagram.com', icon: 'mdi-instagram' }
          
     ]
    }),
  }
</script>