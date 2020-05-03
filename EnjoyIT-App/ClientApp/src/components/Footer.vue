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

        <v-divider v-show="authorized"></v-divider>
        <h4 v-show="authorized">Logged as: {{loggedName}} </h4>
        <v-btn v-show="authorized" @click="logout" text>
            <span class="mr-2">Logout</span>
            <v-icon>mdi-open-in-new</v-icon>
         </v-btn>      
      </v-card>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
      authorized: false,
      loggedName: '',
      icons: [
          { path: 'https://www.facebook.com', icon: 'mdi-facebook' },
          { path: 'https://www.twitter.com', icon: 'mdi-twitter' },
          { path: 'https://www.linkedin.com', icon: 'mdi-linkedin' },
          { path: 'https://www.instagram.com', icon: 'mdi-instagram' }
          
     ]
    }),
    methods: {
      logout(){
        localStorage.removeItem('user');
        this.authorized = false;
        this.loggedName = '';
        this.$router.go('/home') 
      }
    }, 
    beforeMount (){
      let obj = JSON.parse(localStorage.getItem("user"));

      if (obj != null)
      {
        this.loggedName = obj.name
        this.authorized = true;
      } 
  },
  }
</script>