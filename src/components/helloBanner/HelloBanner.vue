<template>
  <v-row class="hello-banner" no-gutters>
    <v-col>
      <v-parallax height="850" src="@/assets/img/mountain.jpg">
        <!--<div
          class="d-flex flex-column fill-height justify-center align-center text-white"
        >
          <h1 class="text-h4 font-weight-thin mb-4">Vuetify</h1>
          <h4 class="subheading">Build your application today!</h4>
        </div>-->
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="auto">
            <h1 class="hello-banner__title">{{$t("helloBannerTitle")}}</h1>
            <p class="hello-banner__subtitle">{{$t("helloBannerSubtitle")}}</p>
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HelloBanner",
};
</script>

<style scoped>
.hello-banner {
}
.hello-banner__title {
  color: #fff;
  font-size: 60px;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.hello-banner__subtitle {
  color: #fff;
  margin: 0 0 25px;
  font-size: 24px;
  line-height: 1.7;
  font-weight: 300;
  text-align: center;
}
</style>
