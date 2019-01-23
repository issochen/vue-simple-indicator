<template>
  <div id="app">
    <button @click="show">show</button>
    <button @click="hidden">hidden</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    show () {
      // this.$indic.show()
      // this.$indic.show('loading...')
      // this.$indic.show({text: 'loading', autoClose: 2000})
      // this.$indic.show({text: 'loading'}, {background: 'red'})
      // this.$indic.show({text:'loading',type: 'bounce'})  //  spinner effect  bounce  
      this.$indic.show({type: 'none'})  //  spinner effect  bounce  
    },
    hidden () {
      this.$indic.hidden()
    }
  }
}
</script>

<style>  

</style>
