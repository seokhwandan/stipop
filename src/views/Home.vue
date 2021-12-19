<template>
  <div>
    <div class="landing">
      <Landing/>
    </div>
    <div class="section" id="section1">
      <Section1/>
    </div>
    <div class="section" id="section2">
      <Section2/>
    </div>
    <div class="section" id="section3">
      <Section3/>
    </div>
    <div class="buttons">
      <button class="btn" id="btn1" @click="move1"></button>
      <button class="btn" id="btn2" @click="move2"></button>
      <button class="btn" id="btn3" @click="move3"></button>
      <button class="btn" id="btn4" @click="move4"></button>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import Landing from '@/components/Landing.vue'
import Section1 from '@/components/Section1.vue'
import Section2 from '@/components/Section2.vue'
import Section3 from '@/components/Section3.vue'

export default {
  name: 'Home',
  components: {
    Landing,
    Section1,
    Section2,
    Section3
  },
  setup() {
    const state = reactive ({
      sec1top: 0,
      sec2top: 0,
      sec3top: 0,
    })
    var btns = document.getElementsByClassName('btn')
    const move1 = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      for (var i = 0; i < btns.length; i++) {
        if (i == 0) {
          btns[i].style.transform = 'scale(1.5)'
          btns[i].style.boxShadow = '0 0 5px #fe3792'
        } else {
          btns[i].style.transform = 'scale(1)'
          btns[i].style.boxShadow = 'unset'
        }
      }
    }
    const move2 = () => {
      window.scrollTo({ top: state.sec1top, behavior: 'smooth' })
      for (var i = 0; i < btns.length; i++) {
        if (i == 1) {
          btns[i].style.transform = 'scale(1.5)'
          btns[i].style.boxShadow = '0 0 5px #fe3792'
        } else {
          btns[i].style.transform = 'scale(1)'
          btns[i].style.boxShadow = 'unset'
        }
      }
    }
    const move3 = () => {
      window.scrollTo({ top: state.sec2top, behavior: 'smooth' })
      for (var i = 0; i < btns.length; i++) {
        if (i == 2) {
          btns[i].style.transform = 'scale(1.5)'
          btns[i].style.boxShadow = '0 0 5px #fe3792'
        } else {
          btns[i].style.transform = 'scale(1)'
          btns[i].style.boxShadow = 'unset'
        }
      }
    }
    const move4 = () => {
      window.scrollTo({ top: state.sec3top, behavior: 'smooth' })
      for (var i = 0; i < btns.length; i++) {
        if (i == 3) {
          btns[i].style.transform = 'scale(1.5)'
          btns[i].style.boxShadow = '0 0 5px #fe3792'
        } else {
          btns[i].style.transform = 'scale(1)'
          btns[i].style.boxShadow = 'unset'
        }
      }
    }
    window.addEventListener('wheel', () => {
      for (var i = 0; i < btns.length; i++) {
        if (window.pageYOffset < state.sec1top * 0.8) {
          if (i == 0) {
            btns[i].style.transform = 'scale(1.5)'
            btns[i].style.boxShadow = '0 0 5px #fe3792'
          } else {
            btns[i].style.transform = 'scale(1)'
            btns[i].style.boxShadow = 'unset'
          }
        } else if (window.pageYOffset < state.sec2top * 0.8) {
          if (i == 1) {
            btns[i].style.transform = 'scale(1.5)'
            btns[i].style.boxShadow = '0 0 5px #fe3792'
          } else {
            btns[i].style.transform = 'scale(1)'
            btns[i].style.boxShadow = 'unset'
          }
        } else if (window.pageYOffset < state.sec3top * 0.8) {
          if (i == 2) {
            btns[i].style.transform = 'scale(1.5)'
            btns[i].style.boxShadow = '0 0 5px #fe3792'
          } else {
            btns[i].style.transform = 'scale(1)'
            btns[i].style.boxShadow = 'unset'
          }
        } else if (window.pageYOffset > state.sec3top * 0.8) {
          if (i == 3) {
            btns[i].style.transform = 'scale(1.5)'
            btns[i].style.boxShadow = '0 0 5px #fe3792'
          } else {
            btns[i].style.transform = 'scale(1)'
            btns[i].style.boxShadow = 'unset'
          }
        }
      }
    })
    onMounted(() => {
      state.sec1top = document.getElementById('section1').offsetTop
      state.sec2top = document.getElementById('section2').offsetTop
      state.sec3top = document.getElementById('section3').offsetTop
      window.scrollTo({ top: 0, behavior: 'smooth' })
      const btn1 = document.getElementById('btn1')
      btn1.style.transform = 'scale(1.5)'
      btn1.style.boxShadow = '0 0 5px #fe3792'
    })

    return { move1, move2, move3, move4 }
  },
}
</script>

<style>
.landing {
  width: 100%;
  height: 100vh;
}
.buttons {
  position: fixed;
  top: 50%;
  right: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
}
.btn {
  width: 10px;
  height: 10px;
  margin: 1vh;
  border-radius: 100%;
  border: none;
  background-color: #fe3792;
}
.btn:hover {
  cursor: pointer;
  background-color: #fe3792;
}
.section {
  width: 100%;
  height: 100vh;
}
</style>