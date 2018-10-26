<template>
  <div id="app">
    <comment></comment>
  </div>
</template>

<script>
import Comment from './comment'
export default {
  name: 'app',
  components: {
    Comment
  }
}
</script>

<style scoped lang='stylus'>
body{
  padding:0;
  margin:0;
}
*{
  margin:0;
  padding:0;
}
</style>
