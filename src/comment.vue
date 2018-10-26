<template>
<div>
  <div class='box'>其他版块</div>
  <div class='list'>
    <div class='item animated' v-for='item in items' :key='item.id' v-if='item'>
      <p class='comment'>{{item.content}}</p>
      <span class='time'>{{item.updateAt}}</span>
    </div>
  </div>
  <div class='box'>其他版块</div>
</div>
</template>

<script>
import jq from 'jquery'

export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.getList(6)
    var that = this
    var contentTimer = setInterval(function(){
      that.getList(1);
      // console.log(that.items)
    },2000)
    setTimeout(function(){
      clearInterval(contentTimer)
    },600000)
  },
  methods: {
    getList(num,id) {
      var that = this
      var url = num === 1 ? 'http://localhost:3000/service/commentlist.do/commentOne' : 'http://localhost:3000/service/commentlist.do/commentList'
      jq.ajax({
        type:'get',
        url: url,
        error: function () {
        },
        success: function (res) {
          console.log(res)
          var newCount = res.commentList.length
          console.log(newCount)
          if(num && num > 1 && newCount > 1) {
            return that.items = res.commentList
          } else if (num && num === 1 && newCount === 1) {
            let items = that.items
            items = items.unshift(res.commentList[0])
          }
          that.$nextTick(function(){
              that.handleAnimation();
              that.items.pop();
					})
        }
      })
    },
    handleAnimation() {
      jq('.item').addClass('fadeInDownAll')
      jq('.item:first').addClass('delay-1s')
      jq('.item').on('webkitAnimationEnd', function () {
        jq(this).removeClass('fadeInDownAll delay-1s').addClass('fadeOutDown');
        jq(this).removeClass('fadeOutDown');
      })
    }
  }
}
</script>

<style scoped lang='stylus'>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
.list {
  width:100%;
  overflow:hidden;
}
.item{
  width:100%;
  margin-bottom:10px;
  border:1px solid #999;
  border-radius:5px;
}
.time{
  color:#999;
  font-size:12px;
}
.box{
  height:100px;
  background:#333;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeInDownAll {
  from {
    opacity: 0.5;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 120%, 0);
    transform: translate3d(0, 120%, 0);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}
.fadeInDownAll {
  -webkit-animation-name: fadeInDownAll;
  animation-name: fadeInDownAll;
}
.fadeInDownFirst{
  -webkit-animation-name: fadeInDownFirst;
  animation-name: fadeInDownFirst;
}
.animated.delay-1s {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
</style>
