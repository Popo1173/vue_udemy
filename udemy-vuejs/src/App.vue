<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>

    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベント</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <!-- <EventTitle
        :value="eventData.title"
        @input="eventData.title = $event"
      ></EventTitle> -->
      <div>
        <label for="MaxNumber">最大人数</label>
        <input
          id="MaxNumber"
          type="number"
          v-model.number="eventData.MaxNumber"
        />
        <p>{{ typeof eventData.MaxNumber }}</p>
      </div>
    </div>
    <div>
      <h2>主催者</h2>
      <label for="host">タイトル</label>
      <input id="host" type="text" v-model.trim="eventData.host" />
      <pre>{{ eventData.host }}</pre>
      <label for="detail">イベントの内容</label>
      <textarea
        id="detail"
        cols="40"
        rows="10"
        v-model="eventData.detail"
      ></textarea>
      <p style="white-space: pre">{{ eventData.detail }}</p>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
      <label for="isPrivate">非公開</label>
      <pre>{{ eventData.isPrivate }}</pre>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target" />
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <label for="free">有料</label>

      <p>開催場所</p>
      <!-- 複数の選択させるとき<select v-model="eventData.location" multiple>-->
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
//ローカルコンポーネント登録
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: "タイトル",
        MaxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京",
        //location: [], selectでmultiple使うときは配列にする
      },
    };
  },

  //ローカルコンポーネント登録
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle,
  },

  methods: {
    incrementNumber(value) {
      //子コンポーネントの第二引数をとる事ができる
      //this.$emit("my-click", this.totalNumber + 1);
      //this.totalNumber + 1)
      this.number = value;
    },
  },
};
</script>
