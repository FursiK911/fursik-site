<template>
    <footer class="footer">
        <v-row align="center" justify="center" dense>
            <v-col cols="auto">
                <HoverIcon :icon="'mdi-facebook'" :hoveredColor="'#3b5998'"></HoverIcon>
            </v-col>
            <v-col cols="auto">
                <HoverIcon :icon="'mdi-github'" :hoveredColor="'#000'"></HoverIcon>
            </v-col>
            <v-col cols="auto">
                <HoverIcon :icon="'mdi-linkedin'" :hoveredColor="'#0077B5'"></HoverIcon>
            </v-col>
            <v-col cols="auto">
                <HoverIcon :localImage="'technology-icons/android.png'" :hoveredColor="'#0077B5'"></HoverIcon>
            </v-col>
        </v-row>
    </footer>
</template>
  
<script>
import HoverIcon from "../../shared/HoverIcon.vue";

export default {
    name: "Footer",
    data: () => ({
    }),
    components: {
        HoverIcon,
    }
};
</script>
  
<style scoped>
.footer {
    background-color: #222;
    padding-top: 50px;
    padding-bottom: 50px;
}

.footer__icon-container {
    width: 50px;
    height: 50px;
    background-color: #333;
    color: rgba(255, 255, 255, 0.6);
}
</style>
  