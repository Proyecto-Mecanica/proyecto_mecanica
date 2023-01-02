<script setup>
import { ref } from "@vue/reactivity";
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
const srcImage = ref('src/assets/home/home__image.png')

</script>

<template>
    <kinesis-container class="home__layout--start">
        <kinesis-element tag="div" class="home__layout--start__main">
            <kinesis-container class="home__layout--start__main__title">
                <span>Aprendiendo</span> 
                <span>fisica</span>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ducimus ipsa quibusdam nulla reprehenderit, repellendus iste commodi ad necessitatibus eius recusandae fugit temporibus at in laborum! Autem soluta quo eligendi!</p>
            </kinesis-container>
            <kinesis-container class="home__layout--start__main__text" tag="p">
            </kinesis-container>
            <kinesis-container 
                class="home__layout--start__main__cta" 
                tag="button"
                @click="$router.push({ name: 'lessons' })"
            >
                Ver lecciones
            </kinesis-container>
        </kinesis-element>
        <kinesis-element 
            :strength="20"
            axis="y" 
            tag="img" 
            :src="srcImage">
        </kinesis-element>       
    </kinesis-container>
</template>
