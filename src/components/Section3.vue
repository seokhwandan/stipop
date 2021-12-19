<template>
  <div class="section-box">
    <input v-model="state.keyword" type="text">
    {{ state.keyword }}
    <button @click="search()">search</button>
    <div class="result-box">
      <div v-for="sticker in state.searchResult" :key="sticker">
        <img :src="sticker.stickerImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    
    const state = reactive({
      keyword: '',
      searchResult: []
    })
    const search = () => {
      console.log(state.keyword)
      store.dispatch('search', state.keyword)
      .then(({ data }) => {
        state.searchResult = data.body.stickerList
        console.log(state.searchResult)
      })
    }
    return { state, search }
  },
}

</script>
<style>
.section-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.result-box {
  width: 80%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 2%;
  row-gap: 20px;
  margin-top: 5%;
}
.result-box img {
  width: 80px;
}
</style>