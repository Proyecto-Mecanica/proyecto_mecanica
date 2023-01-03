<script setup>
import { ref } from '@vue/reactivity';
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

const props = defineProps({
    data: {
        type: Object
    }
})

</script>

<template>
    <kinesis-container>
        <kinesis-element 
            class="home__layout--lessons__list__lesson"
            type="depth"
            :strength="10"  
        >
            <div class="home__layout--lessons__list__lesson__image"></div>
            <div class="home__layout--lessons__list__lesson__metadata">
                <div class="home__layout--lessons__list__lesson__metadata__title">
                    <h3>{{props.data.title}}</h3>
                </div>
                <button 
                    @click="$router.push({ name: 'lesson-start', params: { id: props.data.id } })"
                    class="home__layout--lessons__list__lesson__metadata__button">
                    Acceder
                </button>
            </div>
        </kinesis-element>
    </kinesis-container>
</template>
