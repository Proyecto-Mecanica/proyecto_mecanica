<script setup>
import { RouterView } from "vue-router"
import NavDot from '../components/Nav.vue'
import Header from '../components/Header.vue'

</script>

<template>
  <div class="home__layout">
    <div class="home__layout--header">
        <Header/>
    </div>
    <div class="home__layout--nav">
        <NavDot/>
    </div>
    <div class="home__layout--router">
        <router-view v-slot="{ Component }">
            <transition>
              <component :is="Component" />
            </transition>
        </router-view>
    </div>
  </div>
</template>
