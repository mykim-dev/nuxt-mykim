<template>
  <div>
    <label for="">Name</label>
    <input 
      type="text" 
      id="" 
      :value="value" 
      @input="updateName"
    />
  </div>
</template>

<script>
export default {
  props: {
    // name: {
    //   type: String,
    //   required: true
    // }
    value: {
      type: String,
      required: true
    }
  },
  data (){
      return {
      }
  },
  methods: {
    updateName(e){
      console.log(e.target.value)
      // this.$emit('update-name', e.target.value)
      this.$emit('input', e.target.value)
    }
  }
}
</script>