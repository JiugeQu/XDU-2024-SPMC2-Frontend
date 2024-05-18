<template>
  <div class="counter">
    <span class="font_1">num:</span>
    <button class="buttonl" @click="deNum()">-</button>
    <span>{{ num }}</span>
    <button class="buttonr" @click="inNum()">+</button>
  </div>
</template>

<script>
export default {
  props: {
    initialQuantity: {
      type: Number,
      default: 1 
    }
  },
  data() {
    return {
      num: 1,
    };
  },
  created() {
    this.num = this.initialQuantity;
  },
  watch: {
    initialQuantity(newVal) {
      this.num = newVal;
    },
    num(newVal) {
      this.$emit('update:quantity', newVal);
    }
  },
  methods: {
    inNum() {
      this.num++;
      this.$emit('update:quantity', this.num); // 发送更新事件
    },
    deNum() {
      if (this.num > 1) {
        this.num--;
        this.$emit('update:quantity', this.num); // 发送更新事件
      }
    }
  },
};
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: row;
  font-size: 20px;
}
.buttonl {
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.buttonr {
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 1rem;
}
</style>