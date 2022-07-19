<template>
  <div>
    <myComponent pageName="Vue Life Cycle" pageDesc="Vue Life Cycle 설명" />
    <input type="text" v-model="name" />
    <button @click="updateName">Click</button>
  </div>
</template>

<script>
import myComponent from '@/components/myComponent.vue'
export default {
  components: { myComponent },
  data() {
    return {
      name: 'mykim'
    }
  },
  beforeCreate() {
    console.log('beforeCreate', this.name);
  },
  created() {
    console.log('created', this.name);
  },
  beforeMount() {
    alert('beforeMount');
  },
  mounted() {
    alert('mounted');
  },
  beforeUpdate() {
    alert('beforeUpdate');
  },
  updated() {
    alert('updated');
  },
  beforeDestroy() {
    alert('beforeDestroy');
  },
  destroyed() {
    alert('destroyed');
  },
  methods: {
    updateName() {
      this.name = 'hello';
    }
  }
}
</script>
