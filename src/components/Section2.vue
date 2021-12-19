<template>
  <div class="section2-box">
    <div class="trend">
      <h1>최신 스티커</h1>
      <span>스티커를 클릭하여 자세히 볼 수 있습니다.</span>
      <div class="package-box">
        <div v-for="pack in state.packages" :key="pack">
          <img class="package" @click="showSticker(pack.packageId)" :src="pack.packageImg" alt="">
        </div>
      </div>
    </div>
    <div class="popup-box2">
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
      let popupBox = document.querySelector('.popup-box2')
      popupBox.style.display = "grid"
    }

    const closeSticker = () => {
      store.commit('CLEAR_STICKERS')
      let popupBox = document.querySelector('.popup-box2')
      popupBox.style.display = "none"
    }

    onMounted(() => {
      store.dispatch('newStickerPacks')
      .then(({ data }) => {
        state.packages = data.body.packageList
      })
    })
    return { state, showSticker, closeSticker }
  },
}
</script>

<style>
.section2-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.popup-box2 {
  display: none;
  position: absolute;
  top: 245%;
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

</style>