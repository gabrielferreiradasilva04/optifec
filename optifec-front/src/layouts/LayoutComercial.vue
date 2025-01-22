<template>
    <v-app-bar color="primary" :elevation="0" app fixed density="compact">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>{{ }}</v-app-bar-title>
        <v-btn>
            <v-icon id="icons" size="large" @click="toggleTheme" v-tooltip="'mudar tema'">
                = mdi-theme-light-dark
            </v-icon>
        </v-btn>
    </v-app-bar>
    <v-container min-height="100vh" min-width="92vw">
        <RouterView />
    </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
//alternar o tema
const theme = useTheme();

const isDark = ref(false);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    const newTheme = isDark.value ? 'dark' : 'light';
    theme.global.name.value = newTheme; // Atualiza o tema globalmente
};
//itens do menu
const itensMenu = [{}]
</script>