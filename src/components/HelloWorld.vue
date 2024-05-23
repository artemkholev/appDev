<template>
  <div>
    <div class="header">header_main</div>
    <div class="container">
      <h1>{{ msg }}</h1>
      <div class="hello" style="display: flex; justify-content: center">
        <div class="button" style="display: flex; gap: 10px">
          <button @click="increment">+</button>
          <p class="count">{{ count > 5 ? "5+" : count }}</p>
        </div>
      </div>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

defineProps({
  msg: String,
});

const count = ref<number>(0);

const increment = () => {
  count.value++;
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
