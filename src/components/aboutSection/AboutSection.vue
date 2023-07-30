<template>
  <v-row class="about-section" no-gutters>
    <v-col>
      <v-row class="mb-4" justify="center" no-gutters>
        <v-col cols="auto">
          <h1>{{ $t("aboutMeTitle") }}</h1>
        </v-col>
      </v-row>
      <v-row class="mb-4" justify="center" no-gutters>
        <v-col cols="auto">
          <v-avatar image="../../assets/img/about-me.jpg" size="170"></v-avatar>
        </v-col>
      </v-row>
      <v-row class="mb-4" justify="center" no-gutters>
        <v-col cols="auto">
          <p class="about-section__text about-section__max-width mb-4">
            {{ $t("aboutMePart1Text") }}
            <a href="http://donnu.ru/" target="_blank">{{
              $t("myUniversity")
            }}</a>
            {{ $t("aboutMePart2Text") }}
          </p>
          <p class="about-section__text about-section__max-width">
            {{ $t("aboutMePart3Text") }}
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col cols="auto">
          <v-row
            class="about-section__banner about-section__max-width pa-5"
            no-gutters
          >
            <v-col cols="auto">
              <h3>{{ $t("aboutMeShortTitle") }}</h3>
              <v-row>
                <v-col>
                  <v-icon icon="mdi-keyboard-outline" size="64"></v-icon>
                  <h5>Web developer</h5>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AboutSection",
  data: () => ({
    
  }),
};
</script>

<style scoped>
.about-section {
  padding: 90px 0px 100px 0px;
}
.about-section__text {
  font-size: 16px;
  line-height: 1.7;
  font-weight: 300;
  text-align: center;
}
.about-section__banner {
  background: #f0f0f0;
}
.about-section__max-width {
  max-width: 500px;
}
</style>
