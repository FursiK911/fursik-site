<template>
  <v-row class="passion-section" no-gutters>
    <v-col cols="12">
      <v-row class="mb-6" justify="center">
        <v-col cols="auto">
          <h2 class="passion-section__title">{{ $t("passionTitle") }}</h2>
        </v-col>
      </v-row>
      <v-row class="px-10" justify="space-between">
        <v-col
          class="px-6"
          v-for="(item, index) in getItems"
          :key="index"
          cols="4"
        >
          <v-row class="mb-8  " justify="center">
            <v-col cols="auto">
              <v-avatar class="passion-section__circle" size="175">
                <v-icon class="passion-section__circle__icon" color="white" size="64">
                  {{ item.icon }}
                </v-icon>
              </v-avatar>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="auto">
              <h3 class="passion-section__circle__title">{{ item.title }}</h3>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="auto">
              <p class="passion-section__circle__description">{{ item.description }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PassionSection",
  data: () => ({}),
  methods: {},
  computed: {
    getItems() {
      const locale = this.$i18n.locale;
      const items = [
        {
          icon: "mdi-laptop",
          title: this.$i18n.messages.ru.passionPart1Title,
          description: this.$i18n.messages.ru.passionPart1Description,
        },
        {
          icon: "mdi-laptop",
          title: this.$i18n.messages.ru.passionPart1Title,
          description: this.$i18n.messages.ru.passionPart1Description,
        },
        {
          icon: "mdi-laptop",
          title: this.$i18n.messages.ru.passionPart1Title,
          description: this.$i18n.messages.ru.passionPart1Description,
        },
      ];
      return items;
    },
  },
};
</script>

<style scoped>
.passion-section {
  background: #f0f0f0;
  padding: 100px 0px;
}
.passion-section__title {
  font-size: 30px;
}
.passion-section__circle__title {
  font-weight: 400;
  text-align: center;
}
.passion-section__circle__description {
  font-weight: 300;
  text-align: center;
}
.passion-section__circle {
  background: linear-gradient(180deg, #0019ff 0%, #4069ff 100%);
  transition: 1s;
}
.passion-section__circle:hover {
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  transform: scale(1.1);
}
</style>
