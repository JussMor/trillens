<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App" />
    <img alt="Vue logo" src="../assets/logo.png" />

    <ul class="collection with-header">
      <li class="collection-header"><h4>Noticias</h4></li>
      <li
        v-for="noticia in noticias"
        v-bind:key="noticia.id"
        class="collection-item"
      >
        <div class="chip">{{ noticia.autor }}</div>
        {{ noticia.noticias_id }}: {{ noticia.titulo }}
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
    <Navbar />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
//import NewEmployee from "@/components/NewEmployee.vue";
//import ViewEmployee from "@/components/ViewEmployee.vue";
//import EditEmployee from "@/components/EditEmployee.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

import db from "../components/firebaseInit.js";
export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    Footer
  },
  data() {
    return {
      noticias: [],
      loading: true
    };
  },
  created() {
    db.collection("noticias")
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          const data = {
            id: doc.id,
            noticias_id: doc.data().noticias_id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
            texto: doc.data().texto
          };
          this.noticias.push(data);
        });
      });
  }
};
</script>
