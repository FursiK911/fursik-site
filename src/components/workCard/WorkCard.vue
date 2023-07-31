<template>
  <v-sheet class="work-card" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <v-img class="work-card__image" aspect-ratio="16/9" max-height="500" cover
      src="https://www.wallpaperup.com/uploads/wallpapers/2013/10/20/162788/eb6d123f606c08202455f841e8797a6c.jpg">
      <v-row v-if="isHovered" class="work-card__image__overlay" align="end" no-gutters>
        <v-icon class="work-card__image__overlay__icon" size="48" icon="mdi-information-outline" color="white"></v-icon>
        <v-col class="work-card__image__overlay__title-container">

        </v-col>
      </v-row>
    </v-img>
  </v-sheet>
</template>
  
<script>
export default {
  name: "WorkCard",
  data: () => ({
    isHovered: false,
  }),
  methods: {},
  computed: {},
  props: {

  },
};
</script>
  
<style scoped>
.work-card__image {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.work-card__image:hover {
  filter: brightness(30%);
}

.work-card__image__overlay {
  height: 100%;
  width: 100%;
  position: relative;
}

.work-card__image__overlay__icon {
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
}

.work-card__image__overlay__title-container {
  height: 60px;
  background-color: black;
}</style>
  