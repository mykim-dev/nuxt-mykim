<template>
  <div>
    <h1>Todo List</h1>
    <myTodoResult />
    <myTodoAdd />
    <myTodoList />  
    <!-- {{ todos }}   -->
  </div>
</template>

<script>
import myTodoList from "../components/myTodoList.vue";
import myTodoAdd from "../components/myTodoAdd.vue";
import myTodoResult from "../components/myTodoResult.vue";

export default {
  components: {     
    myTodoList,
    myTodoAdd,
    myTodoResult
  },  
  data() {
      return {
          // todos: loadTodos,
          keyword: ''
      };
  },
  methods: {
      // addItem(value) {
      //   this.todos.push({
      //     "userId": 1,
      //     "id": this.todos.length + 1,
      //     "title": value,
      //     "completed": false
      //   });
      //   this.keyword = ''
      // },
      // toggleCheckbox({id, completed}) {
      //   // console.log(id, completed)
      //   const index = this.todos.findIndex(todo => {
      //     return todo.id === id;
      //   });
      //   this.todos[index].completed = completed;
      // },
      // deleteItem({id}) {
      //   const index = this.todos.findIndex(todo => {
      //     return todo.id === id;
      //   });
      //   this.todos.splice(index, 1);
      //   // this.todos = this.todos.filter(todo => todo.id !== id);
      // }
  }
}
</script>
