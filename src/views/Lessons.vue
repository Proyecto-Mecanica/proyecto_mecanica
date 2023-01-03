<script setup>
import { ref } from '@vue/reactivity';
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import Lesson from '../components/Lesson.vue'

const lessons = [
    {
        title: 'Tiro vertical',
        id: '1',
        active: true
    }
]

</script>


<template>
    <kinesis-container class="home__layout--lessons">
        <kinesis-element class="home__layout--lessons__title" tag="h2">
            Lecciones disponibles
        </kinesis-element>

        <div class="home__layout--lessons__list">
            <Lesson
                v-for="i in lessons"
                :key="i.id"
                :data="i"
            />
        </div>

    </kinesis-container>
</template>
