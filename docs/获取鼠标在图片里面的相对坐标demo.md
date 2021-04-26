# 获取鼠标在图片里面的相对坐标demo

> rect.left 图片起点横坐标 X
> rect.top  图片起点纵坐标 Y
> e.pageX 鼠标相对页面起点的横坐标 X
>
>  e.pageY  鼠标相对页面起点的的纵坐标 Y
>
> 思路：页面鼠标的相对坐标-图片鼠标的相对坐标，这样图片的起点就是我们的(0,0)，从而算出坐标

````vue
<!-- demo -->
<template>
  <div class="circle" @click="showPopup"></div>
</template>

<script>
export default {
  data() {
    return {
      popup: {
        x: "",
        y: "",
      },
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    showPopup: function (e) {
      var rect = e.target.getBoundingClientRect();
      this.popup.x = e.pageX - rect.left + "px";
      this.popup.y = e.pageY - rect.top + "px";
      console.log("popup", this.popup);
    },
  },
};
</script>
<style lang='scss' scoped>
.circle {
  width: 500px;
  height: 500px;
  background: #ccc;
}
</style>
````

