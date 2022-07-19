<template>
  <div>
    <mySlot pageName="Tutorial-slot" pageDesc="slot 설명">    
      <!-- <template v-slot:header="props"> -->
      <template #header="{ gap }">
        <!-- <h3>slot-header : {{ props.mykim }}</h3> -->
        <h3>slot-header : {{ gap }}</h3>
      </template>
      <!-- <template v-slot:footer>
        <p>slot-footer</p>
      </template> -->
      <template v-slot:default>
        <p>slot-default</p>
      </template>
    </mySlot>
  </div>
</template>

<script>
import mySlot from '@/components/mySlot.vue'
export default {
  components: { mySlot },
  data() {
    return {}
  }
}
</script>
