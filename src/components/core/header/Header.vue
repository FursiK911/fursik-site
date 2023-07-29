<template>
  <nav class="header">
    <v-row
      :class="isScrollDown ? 'header--collapsed' : 'header--idle'"
      align="center"
      no-gutters
    >
      <v-col class="pl-10" cols="6">
        <h1 class="header__title">Dmitry Fursov</h1>
      </v-col>
      <v-col class="pr-6" cols="6">
        <v-row align="center" justify="center" no-gutters>
          <v-col v-for="(item, index) in headerItems" :key="index" cols="3">
            <v-row
              class="header__subtitle header__subtitle--inactive"
              justify="center"
              no-gutters
            >
              <span class="header__subtitle__text">{{ item.text }}</span>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    headerItems: [
      {
        text: "About",
        link: "#",
      },
      {
        text: "Passion",
        link: "#",
      },
      {
        text: "Experience",
        link: "#",
      },
      {
        text: "Contact",
        link: "#",
      },
    ],
    isScrollDown: false,
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(window.scrollY);
    this.isScrollDown = window.scrollY > 1;
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      console.log(window.scrollY);
      this.isScrollDown = window.scrollY > 1;
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 1;
}
.header--idle {
  background-color: transparent;
  padding: 24px 0px;
  transition: background-color 0.4s, padding 1s;
}
.header--collapsed {
  background-color: black;
  padding: 8px 0px;
  transition: background-color 0.4s, padding 1s;
}
.header__title {
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.3s;
}
.header__title:hover {
  color: #e0e0e0;
}
.header__subtitle__text {
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.3s;
}
.header__subtitle__text:hover {
  color: #e0e0e0;
}
.header__subtitle {
  height: 100%;
}
.header__subtitle--active {
  background-color: #787878;
}
.header__subtitle--inactive {
  background-color: transparent;
}
</style>
