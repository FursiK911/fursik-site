<template>
    <v-row class="icon-container" justify="center" align="center" :style="{ backgroundColor, color, }"
        @mouseover="changeColor" @mouseleave="resetColor" @click="onClickHandler" no-gutters>
        <v-col cols="auto">
            <v-icon v-if="icon" :icon="icon" size="36"></v-icon>
            <v-img v-else-if="localImage" :src="getImageUrl(this.localImage)" height="36" width="36"
                :style="{ opacity }"></v-img>
        </v-col>
    </v-row>
</template>
  
<script>
export default {
    name: "HoverIcon",
    data: () => ({
        backgroundColor: "#333",
        color: "rgba(255, 255, 255, 0.6)",
        opacity: "0.6",
    }),
    methods: {
        changeColor() {
            this.backgroundColor = this.hoveredColor || '#333';
            this.color = "rgba(255, 255, 255, 1)";
            this.opacity = "1";
        },
        resetColor() {
            this.backgroundColor = '#333';
            this.color = "rgba(255, 255, 255, 0.6)";
            this.opacity = "0.6";
        },
        getImageUrl(name) {
            return new URL(`../../assets/${name}`, import.meta.url).href
        },
        onClickHandler() {
            this.$emit('click', this.url);
        },
    },
    props: {
        icon: String,
        localImage: String,
        hoveredColor: String,
        url: String,
    },
};
</script>
  
<style scoped>
.icon-container {
    width: 50px;
    height: 50px;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
}
</style>
  