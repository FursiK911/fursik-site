<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<script setup>
import Header from "./components/core/header/Header.vue";
import Footer from "./components/core/footer/Footer.vue";
import "./style.css"
</script>
