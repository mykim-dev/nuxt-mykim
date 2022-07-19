<template>
  <div>
    <h2>Title : {{ pageName }} </h2>
    <p>Description : {{ pageDesc }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  // props: ['title'],
  props: {
    pageName: {
      default: 'Default Title',
      type: String
    },
    pageDesc: {
      default: '',
      type: String
    }
  },
  data (){
      return {
      }
  }
}
</script>