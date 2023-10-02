<template>
    <v-row class="contact-section" justify="center" align="center" no-gutters>
        <v-col cols="auto">
            <v-row class="mb-4" justify="center" no-gutters>
                <v-col cols="auto">
                    <v-img width="64" height="64" src="https://img.icons8.com/wired/64/paper-plane.png" alt="paper-plane" />
                </v-col>
            </v-row>
            <v-row class="mb-4" justify="center" no-gutters>
                <v-col cols="auto">
                    <h6 class="contact-section__title">{{ $t("contactSectionTitle") }}</h6>
                </v-col>
            </v-row>
            <v-row class="mb-8" justify="center" no-gutters>
                <v-col cols="auto">
                    <p class="contact-section__subtitle">{{ $t("contactSectionSubtitle") }}</p>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="auto">
                    <v-btn variant="outlined" size="x-large" @click="sendEmail">{{ $t("contactSectionButton") }}</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
  
<script>
export default {
    name: "ContactSection",
    data: () => ({}),
    methods: {
        sendEmail() {
            const recipient = "19fursik99@gmail.com";
            const subject = "Message from Site";
            const body = "Hello!";

            const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;
        },
    },
    computed: {},
    components: {
    },
};
</script>
  
<style scoped>
.contact-section {
    background-color: #F0F0F0;
    min-height: 300px;
    padding-top: 50px;
    padding-bottom: 50px;
}

.contact-section__title {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 30px;
}

.contact-section__subtitle {
    font-size: 16px;
    font-weight: 300;
    max-width: 450px;
    line-height: 1.7;
    text-align: center;
}
</style>
  