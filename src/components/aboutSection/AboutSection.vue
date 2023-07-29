<template>
  <v-row class="about-section" no-gutters>
    <v-col>
      <v-row class="mb-4" justify="center" no-gutters>
        <v-col cols="auto">
          <h1>A LITTLE BIT ABOUT ME</h1>
        </v-col>
      </v-row>
      <v-row class="mb-4" justify="center" no-gutters>
        <v-col cols="auto">
          <v-avatar image="../../assets/img/about-me.jpg" size="170"></v-avatar>
        </v-col>
      </v-row>
      <v-row class="mb-4" justify="center" no-gutters>
        <v-col cols="4">
          <p class="about-section__text mb-4">
            Hey! My name is Dmitry Fursov. I graduated from
            <a href="http://donnu.ru/" target="_blank">Donetsk State University</a> with a
            master's degree in <a href="http://donnu.ru/phys/prep" target="_blank">Computer Science and Information Technology</a>.
            Programming is my passion and calling. I aspire to build a
            successful career in the IT industry, and every day, I find joy in
            the opportunity to create and bring ideas to life through code. In
            my free time, I enjoy playing computer games, maintaining an active
            lifestyle through sports, and taking leisurely walks outdoors,
            savoring the beauty of the surrounding world.
          </p>
          <p class="about-section__text">
            Thank you for visiting my page. I hope you have learned a little
            more about me!
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AboutSection",
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
</style>
