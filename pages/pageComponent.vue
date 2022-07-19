<template>
  <div>
    <myComponent pageName="Tutorial-component" pageDesc="component 설명" />
    <form action="">
      <!-- <myInputField :name="name" @update-name="updateName" /> -->
      <myInputField v-model="name" />
      <button type="submit">Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import myInputField from '@/components/myInputField.vue'
export default {
  components: { myInputField },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    updateName(name) {
      this.name = name;
    }
  }
}
</script>
