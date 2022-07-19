<template>
    <div>
        <input type="search" placeholder="Type todo" v-model="keyword" />
        <button @click="addItem">AddItem</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        addItem (e){
            // this.$emit('add-item', this.keyword);
            this.$store.commit('ADD_TODO', this.keyword);
            this.keyword = '';
        }
    }
}
</script>