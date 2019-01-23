<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div
      class="toast"
      :style="style"
      v-show="visible"
    >
      <div class="loadEffect" v-if="type==='effect'">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="spinner" v-else-if="type==='bounce'">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
      <div class="fadeEffect" v-else-if="type==='spinner'">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
        <div class="bar7"></div>
        <div class="bar8"></div>
        <div class="bar9"></div>
        <div class="bar10"></div>
        <div class="bar11"></div>
        <div class="bar12"></div>
      </div>
      <div :class="{'text':type!== 'effect' && type!== 'bounce' && type!== 'spinner'}">{{text}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Indicator',
  props: {
    text: { type: String, default: '加载中...' },
    isTimer: { type: Boolean, default: false},
    autoClose: { type: Number },
    type: {type: String, default: 'spinner'}
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {
    afterLeave () {  // 组件消失隐藏后 则向indicator的扩展组件传递closed方法
      this.$emit('closed')
    },
    afterEnter () {
    }
  },
  computed: {
    style () {
      return {}
    }
  }
}
</script>

<style scoped>

.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 140px;
  margin-top: -61px;
  margin-left: -70px;
  text-align: center;
  line-height: 28px;
  border-radius: 8px;
  color: #fff;
  background-color: rgba(50, 50, 51, 0.88);
  z-index: 2000;
}
.text{
  line-height: 80px
}
/* vue动画效果 */
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}
/* effect */
.loadEffect{
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  transform: scale(.8)
}
.loadEffect span{
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #eee;
  position: absolute;
  animation: load 1.04s ease infinite;
}
@keyframes load{
  0%{
      -webkit-transform: scale(1.2);
      opacity: 1;
  }
  100%{
      -webkit-transform: scale(.3);
      opacity: 0.5;
  }
}
.loadEffect span:nth-child(1){
  left: 0;
  top: 50%;
  margin-top:-10px;
  animation-delay:0.13s;
}
.loadEffect span:nth-child(2){
  left: 14px;
  top: 14px;
  animation-delay:0.26s;
}
.loadEffect span:nth-child(3){
  left: 50%;
  top: 0;
  margin-left: -10px;
  animation-delay:0.39s;
}
.loadEffect span:nth-child(4){
  top: 14px;
  right:14px;
  animation-delay:0.52s;
}
.loadEffect span:nth-child(5){
  right: 0;
  top: 50%;
  margin-top:-10px;
  animation-delay:0.65s;
}
.loadEffect span:nth-child(6){
  right: 14px;
  bottom:14px;
  animation-delay:0.78s;
}
.loadEffect span:nth-child(7){
  bottom: 0;
  left: 50%;
  margin-left: -10px;
  animation-delay:0.91s;
}
.loadEffect span:nth-child(8){
  bottom: 14px;
  left: 14px;
  animation-delay:1.04s;
}

/* bounce */
.spinner {
  margin: 20px auto 0;
  width: 140px;
  text-align: center;
}
.spinner > div {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  animation: bouncedelay 1.4s infinite ease-in-out;
  animation-fill-mode: both;
}
 
.spinner .bounce1 {
  animation-delay: -0.32s;
}
 
.spinner .bounce2 {
  animation-delay: -0.16s;
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0)
  } 
  40% {
    transform: scale(1.0)
  }
}
  /* spinner */
.fadeEffect {
  width: 100px;
  height: 80px;
  position: relative;
  margin: 0 auto;
}
.fadeEffect div {
  width:2px;
  height:10px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  animation: loading 2s linear infinite;
}
.fadeEffect .bar1 {transform:rotate(0deg) translate(0, -26px); animation-delay: -0s;}
.fadeEffect .bar2 {transform:rotate(30deg) translate(0, -26px); animation-delay: -1.8334s;}
.fadeEffect .bar3 {transform:rotate(60deg) translate(0, -26px); animation-delay: -1.6668s;}
.fadeEffect .bar4 {transform:rotate(90deg) translate(0, -26px); animation-delay: -1.5002s;}
.fadeEffect .bar5 {transform:rotate(120deg) translate(0, -26px); animation-delay: -1.3336s;}
.fadeEffect .bar6 {transform:rotate(150deg) translate(0, -26px); animation-delay: -1.167s;}
.fadeEffect .bar7 {transform:rotate(180deg) translate(0, -26px); animation-delay: -1.0004s;}
.fadeEffect .bar8 {transform:rotate(210deg) translate(0, -26px); animation-delay: -0.8338s;}
.fadeEffect .bar9 {transform:rotate(240deg) translate(0, -26px); animation-delay: -0.6672s;}
.fadeEffect .bar10 {transform:rotate(270deg) translate(0, -26px); animation-delay: -0.5006s;}
.fadeEffect .bar11 {transform:rotate(300deg) translate(0, -26px); animation-delay: -0.334s;}
.fadeEffect .bar12 {transform:rotate(330deg) translate(0, -26px); animation-delay: -0.1674s;}
@keyframes loading {
  0% {opacity: 1}
  100% {opacity: .05}
}
</style>

