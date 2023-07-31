<template>
  <v-row class="resume-section" no-gutters>
    <v-col cols="12">
      <v-parallax
        class="resume-section__parallax"
        height="270"
        scale="0.7"
        src="@/assets/img/freelancer.jpg"
      >
        <div class="resume-section__parallax__overlay"></div>
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="auto">
            <v-row justify="center" no-gutters>
              <v-col cols="auto">
                <h2 class="resume-section__title mb-10">
                  {{ $t("checkResumeTitle") }}
                </h2>
              </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
              <v-col cols="auto">
                <v-btn variant="outlined" color="white">{{ $t("checkResumeButton") }}</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ResumeSection",
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style scoped>
.resume-section__title {
  color: var(--active-text-color);
  position: relative;
}
.resume-section__parallax {
  position: relative;
}
.resume-section__parallax__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.73) 17%,
    rgba(0, 0, 0, 0.66) 35%,
    rgba(0, 0, 0, 0.55) 62%,
    rgba(0, 0, 0, 0.4) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(0, 0, 0, 0.8)),
    color-stop(17%, rgba(0, 0, 0, 0.73)),
    color-stop(35%, rgba(0, 0, 0, 0.66)),
    color-stop(62%, rgba(0, 0, 0, 0.55)),
    color-stop(100%, rgba(0, 0, 0, 0.4))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.73) 17%,
    rgba(0, 0, 0, 0.66) 35%,
    rgba(0, 0, 0, 0.55) 62%,
    rgba(0, 0, 0, 0.4) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.73) 17%,
    rgba(0, 0, 0, 0.66) 35%,
    rgba(0, 0, 0, 0.55) 62%,
    rgba(0, 0, 0, 0.4) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.73) 17%,
    rgba(0, 0, 0, 0.66) 35%,
    rgba(0, 0, 0, 0.55) 62%,
    rgba(0, 0, 0, 0.4) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.73) 17%,
    rgba(0, 0, 0, 0.66) 35%,
    rgba(0, 0, 0, 0.55) 62%,
    rgba(0, 0, 0, 0.4) 100%
  );
}
</style>
