<script setup>
import { onMounted, reactive, ref } from "vue";
import { SlickList, SlickItem } from "vue-slicksort";

const opts = reactive({
  id: 104,
  items: [
    {
      value: "banana",
      id: 141,
    },
    {
      value: "tomato",
      id: 142,
    },
    {
      value: "watermelon",
      id: 143,
    },
  ],
});

const answers = reactive({
  id: 105,
  items: [],
});

const formula = "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$";

let canvasVertical = null;
let contextVertical = null;

let canvasFreeFall = null;
let contexFreeFall = null;

const ballImage = new Image();
const grassImage = new Image();
ballImage.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Soccer_ball.svg/1024px-Soccer_ball.svg.png";
grassImage.src =
  "https://parspng.com/wp-content/uploads/2022/07/Grasspng.parspng.com-9.png";

onMounted(() => {
  canvasVertical = document.getElementById("canvasVertical");
  contextVertical = canvasVertical.getContext("2d");
  canvasVertical.width = document.getElementsByClassName(
    "lesson__layout--start__behavior"
  )[0].clientWidth;
  canvasFreeFall = document.getElementById("freeFall");
  contextVertical = canvasVertical.getContext("2d");
  canvasFreeFall.width = document.getElementsByClassName(
    "lesson__layout--start__behavior"
  )[0].clientWidth;
  canvasVertical.height = 350;
  startCanvasVertical();
});

const ballAnimation = reactive({
  width: 50,
  height: 50,
  x: 0,
  y: 0,
});

grassImage.onload = () =>
  contextVertical.drawImage(grassImage, 0, canvasVertical.height - 150);

ballImage.onload = () =>
  contextVertical.drawImage(
    ballImage,
    ballAnimation.x,
    ballAnimation.y,
    50,
    50
  );

const drawElementsVertical = () => {
  contextVertical.clearRect(0, 0, canvasVertical.width, canvasVertical.height);
  contextVertical.drawImage(grassImage, 0, canvasVertical.height - 150);
  contextVertical.drawImage(
    ballImage,
    ballAnimation.x,
    ballAnimation.y,
    50,
    50
  );
  contextVertical.font = "20px serif";
  contextVertical.fillStyle = "red";
  contextVertical.fillText("Altura máxima", 10, 50);
};

const updateVerticalUp = () => {
  if (ballAnimation.y == 1) return;
  ballAnimation.y -= 1;
};

const updateVerticalDown = () => {
  if (ballAnimation.y == canvasVertical.height - 55) return;
  ballAnimation.y += 1;
};

const startAnimationVerticalUp = () => {
  if (ballAnimation.y == 35) return;

  window.cancelAnimationFrame(startAnimationVerticalDown);
  updateVerticalUp();
  drawElementsVertical();
  window.requestAnimationFrame(startAnimationVerticalUp);
};

const startAnimationVerticalDown = () => {
  if (ballAnimation.y == canvasVertical.height - 55) return;
  window.cancelAnimationFrame(startAnimationVerticalUp);
  updateVerticalDown();
  drawElementsVertical();
  window.requestAnimationFrame(startAnimationVerticalDown);
};

function startCanvasVertical() {
  ballAnimation.x = canvasVertical.width / 2;
  ballAnimation.y = canvasVertical.height - 55;
  drawElementsVertical();
}
</script>

<template>
  <kinesis-container class="lesson__layout--start">
    <div class="lesson__layout--start__header">
      <kinesis-element class="lesson__layout--start__header__title">
        <h1>Tiro vertical</h1>
      </kinesis-element>
    </div>

    <div class="lesson__layout--start__intro">
      <div class="lesson__layout--start__intro__text">
        <h2>Introduccion</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          explicabo neque. Ipsam nobis quae perspiciatis laboriosam vel et
          excepturi! Eos quasi obcaecati consequatur odio voluptates asperiores
          alias ipsum, perferendis commodi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ducimus reiciendis, optio perferendis
          hic ipsam totam dolorem dolorum fuga et! Impedit voluptatibus expedita
          nobis nam repudiandae, quo cumque ut tempora numquam! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Excepturi voluptate nemo
          quidem itaque aspernatur qui, provident reiciendis nam, recusandae,
          ullam consequatur nesciunt expedita soluta rem eveniet fugit inventore
          asperiores libero.
        </p>
      </div>
      <kinesis-element
        class="lesson__layout--start__intro__keywords"
        type="depth"
        :strength="10"
      >
        <p>Palabras clave</p>
        <div class="lesson__layout--start__intro__keywords__list">
          <p class="lesson__layout--start__intro__keywords__key">word</p>
          <p class="lesson__layout--start__intro__keywords__key">word</p>
          <p class="lesson__layout--start__intro__keywords__key">word</p>
        </div>
      </kinesis-element>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__content">
      <div class="lesson__layout--start__content__what">
        <h2>¿Qué es el tiro vertical?</h2>
      </div>

      <div class="lesson__layout--start__content__explanation">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          perferendis reprehenderit error at esse est optio eius? Ea, atque quo
          corrupti inventore harum veritatis natus tempora vitae quisquam
          voluptas minus? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Id molestias culpa iste pariatur deleniti assumenda voluptates
          fuga eum, modi eveniet aspernatur similique mollitia voluptatem
          tenetur autem sunt officiis. Deserunt, expedita. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores amet nisi, veritatis itaque
          veniam placeat ipsam rerum maiores labore consectetur quam nulla dicta
          error aliquid sunt tempora esse quibusdam facere?
        </p>
      </div>

      <div class="lesson__layout--start__content__instructions">
        <h3>Ejercicio</h3>
        <p>
          <b>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            alias quos magnam dolor, commodi blanditiis atque architecto
            praesentium totam impedit debitis officia cum, cumque expedita
            aspernatur ratione pariatur nisi fugiat!
          </b>
        </p>
      </div>

      <div class="lesson__layout--start__content__exercice">
        <div class="lesson__layout--start__content__exercice__slick">
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
              {{ value }}
            </SlickItem>
          </SlickList>
        </div>
        <button class="lesson__layout--start__content__exercice__slick__prove">
          Comprobar
        </button>
      </div>

      <div class="lesson__layout--start__content__formulas">
        <div class="lesson__layout--start__content__formulas__formula"></div>
      </div>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__formulas">
      <h2 class="lesson__layout--start__formulas__title">Formulas</h2>
      <div class="lesson__layout--start__formulas__list">
        <kinesis-element
          v-for="i in 5"
          :key="i"
          type="depth"
          :strength="10"
          class="lesson__layout--start__formulas__list__formula"
        >
          <vue-mathjax :formula="formula"> </vue-mathjax>
        </kinesis-element>
      </div>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__behavior">
      <div class="lesson__layout--start__behavior__title">
        <h2>Comportamiento</h2>
      </div>

      <div class="lesson__layout--start__behavior__text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem nisi
          at maxime temporibus cumque officia ad. Ipsam error similique incidunt
          voluptates quisquam eaque adipisci harum amet dicta, est nam? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum,
          nemo perspiciatis exercitationem quod enim, nesciunt cum optio
          provident sint autem quia atque necessitatibus! Consectetur, maxime.
          Nesciunt velit sed molestiae! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sint, dolores. Odio porro, veritatis animi qui sit
          nobis quod accusamus placeat ipsa, iusto fugit nihil quasi doloribus
          nostrum! Nesciunt, ipsa perferendis?
        </p>
      </div>

      <canvas
        class="lesson__layout--start__behavior__animation"
        id="canvasVertical"
        width="100"
        height="350"
      >
      </canvas>

      <button
        @click="startAnimationVerticalUp"
        class="lesson__layout--start__behavior__animation__button"
      >
        Lanzar
      </button>
      <button
        class="lesson__layout--start__behavior__animation__button"
        @click="startAnimationVerticalDown"
      >
        Caida
      </button>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__examples">
      <div class="lesson__layout--start__examples__title">
        <h2>Ejemplo - Caida libre</h2>
      </div>
      <div class="lesson__layout--start__examples__problem">
        <p class="lesson__layout--start__examples__problem__text">
          1. Se deja caer una manzana desde una altura de 30m sobre el suelo
        </p>
        <ol class="lesson__layout--start__examples__problem__questions">
          <li>Cuanto tiempo le toma llegar al piso?</li>
          <li>Que velocidad tiene al momento de tocar el suelo?</li>
        </ol>
      </div>
      <div class="lesson__layout--start__examples__problem__solution">
        <h2>Solucion</h2>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          vero consequatur molestias dolore provident quaerat, odit repellat at
          temporibus eos, sunt itaque excepturi quod harum velit eveniet cumque?
          Ipsa, a?
        </p>
        <kinesis-element
          type="depth"
          :strength="10"
          class="lesson__layout--start__examples__problem__solution__formula"
        >
          <vue-mathjax :formula="formula"> </vue-mathjax>
        </kinesis-element>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          vero consequatur molestias dolore provident quaerat, odit repellat at
          temporibus eos, sunt itaque excepturi quod harum velit eveniet cumque?
          Ipsa, a?
        </p>
        <kinesis-element
          type="depth"
          :strength="10"
          class="lesson__layout--start__examples__problem__solution__formula"
        >
          <vue-mathjax :formula="formula"> </vue-mathjax>
        </kinesis-element>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          vero consequatur molestias dolore provident quaerat, odit repellat at
          temporibus eos, sunt itaque excepturi quod harum velit eveniet cumque?
          Ipsa, a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          sint expedita, at omnis voluptatem inventore placeat doloribus?
          Dolorum beatae quia atque harum quasi? Dolor temporibus ut ab porro
          recusandae iure.
        </p>
      </div>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__content">
      <div class="lesson__layout--start__content__what">
        <h2>¿Qué es la caida libre?</h2>
      </div>

      <div class="lesson__layout--start__content__explanation">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          perferendis reprehenderit error at esse est optio eius? Ea, atque quo
          corrupti inventore harum veritatis natus tempora vitae quisquam
          voluptas minus? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Id molestias culpa iste pariatur deleniti assumenda voluptates
          fuga eum, modi eveniet aspernatur similique mollitia voluptatem
          tenetur autem sunt officiis. Deserunt, expedita. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores amet nisi, veritatis itaque
          veniam placeat ipsam rerum maiores labore consectetur quam nulla dicta
          error aliquid sunt tempora esse quibusdam facere?
        </p>
      </div>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__formulas">
      <h2 class="lesson__layout--start__formulas__title">Formulas</h2>
      <div class="lesson__layout--start__formulas__list">
        <kinesis-element
          v-for="i in 5"
          :key="i"
          type="depth"
          :strength="10"
          class="lesson__layout--start__formulas__list__formula"
        >
          <vue-mathjax :formula="formula"> </vue-mathjax>
        </kinesis-element>
      </div>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__behavior">
      <div class="lesson__layout--start__behavior__title">
        <h2>Comportamiento</h2>
      </div>

      <div class="lesson__layout--start__behavior__text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem nisi
          at maxime temporibus cumque officia ad. Ipsam error similique incidunt
          voluptates quisquam eaque adipisci harum amet dicta, est nam? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum,
          nemo perspiciatis exercitationem quod enim, nesciunt cum optio
          provident sint autem quia atque necessitatibus! Consectetur, maxime.
          Nesciunt velit sed molestiae! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sint, dolores. Odio porro, veritatis animi qui sit
          nobis quod accusamus placeat ipsa, iusto fugit nihil quasi doloribus
          nostrum! Nesciunt, ipsa perferendis?
        </p>
      </div>

      <canvas
        class="lesson__layout--start__behavior__animation"
        id="freeFall"
        width="100"
        height="350"
      >
      </canvas>

      <button @click="startAnimationVertical">Animacion</button>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__examples">
      <div class="lesson__layout--start__examples__title">
        <h2>Ejemplo - Caida libre</h2>
      </div>
      <div class="lesson__layout--start__examples__problem">
        <p class="lesson__layout--start__examples__problem__text">
          1. Se deja caer una manzana desde una altura de 30m sobre el suelo
        </p>
        <ol class="lesson__layout--start__examples__problem__questions">
          <li>Cuanto tiempo le toma llegar al piso?</li>
          <li>Que velocidad tiene al momento de tocar el suelo?</li>
        </ol>
      </div>
      <div class="lesson__layout--start__examples__problem__solution">
        <h2>Solucion</h2>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          vero consequatur molestias dolore provident quaerat, odit repellat at
          temporibus eos, sunt itaque excepturi quod harum velit eveniet cumque?
          Ipsa, a?
        </p>
        <kinesis-element
          type="depth"
          :strength="10"
          class="lesson__layout--start__examples__problem__solution__formula"
        >
          <vue-mathjax :formula="formula"> </vue-mathjax>
        </kinesis-element>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          vero consequatur molestias dolore provident quaerat, odit repellat at
          temporibus eos, sunt itaque excepturi quod harum velit eveniet cumque?
          Ipsa, a?
        </p>
        <kinesis-element
          type="depth"
          :strength="10"
          class="lesson__layout--start__examples__problem__solution__formula"
        >
          <vue-mathjax :formula="formula"> </vue-mathjax>
        </kinesis-element>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          vero consequatur molestias dolore provident quaerat, odit repellat at
          temporibus eos, sunt itaque excepturi quod harum velit eveniet cumque?
          Ipsa, a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          sint expedita, at omnis voluptatem inventore placeat doloribus?
          Dolorum beatae quia atque harum quasi? Dolor temporibus ut ab porro
          recusandae iure.
        </p>
      </div>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__exercises">
      <div class="lesson__layout--start__exercises__title">
        <h2>A practicar</h2>
      </div>

      <div class="lesson__layout--start__exercises__exercise">
        <p class="lesson__layout--start__exercises__exercise__problem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima
          deleniti ipsa pariatur unde. Deserunt doloribus ad quasi pariatur
          tempora odit veritatis eaque sunt ipsum ullam, eius tenetur atque
          nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Vel expedita repellat nobis excepturi distinctio harum maxime,
          perspiciatis mollitia! Dolorum hic perferendis ullam sint ipsum iure
          explicabo voluptatem eveniet inventore incidunt!
        </p>
        <input
          type="text"
          class="lesson__layout--start__exercises__exercise__result"
          placeholder="Ingresar resultado"
        />
      </div>

      <div class="lesson__layout--start__exercises__exercise">
        <p class="lesson__layout--start__exercises__exercise__problem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima
          deleniti ipsa pariatur unde. Deserunt doloribus ad quasi pariatur
          tempora odit veritatis eaque sunt ipsum ullam, eius tenetur atque
          nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Vel expedita repellat nobis excepturi distinctio harum maxime,
          perspiciatis mollitia! Dolorum hic perferendis ullam sint ipsum iure
          explicabo voluptatem eveniet inventore incidunt!
        </p>
        <input
          type="text"
          class="lesson__layout--start__exercises__exercise__result"
          placeholder="Ingresar resultado"
        />
      </div>

      <div class="lesson__layout--start__exercises__exercise">
        <p class="lesson__layout--start__exercises__exercise__problem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima
          deleniti ipsa pariatur unde. Deserunt doloribus ad quasi pariatur
          tempora odit veritatis eaque sunt ipsum ullam, eius tenetur atque
          nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Vel expedita repellat nobis excepturi distinctio harum maxime,
          perspiciatis mollitia! Dolorum hic perferendis ullam sint ipsum iure
          explicabo voluptatem eveniet inventore incidunt!
        </p>
        <input
          type="text"
          class="lesson__layout--start__exercises__exercise__result"
          placeholder="Ingresar resultado"
        />
      </div>
    </div>
  </kinesis-container>
</template>
