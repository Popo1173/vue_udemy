<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>

    <button @click="show = !show">切り替え</button>
    <br />
    <br />
    <!-- jsフックが8つある :css="false" CSSを利用しないの明示CSSの処理をスキップできる-->
    <transition
      name="fade"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="circle" v-if="show"></div>
    </transition>
    <br />
    <button @click="myComponent = 'FadeA'">ComponentA</button>
    <button @click="myComponent = 'FadeB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent" name="aaa"></component>
    </transition>

    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-if="!show" key="hello">こんにちわ</p>
    </transition>

    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__flash"
      appear
    >
      <p v-if="show">ABCD</p>
    </transition>

    <transition :name="myAnimation" appear>
      <p v-show="show">EFGH</p>
    </transition>
  </div>
</template>

<script>
import FadeA from "./components/FadeA.vue";
import FadeB from "./components/FadeB.vue";

export default {
  component: {
    FadeA,
    FadeB,
  },

  data() {
    return {
      show: true,
      myAnimation: "slide",
      myComponent: "FadeA",
    };
  },
  methods: {
    //CSSと併用して利用する　両方最後まで処理が続く　done()をつけるとCSSの処理も含めて終了させる
    //css使わない場合は必ずdone()をつける
    beforeEnter() {
      //現れる前
    },
    enter(el, done) {
      //現れる時　done()として非同期の時に使う　●●秒したら終わるなど
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      //現れると後
    },
    enterCancelled(el) {
      //現れるアニメーションがキャンセルされる時
    },
    beforeLeave(el) {
      //消える前
    },
    leave(el, done) {
      //消えるとき
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      //消えた後
    },
    leaveCancelled(el) {
      //消えるアニメーションがキャンセルされる時
      //v-showの時だけ利用できる
    },
  },
};
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}

.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: 0.5s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジションの状態 */
  transition: 0.5s;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: 5s;
}
.slide-leave-active {
  /* 逆再生 */
  animation: slide-in 0.5s reverse;
  transition: 5s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }

  to {
    transform: translateX(0);
  }
}

.main {
  padding-top: 5rem;
  width: 70%;
  margin: auto;
  text-align: center;
}
</style>
