<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import { SlickList, SlickItem } from "vue-slicksort";

const opts = reactive({
  id: 104,
  items: [
    {
      value: "Un balon arrojado hacia arriba",
      id: 141, 
      color: "#ffcb77",
    },
    {
      value: "Una persona que salta lo mas alto posible",
      id: 142,
      color: "#ffcb77",
    },
    {
      value: "Lanzar una moneda al aire",
      id: 143,
      color: "#ffcb77",
    },
    {
      value: "La trayectoria de una pelota de golf",
      id: 144,
      color: "#ffcb77",
    },
    {
      value: "Un cohete que se lanza",
      id: 145,
      color: "#ffcb77",
    },
    {
      value: "Un saque de voleibol",
      id: 146,
      color: "#ffcb77",
    },
  ],
});

const answers = reactive({
  id: 105,
  items: [],
});

const correctAnswer = ref([142,145, 141, 143 ])
const answerFirst = ref(null)
const answerSecond = ref(null)
const answerThird = ref(null)

const styleFirst = computed(() => {
    return answerFirst.value == 45 ? '#17c3b2' : '#fe6d73'
})

const styleSecond = computed(() => {
    return answerSecond.value == 2.47 ? '#17c3b2' : '#fe6d73'
})

const styleThird = computed(() => {
    return answerThird.value == 19.6 ? '#17c3b2' : '#fe6d73'
})

const checkDragAns = () => {
    if(answers.items.length === 0 ) return;
    answers.items.map(e => {
        if(!correctAnswer.value.includes(e.id)) {
            e.color = '#fe6d73'
        }
    })

}

const verticalFormulas = [
  "$$y= {y_{0} + V_{0}t + \\frac{at^2}{2} }$$",
  "$$v= {v_{0} + at }$$",
];

const freeFallFormulas = [
  "$$v_{f}= { -gt }$$",
  "$$y_{f} = {y_{0} - \\frac{gt}{2} }$$",
  "$$v_{f}^2 = { 2gh }$$",
];

let canvasVertical = null;
let contextVertical = null;

let canvasFreeFall = null;
let contextFreeFall = null;

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
  contextFreeFall = canvasFreeFall.getContext("2d");
  canvasFreeFall.width = document.getElementsByClassName(
    "lesson__layout--start__behavior"
  )[0].clientWidth;

  canvasVertical.height = 350;
  startCanvasVertical();
  startCanvasFall();
});

const ballAnimation = reactive({
  width: 50,
  height: 50,
  x: 0,
  y: 0,
});

const fallBall = reactive({
  x: 0,
  y: 0,
});

grassImage.onload = () => {
  contextVertical.drawImage(grassImage, 0, canvasVertical.height - 150);
  contextFreeFall.drawImage(grassImage, 0, canvasVertical.height - 150);
};

ballImage.onload = () => {
  contextVertical.drawImage(
    ballImage,
    ballAnimation.x,
    ballAnimation.y,
    50,
    50
  );

  contextFreeFall.drawImage(ballImage, canvasFreeFall.width / 2, 0, 50, 50);
};

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

const drawElementsFall = () => {
  contextFreeFall.clearRect(0, 0, canvasFreeFall.width, canvasFreeFall.height);
  contextFreeFall.drawImage(grassImage, 0, canvasFreeFall.height - 150);
  contextFreeFall.drawImage(ballImage, fallBall.x, fallBall.y, 50, 50);
};

const updateVerticalUp = () => {
  if (ballAnimation.y == 1) return;
  ballAnimation.y -= 1;
};

const updateFallDown = () => {
  fallBall.y += 1;
};

const updateVerticalDown = () => {
  if (ballAnimation.y == canvasVertical.height - 55) return;
  ballAnimation.y += 1;
};

const restarFall = () => {
  window.cancelAnimationFrame(startFallAnimation);
  contextFreeFall.clearRect(0, 0, canvasFreeFall.width, canvasFreeFall.height);
  contextFreeFall.drawImage(ballImage, canvasFreeFall.width / 2, 0, 50, 50);
  contextFreeFall.drawImage(grassImage, 0, canvasFreeFall.height - 150);
  fallBall.y = 0;
};

const startFallAnimation = () => {
  if (fallBall.y == canvasVertical.height - 55) return;
  updateFallDown();
  drawElementsFall();
  window.requestAnimationFrame(startFallAnimation);
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

function startCanvasFall() {
  fallBall.x = canvasVertical.width / 2;
  fallBall.y = 0;
  drawElementsFall();
}
</script>

<template>
  <kinesis-container class="lesson__layout--start">
    <div class="lesson__layout--start__header">
      <kinesis-element class="lesson__layout--start__header__title">
        <h1>Tiro vertical y Caída libre</h1>
      </kinesis-element>
    </div>

    <div class="lesson__layout--start__intro">
      <div class="lesson__layout--start__intro__text">
        <h2>Introducción</h2>
        <p>
          De entre todos los movimientos rectilíneos uniformemente acelerados
          <b>(m.r.u.a.)</b> o movimientos rectilíneos uniformemente variados
          <b>(m.r.u.v.)</b>
          que se dan en la naturaleza, existen dos de particular interés: la
          caída libre y el lanzamiento vertical. En este apartado estudiaremos
          la caída libre. Ambos se rigen por las ecuaciones propias de los
          movimientos rectilíneos uniformemente acelerados
          <b>(m.r.u.a.)</b> o movimientos rectilíneos uniformemente variados
          <b>(m.r.u.v.)</b>
        </p>
      </div>
      <kinesis-element
        class="lesson__layout--start__intro__keywords"
        type="depth"
        :strength="10"
      >
        <p>Palabras clave</p>
        <div class="lesson__layout--start__intro__keywords__list">
          <p class="lesson__layout--start__intro__keywords__key">Vertical</p>
          <p class="lesson__layout--start__intro__keywords__key">M.R.U.A.</p>
          <p class="lesson__layout--start__intro__keywords__key">M.R.U.V.</p>
          <p class="lesson__layout--start__intro__keywords__key">Caída libre</p>
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
          Se denomina así a un tipo de movimiento que es resultado de arrojar un
          objeto verticalmente hacia arriba (o hacia abajo) desde cierta altura
          H. Una vez lanzado, el cuerpo asciende durante cierto tiempo y luego
          desciende en (caída libre), con una aceleración igual al valor de la
          gravedad. En general, cuando se estudian los tiros verticales, no se
          toma en cuenta ningún tipo de fuerza de roce con el aire.
        </p>
      </div>

      <div class="lesson__layout--start__content__instructions">
        <h3>Ejercicio</h3>
        <p>
          <b>
            Arrastra las opciones que pertenezcan a un tiro vertical al recuadro
            de la derecha
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
              v-for="({ value, id, color }, i) in answers.items"
              :key="id"
              :index="i"
              class="lesson__layout--start__content__exercice__drag__item"
              :style="{ background: color ? color : '#ffcb77'}"
            >
              {{ value }}
            </SlickItem>
          </SlickList>
        </div>
        <button class="lesson__layout--start__content__exercice__slick__prove" @click="checkDragAns">
          Comprobar
        </button>
      </div>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__formulas">
      <h2 class="lesson__layout--start__formulas__title">Formulas</h2>
      <div class="lesson__layout--start__formulas__list">
        <kinesis-element
          v-for="(i, idx) in verticalFormulas"
          :key="idx"
          type="depth"
          :strength="10"
          class="lesson__layout--start__formulas__list__formula"
        >
          <vue-mathjax :formula="i"> </vue-mathjax>
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
          En el lanzamiento vertical un objeto es lanzado verticalmente hacia
          arriba o hacia abajo desde cierta altura H despreciando cualquier tipo
          de rozamiento con el aire o cualquier otro obstáculo. Se trata de un
          movimiento rectilíneo uniformemente acelerado (m.r.u.a.) o movimiento
          rectilíneo uniformemente variado (m.r.u.v.) en el que la aceleración
          coincide con el valor de la gravedad. En la superficie de la Tierra,
          la aceleración de la gravedad se puede considerar constante, dirigida
          hacia abajo, se designa por la letra g y su valor es de 9.8 m/s2.
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
        <h2>Ejemplo - Tiro vertical</h2>
      </div>
      <div class="lesson__layout--start__examples__problem">
        <p class="lesson__layout--start__examples__problem__text">
          1. Un joven espera a sus campaneros de juego mientras lanza una pelota
          verticalmente hacia arriba. Cuando llega uno de sus compañeros, le
          pide a este que mida el tiempo de viaje de la pelota y, después de
          varios lanzamientos, registran un tiempo de 4s para los viajes de ida
          y vuelta.
        </p>
        <ol class="lesson__layout--start__examples__problem__questions">
          <li>¿A que velocidad se lanza la pelota?</li>
          <li>¿Que altura alcanza esta?</li>
        </ol>
      </div>
      <div class="lesson__layout--start__examples__problem__solution">
        <h2>Solucion</h2>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Dado que se conoce el tiempo de recorrido, podemos calcular la
          velocidad inicial y, a partir de este valor, calculamos la altura que
          alcanza la pelota y la sustituimos:
        </p>
        <kinesis-element
          type="depth"
          :strength="10"
          class="lesson__layout--start__examples__problem__solution__formula"
        >
          <vue-mathjax
            :formula="'$${{v}_{0}}=\\frac{g{{t}_{r}}}{2}=\\frac{\\left( 9.8\\frac{m}{{{s}^{2}}} \\right)\\left( 4s \\right)}{2}=19.6\\frac{m}{s}$$'"
          >
          </vue-mathjax>
        </kinesis-element>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Entonces la altura que alcanza la pelota es:
        </p>
        <kinesis-element
          type="depth"
          :strength="10"
          class="lesson__layout--start__examples__problem__solution__formula"
        >
          <vue-mathjax
            :formula="'$${{h}_{\\max }}=\\frac{{{v}_{0}}^{2}}{2g}=\\frac{{{\\left( 19.6\\frac{m}{s} \\right)}^{2}}}{2\\left( 9.8\\frac{m}{{{s}^{2}}} \\right)}=19.6m$$'"
          >
          </vue-mathjax>
        </kinesis-element>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          La altura que alcanza la pelota es prácticamente de 19.6 metros,
          lanzada a 19.6 m/s
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
          Se denomina caída libre al movimiento de un cuerpo bajo la acción
          exclusiva de un campo gravitatorio. En caída libre, un objeto se deja
          caer desde el reposo, entonces su velocidad inicial es nula. Las
          fórmulas que vamos a emplear para este movimiento son las mismas de
          movimiento rectilíneo uniforme, pero considerando en todo caso que la
          velocidad inicial es nula. ¡Esto reducirá bastante las fórmulas por lo
          que no tendremos problema alguno para emplearlas!
        </p>
      </div>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__formulas">
      <h2 class="lesson__layout--start__formulas__title">Formulas</h2>
      <div class="lesson__layout--start__formulas__list">
        <kinesis-element
          v-for="(i, id) in freeFallFormulas"
          :key="id"
          type="depth"
          :strength="10"
          class="lesson__layout--start__formulas__list__formula"
        >
          <vue-mathjax :formula="i"> </vue-mathjax>
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
          La aceleración de la gravedad es un vector que apunta hacia abajo en
          todo momento, así que tenemos que asociar un signo negativo al valor
          de la gravedad para solucionar estos ejercicios. Nuestro marco de
          referencia para estos ejercicios siempre será el eje y.
        </p>
      </div>

      <canvas
        class="lesson__layout--start__behavior__animation"
        id="freeFall"
        width="100"
        height="350"
      >
      </canvas>

      <button
        @click="startFallAnimation"
        class="lesson__layout--start__behavior__animation__button"
      >
        Lanzar
      </button>
      <button
        class="lesson__layout--start__behavior__animation__button"
        @click="restarFall"
      >
        Reiniciar
      </button>
    </div>

    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__examples">
      <div class="lesson__layout--start__examples__title">
        <h2>Ejemplo - Caída libre</h2>
      </div>
      <div class="lesson__layout--start__examples__problem">
        <p class="lesson__layout--start__examples__problem__text">
          1. ¿Desde que altura debe caer un objeto para golpear el suelo con
          velocidad de 20 m/s?
        </p>
      </div>
      <div class="lesson__layout--start__examples__problem__solution">
        <h2>Solucion</h2>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Recordemos que lo primero que tenemos que hacer es tomar en cuenta los
          datos que nos está proporcionando el problema. El único dato que nos
          proporciona es la velocidad final, y como dato predeterminado tenemos
          el valor de la gravedad, el cual ya sabemos que es constante.
        </p>
        <kinesis-element
          type="depth"
          :strength="10"
          class="lesson__layout--start__examples__problem__solution__formula"
        >
          <vue-mathjax :formula="'$$v_{f}^2 = { 2gh }$$'"> </vue-mathjax>
        </kinesis-element>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Reemplazamos los valores...
        </p>
        <kinesis-element
          type="depth"
          :strength="10"
          class="lesson__layout--start__examples__problem__solution__formula"
        >
          <vue-mathjax :formula="'$$(20)^2 = { 2(9.8)h }$$'"> </vue-mathjax>
        </kinesis-element>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Como podemos ver, nos queda la incógnita h, que viene siendo lo que
          nos pide determinar el problema
        </p>
        <kinesis-element
          type="depth"
          :strength="10"
          class="lesson__layout--start__examples__problem__solution__formula"
        >
          <vue-mathjax :formula="'$$h = { \\frac{20^2}{ 2(9.8)} }$$'">
          </vue-mathjax>
        </kinesis-element>
        <p
          class="lesson__layout--start__examples__problem__solution__paragraph"
        >
          Por último, tenemos que la altura es h = 20.38 m/s
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
          Una manzana cae de un árbol y llega al suelo en 3 segundos, ¿de qué
          altura cayó la manzana?
        </p>
        <input
          type="text"
          class="lesson__layout--start__exercises__exercise__result"
          placeholder="Ingresar resultado"
          v-model="answerFirst"
          :style="{ background: styleFirst }"
        />
      </div>

      <div class="lesson__layout--start__exercises__exercise">
        <p class="lesson__layout--start__exercises__exercise__problem">
          Se deja caer una manzana desde una altura de 30m, sobre el suelo.
          ¿Cuánto tiempo le toma llegar al piso?
        </p>
        <input
          type="text"
          class="lesson__layout--start__exercises__exercise__result"
          placeholder="Ingresar resultado"
          v-model="answerSecond"
          :style="{ background: styleSecond }"
        />
      </div>

      <div class="lesson__layout--start__exercises__exercise">
        <p class="lesson__layout--start__exercises__exercise__problem">
          Un joven espera a sus campaneros de juego mientras lanza una pelota
          verticalmente hacia arriba. Cuando llega uno de sus compañeros, le
          pide a este que mida el tiempo de viaje de la pelota y, después de
          varios lanzamientos, registran un tiempo de 4s para los viajes de ida
          y vuelta. ¿A que velocidad se lanza la pelota?
        </p>
        <input
          type="text"
          class="lesson__layout--start__exercises__exercise__result"
          placeholder="Ingresar resultado"
          v-model="answerThird"
          :style="{ background: styleThird }"
        />
      </div>
    </div>
    <hr class="lesson__layout--start__break" />

    <div class="lesson__layout--start__recommendations">
      <h2 class="lesson__layout--start__recommendations__title">
        Recursos recomendados
      </h2>
      <div class="lesson__layout--start__recommendations__list">
        <div
          class="lesson__layout--start__recommendations__list__recommendation"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k9y4Y3huCss"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div
          class="lesson__layout--start__recommendations__list__recommendation"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ri-uJO4t1D4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div
          class="lesson__layout--start__recommendations__list__recommendation"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/H4hEWkxgk5g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>
