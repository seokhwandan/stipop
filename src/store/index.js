import { createStore } from 'vuex'
import axios from 'axios'

const STIPOP_API = "https://messenger.stipop.io"

export default createStore({
  state: {
    stickers: [],
    packageInfo: {},
  },
  mutations: {
    STICKERS (state, packInfo) {
      state.stickers = packInfo
    },
    PACKAGE (state, info) {
      state.packageInfo = info
    },
    CLEAR_STICKERS (state) {
      state.stickers = []
    }
  },
  actions: {
    trendingStickerPacks () {
      return axios
      .get(`${STIPOP_API}/v1/package`, {
        params: { userId: "32df0190-eea0-4edb-915a-bd6306308b79", limit: 35, pageNumber: 2 },
        headers: { apikey: "0e65fb628feac140d394edadaefe1e25" }
      })
    },
    newStickerPacks () {
      return axios
      .get(`${STIPOP_API}/v1/package/new`, {
        params: { userId: "32df0190-eea0-4edb-915a-bd6306308b79", limit: 35 },
        headers: { apikey: "0e65fb628feac140d394edadaefe1e25" }
      })
    },
    stickerPackInfo ({ commit }, packageId) {
      return axios
      .get(`${STIPOP_API}/v1/package/${packageId}`, {
        params: { userId: "32df0190-eea0-4edb-915a-bd6306308b79" },
        headers: { apikey: "0e65fb628feac140d394edadaefe1e25" }
      })
      .then(({ data }) => {
        commit('STICKERS', data.body.package.stickers)
        commit('PACKAGE', data.body.package)
      })
    },
  },
  getters: {
    getStickers (state) {
      return state.stickers
    },
    getPackageInfo (state) {
      return state.packageInfo
    },
  },
  modules: {
  }
})
