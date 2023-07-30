<template>
  <v-row class="experience-section" no-gutters>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="auto">
          <h2 class="experience-section__title">{{ $t("experienceTitle") }}</h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <p class="experience-section__subtitle">
            {{ $t("experienceSubtitle") }}
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-row no-gutters>
            <v-col cols="12">
              <h3>{{ $t("experienceTechnology") }}</h3>
            </v-col>
          </v-row>
          <v-row justify="start" align="center">
            <v-col v-for="(icon, index) in iconsName" :key="index" cols="2">
              <img
                class="experience-section__technology-icon"
                :src="getIcon(icon)"
                alt="icon"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="auto">
          <h3>{{ $t("experienceWork") }}</h3>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ExperienceSection",
  data: () => ({
    iconsName: [
      "html5.png",
      "css.png",
      "js.png",
      "sass.png",
      "jquery.png",
      "react.png",
      "vue.png",
      "vuetify.svg",
      "antd.svg",
      "bootstrap.png",
      "node.png",
      "c-sharp.png",
      "c++.png",
      "unity.png",
      "unigine.png",
      "linux.png",
      "android.png",
      "ios.png",
      "photoshop.png",
      "github.png",
    ],
    iconsPath: "../../assets/technology-icons/",
  }),
  methods: {
    getIcon(iconName) {
      console.log(this.iconsPath + iconName);
      const imageUrl = new URL(this.iconsPath + iconName, import.meta.url).href;
      return imageUrl;
    },
  },
  computed: {},
};
</script>

<style scoped>
.experience-section {
  padding: 100px 0px;
}
.experience-section__title {
  font-size: 30px;
}
.experience-section__subtitle {
  font-weight: 300;
  width: 600px;
  text-align: center;
}
.experience-section__technology-icon {
  max-width: 75px;
  max-height: 75px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
