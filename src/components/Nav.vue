<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <div class="nav">
    <router-link class="nav__dot" :to="{ name: 'home' }"></router-link>
    <router-link class="nav__dot" :to="{ name: 'lessons'}"></router-link>
  </div>
</template>
