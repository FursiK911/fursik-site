<template>
  <nav class="header">
    <v-row
      :class="isScrollDown ? 'header--collapsed' : 'header--idle'"
      align="center"
      justify="space-between"
      no-gutters
    >
      <v-col class="pl-10" cols="auto">
        <h1 class="header__title">{{ $t("myName") }}</h1>
      </v-col>
      <v-col class="pr-6" cols="auto">
        <v-row align="center" justify="space-between" wrap="false" no-gutters>
          <v-col
            class="px-2"
            v-for="(item, index) in headerItems"
            :key="index"
            cols="auto"
          >
            <v-row
              class="header__subtitle header__subtitle--inactive"
              justify="center"
              no-gutters
            >
              <span class="header__subtitle__text">{{ item.text }}</span>
            </v-row>
          </v-col>
          <v-col class="pl-6" cols="auto">
            <v-breadcrumbs class="header__breadcrumbs" :items="languages">
              <template v-slot:title="{ item }">
                <span class="header__language-item" @click="() => changeLanguage(item.language)">{{
                  item.language.toUpperCase()
                }}</span>
              </template>
              <template v-slot:divider>
                <span class="header__breadcrumbs__divider">/</span>
              </template>
            </v-breadcrumbs>
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
    languages: [
      {
        language: "ru",
        disabled: false,
      },
      {
        language: "en",
        disabled: false,
      },
    ],
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.isScrollDown = window.scrollY > 1;
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      this.isScrollDown = window.scrollY > 1;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
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
  padding: 4px 0px;
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
  letter-spacing: 1px;
}
.header__subtitle__text:hover {
  color: var(--hover-text-color);
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
.header__language-item {
  color: var(--active-text-color);
  cursor: pointer;
  transition: color 0.3s;
}
.header__language-item--active {
  color: var(--disable-text-color);
}
.header__language-item:hover {
  color: var(--hover-text-color);
}
.header__breadcrumbs__divider {
  color: var(--active-text-color);
}
</style>
