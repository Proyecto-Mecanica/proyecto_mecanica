<script setup>
import { ref } from "@vue/reactivity";

const message = ref("Hello");
</script>

<template>
  <h1>Hello {{ message }}</h1>
</template>
