<template>
  <div class="section1-box">
    <div class="trend">
      <h1>인기 스티커</h1>
      <span>스티커를 클릭하여 자세히 볼 수 있습니다.</span>
      <div class="package-box">
        <div v-for="pack in state.packages" :key="pack">
          <img class="package" @click="showSticker(pack.packageId)" :src="pack.packageImg" alt="">
        </div>
      </div>
    </div>
    <div class="popup-box1">
      <div class="packageInfo">
        <img class="package-img" :src="state.packageInfo.packageImg" alt="">
        <span class="package-name">{{ state.packageInfo.packageName }}</span>
        <span class="artist-name">{{ state.packageInfo.artistName }}</span>
      </div>
      <div class="sticker-box">
        <div v-for="sticker in state.stickers" :key="sticker">
          <img class="sticker" :src="sticker.stickerImg" alt="">
        </div>
        <i class="fas fa-times" @click="closeSticker"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
	setup() {
    const store = useStore()

		const state = reactive ({
			packages: {},
      stickers: computed(() => store.getters['getStickers']),
      packageInfo: computed(() => store.getters['getPackageInfo']),
		})
    const showSticker = (packageId) => {
      store.dispatch('stickerPackInfo', packageId)
      let popupBox = document.querySelector('.popup-box1')
      popupBox.style.display = "grid"
    }

    const closeSticker = () => {
      store.commit('CLEAR_STICKERS')
      let popupBox = document.querySelector('.popup-box1')
      popupBox.style.display = "none"
    }

    onMounted(() => {
      store.dispatch('trendingStickerPacks')
      .then(({ data }) => {
        state.packages = data.body.packageList
      })
    })

    return { state, showSticker, closeSticker }
	},
}
</script>
<style>
.section1-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.trend {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.trend h1 {
  color: #fe3792;
  margin-bottom: 1%;
}
.package-box {
  width: 80%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 2%;
  row-gap: 20px;
  margin-top: 5%;
}
.package {
  width: 80px;
}
.package:hover {
  cursor: pointer;
}
.popup-box1 {
  display: none;
  position: absolute;
  top: 145%;
  grid-template-columns: 1fr 2fr;
  background-color: white;
  border: 3px solid #fe3792;
  border-radius: 10px;
  padding: 20px;
  transform: translateY(-25%);
  box-sizing: border-box;
  align-items: center;
  justify-items: center;
  width: 80%;
  max-width: 960px;
  height: 30%;
  min-height: 300px;
}
.package-name {
  font-size: 20px;
  font-weight: bold;
}
.artist-ame {
  font-size: 15px;
  font-weight: bold;
}
.package-img {
  width: 100px;
}
.packageInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sticker-box {
  width: 90%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 5px;
  align-content: center;
}
.sticker-box i {
  position: absolute;
  top: 5%;
  right: 2%;
  font-size: 30px;
  font-weight: bolder;
  color: #fe3792;
}
.sticker-box i:hover {
  cursor: pointer;
}
.sticker {
  width: 50px;
}
</style>