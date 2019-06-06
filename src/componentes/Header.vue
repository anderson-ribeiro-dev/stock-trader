<template>
   <v-toolbar app>
       <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
       </v-toolbar-title>
       <v-toolbar-items>
           <!-- to router link -->
           <v-btn flat to="/">Inicio</v-btn>
           <v-btn flat to="/portifolio">Portifólio</v-btn>
           <v-btn flat to="/stocks">Ações</v-btn>
       </v-toolbar-items>

       <v-spacer></v-spacer>

       <v-toolbar-items>
           <v-btn flat @click="endDay">Finalizar Dia</v-btn>
           <v-menu offset-y>
               <v-btn flat slot="activator">Salvar & Carregar</v-btn>
               <v-list>
                   <v-list-tile @click="saveData">
                       <v-list-tile-title>Salvar Dados</v-list-tile-title>
                   </v-list-tile>
                   <v-list-tile @click="loadDataLocal">
                       <v-list-tile-title>Carregar Dados</v-list-tile-title>
                   </v-list-tile>
               </v-list>
           </v-menu>
           <v-layout align-center>
               <span class="text-uppercase green--text text--darken-2">
                   Saldo:  {{ funds | currency }}
               </span>
           </v-layout>
       </v-toolbar-items>

   </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        funds(){
            return this.$store.getters.funds
        }
    },
    methods: {
        ...mapActions(['randomizeStocks', 'loadData']), //map actions stocks.js
        endDay() {
            this.randomizeStocks() //call actions stocks.js
        },
        saveData() {
            const { funds, stockPortfolio, stocks } = this.$store.getters //operator destructuring
            this.$http.put('data.json', { funds, stockPortfolio, stocks }) // create object
        },
        loadDataLocal(){
            this.loadData()
        }
    },
}
</script>

<style>

</style>
