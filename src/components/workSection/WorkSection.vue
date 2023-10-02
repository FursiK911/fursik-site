<template>
  <v-row class="work-section" no-gutters>
    <v-col cols="12">
      <v-row class="mb-4" justify="center" no-gutters>
        <v-col cols="auto">
          <h2 class="work-section__title">{{ $t("workSectionTitle") }}</h2>
        </v-col>
      </v-row>
      <v-row class="mb-6" justify="center" no-gutters>
        <v-col cols="auto">
          <h5 class="work-section__subtitle">
            {{ $t("workSectionSubtitle") }}
          </h5>
        </v-col>
      </v-row>
      <v-row class="px-16">
        <v-col v-for="count in 12" cols="4">
          <WorkCard></WorkCard>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import WorkCard from '../workCard/WorkCard.vue';

export default {
  name: "WorkSection",
  data: () => ({}),
  methods: {},
  computed: {},
  components: {
    WorkCard,
  },
};
</script>

<style scoped>
.work-section {
  padding: 100px 0px;
}

.work-section__title {
  font-size: 30px;
  text-transform: uppercase;
}

.work-section__subtitle {
  text-transform: lowercase;
  font-size: 14px;
}
</style>
