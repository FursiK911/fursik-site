<template>
    <footer class="footer">
        <v-row align="center" justify="center" dense>
            <v-col v-for="item in socials" cols="auto">
                <HoverIcon @click="navigateTo" :url="item.url" :localImage="item.localImage" :icon="item.icon"
                    :hoveredColor="item.hoveredColor">
                </HoverIcon>
            </v-col>
        </v-row>
    </footer>
</template>
  
<script>
import HoverIcon from "../../shared/HoverIcon.vue";

export default {
    name: "Footer",
    data: () => ({
        socials: [
            {
                icon: "mdi-facebook",
                hoveredColor: "#3b5998",
                url: "https://www.facebook.com/profile.php?id=100090931236023",
            },
            {
                icon: "mdi-github",
                hoveredColor: "#000000",
                url: "https://github.com/FursiK911",
            },
            {
                icon: "mdi-linkedin",
                hoveredColor: "#0077B5",
                url: "https://www.linkedin.com/in/dmitry-fursov-251097213/",
            },
            {
                localImage: "social-icons/vk.svg",
                hoveredColor: "#0077ff",
                url: "https://vk.com/dimafursov",
            },
            {
                localImage: "social-icons/telegram.svg",
                hoveredColor: "#2AABEE",
                url: "https://t.me/FursiK911",
            },
        ]
    }),
    methods: {
        navigateTo(url) {
            window.open(url, '_blank', 'noreferrer');
        },
    },
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
  