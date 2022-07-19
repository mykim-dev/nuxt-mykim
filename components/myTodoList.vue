<template>
    <div>
        <MyTodo 
            v-for="todo in todos"
            :key="todo.id"         
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @delete-item="deleteItem"
        />
    </div>
</template>

<script>
import MyTodo from "../components/myTodo.vue";
export default {
    components: { MyTodo },
    // props: {
    //     todos: {
    //         type: Array,
    //         required: true
    //     }
    // },
    computed: {
        todos() {
            return this.$store.state.todos;
        },
    },
    methods: {
        toggleCheckbox(value) {
            this.$emit('toggle-checkbox', value)

        },
        deleteItem(todoId) {
            this.$emit('delete-item', todoId)
        }
    }
}
</script>