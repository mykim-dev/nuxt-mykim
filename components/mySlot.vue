<template>
  <div>
    <h2>Title : {{ pageName }} </h2>
    <slot name="header" :gap="gap"></slot>
    <p>Description : {{ pageDesc }}</p>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
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
        gap: 'kim mi young'
      }
  }
}
</script>