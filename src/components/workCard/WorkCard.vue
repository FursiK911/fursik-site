<template>
  <v-sheet class="work-card" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <v-img class="work-card__image" aspect-ratio="16/9" max-height="500" cover :src="imageUrl" alt="project image">
    </v-img>
    <v-row class="work-card__image__overlay" align="end" justify="center" no-gutters>
      <v-icon class="work-card__image__overlay__icon" size="48" icon="mdi-information-outline" color="white"></v-icon>
      <v-col class="work-card__image__overlay__title-container">
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="auto">
            <h6 class="work-card__image__overlay__title">{{ projectName }}</h6>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
    imageUrl: {
      type: String,
      default: "https://morezprav.cz/wp-content/uploads/2019/11/upraveny_nature-3082832_1920.jpg",
    },
    projectName: {
      type: String,
      default: "My Project",
    },
  },
};
</script>
  
<style scoped>
.work-card {
  position: relative;
  cursor: pointer;
}

.work-card__image {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform 0.5s ease-in;
  pointer-events: all;
}

.work-card__image:hover {
  transform: scale(1.04);
  filter: blur(30px);
}

.work-card__image__overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.5s ease-in;
  opacity: 0;
}

.work-card__image__overlay:hover {
  opacity: 1;
}

.work-card__image__overlay__icon {
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
}

.work-card__image__overlay__title-container {
  height: 60px;
  background-color: black;
}

.work-card__image__overlay__title {
  font-size: 14px;
  line-height: 45px;
  font-weight: 400;
  margin: 0;
  color: var(--active-text-color);
}
</style>
  