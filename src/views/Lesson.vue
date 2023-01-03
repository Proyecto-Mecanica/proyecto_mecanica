<script setup>
import { ref } from '@vue/reactivity'
import { reactive, watch } from 'vue';
import { SlickList, SlickItem } from 'vue-slicksort'
const opts = reactive({
    id: 104,
    items: [
    {
        value: 'banana',
        id: 141,
    },
    {
        value: 'tomato',
        id: 142,
    },
    {
        value: 'watermelon',
        id: 143,
    }
    ]
})

const answers = reactive({
    id: 105,
    items: [
    ]
})

watch(answers, (old, newVal) => {
    console.log(old, newVal)
})

watch(opts, (old, newVal) => {
    console.log(old, newVal)
})

</script>

<template>
  <kinesis-container class="lesson__layout--start">
    <div class="lesson__layout--start__header">
        <kinesis-element 
            class="lesson__layout--start__header__title">            
            <h1>Tiro vertical</h1>
        </kinesis-element>
    </div>


    <div class="lesson__layout--start__intro">
        <div class="lesson__layout--start__intro__text">
            <h2>Introduccion</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, explicabo neque. Ipsam nobis quae perspiciatis laboriosam vel et excepturi! Eos quasi obcaecati consequatur odio voluptates asperiores alias ipsum, perferendis commodi.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis, optio perferendis hic ipsam totam dolorem dolorum fuga et! Impedit voluptatibus expedita nobis nam repudiandae, quo cumque ut tempora numquam!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate nemo quidem itaque aspernatur qui, provident reiciendis nam, recusandae, ullam consequatur nesciunt expedita soluta rem eveniet fugit inventore asperiores libero.
            </p>
        </div>
        <kinesis-element 
            class="lesson__layout--start__intro__keywords"
            type="depth"
            :strength="10"  
        >            
            <p>Palabras clave</p>
            <div class="lesson__layout--start__intro__keywords__list">
                <p class="lesson__layout--start__intro__keywords__key">
                    word
                </p>
                <p class="lesson__layout--start__intro__keywords__key">
                    word
                </p>
                <p class="lesson__layout--start__intro__keywords__key">
                    word
                </p>
            </div>
        </kinesis-element>
        
    </div>

    <hr class="lesson__layout--start__break">


    <div class="lesson__layout--start__content">
        <div class="lesson__layout--start__content__what">
            <h2>¿Qué es el tiro vertical?</h2>
        </div>

        <div class="lesson__layout--start__content__explanation">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis reprehenderit error at esse est optio eius? Ea, atque quo corrupti inventore harum veritatis natus tempora vitae quisquam voluptas minus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id molestias culpa iste pariatur deleniti assumenda voluptates fuga eum, modi eveniet aspernatur similique mollitia voluptatem tenetur autem sunt officiis. Deserunt, expedita.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet nisi, veritatis itaque veniam placeat ipsam rerum maiores labore consectetur quam nulla dicta error aliquid sunt tempora esse quibusdam facere?
            </p>
        </div>

        <div class="lesson__layout--start__content__exercice">
            <SlickList 
                axis="y" 
                v-model:list="opts.items" 
                group="produce"
                class="lesson__layout--start__content__exercice__drag"
                :accept="true"
            >
                <SlickItem 
                    v-for="({ value, id }, i) in opts.items" 
                    :key="id"
                    :index="i"
                    class="lesson__layout--start__content__exercice__drag__item"
                >
                  {{ value }}
                </SlickItem>
            </SlickList>

            <SlickList 
                axis="y" 
                v-model:list="answers.items" 
                group="answers"
                class="lesson__layout--start__content__exercice__drag"
                :accept="true"
            >
                <SlickItem 
                    v-for="({ value, id }, i) in answers.items" 
                    :key="id" 
                    :index="i"
                    class="lesson__layout--start__content__exercice__drag__item"
                >
                  {{ value  }}
                </SlickItem>
            </SlickList>

        </div>
    </div>

  </kinesis-container>
</template>
