<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
    <div class="header">
        <router-link class="header__link" :to="{ name: 'home' }">Inicio</router-link>
        <router-link class="header__link" :to="{ name: 'lessons'}">Lecciones</router-link>

    </div>
</template>
