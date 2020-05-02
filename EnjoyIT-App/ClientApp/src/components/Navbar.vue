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

      <router-link to="/" tag="span" style="cursor: pointer">
        <h2> {{ appTitle }}</h2>
      </router-link>

      <v-spacer></v-spacer>

      <span class='hidden-sm-and-up'>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                v-on="on"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.path"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
      </span>
      
      <div class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
       </v-btn>

       <v-btn
        href="https://github.com/flowerasny/EnjoyIT"
        target="_blank" text>
        <span class="mr-2">GITHUB PAGE</span>
        <v-icon>mdi-open-in-new</v-icon>
       </v-btn>
      </div>
    </v-app-bar>
  <v-parallax
    dark
    src="../assets/navbar.jpg">
  </v-parallax>
  <v-content>
      <router-view></router-view>
    </v-content>
</div>
</template>

<script>

export default {
  name: "App",
  data(){
    return {
      appTitle: 'Enjoy-IT',
      sidebar: false,
      menuItems: [
          { title: 'HOME', path: '/home', icon: 'info' },
          { title: 'PROJECTS', path: '/projects', icon: 'card_travel' },
          { title: 'LOGIN', path: '/login', icon: 'account_circle' },
          { title: 'ABOUT US', path: '/aboutUs', icon: 'info' }
          
     ]
    }
  },
};
</script>
