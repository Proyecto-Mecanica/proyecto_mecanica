<script setup>
import { RouterView } from "vue-router"
import Header from '../components/Header.vue'

</script>

<template>
  <div class="lesson__layout">
    <router-view v-slot="{ Component }">
        <transition>
            <component :is="Component" />
        </transition>
    </router-view>
  </div>
</template>
