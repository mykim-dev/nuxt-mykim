<template>
    <div>
        <!-- {{ todo.completed }} -->
        <span><input type="checkbox" :checked="todo.completed" @change="toggleCheckbox"></span>
        <span
            :class="todo.completed ? 'el-color-info-dark-2' : ''"
            :style="todo.completed ? 'text-decoration:line-through' : ''"
        >
            {{ todo.title }}
        </span>
        <span>
            <!-- <button @click="editItem">E</button> -->
            <button @click="deleteItem">D</button>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleCheckbox(e) {
            this.$store.commit('TOGGLE_TODO', {
                id: this.todo.id,
                completed: e.target.checked
            })
            // this.$emit('toggle-checkbox', {
            //     id: this.todo.id,
            //     completed: e.target.checked
            // })
        },
        deleteItem() {
            this.$store.commit('DELETE_TODO', this.todo.id);
            // this.$emit('delete-item', this.todo.id)
        }
    }
}
</script>