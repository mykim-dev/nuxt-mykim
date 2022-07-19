import loadTodos from "@/my_data/todos.json";
export const state = () => ({
    counter: 0,
    todos: loadTodos,   // Data
})

export const getters = {
    getCounter(state) {
        return state.counter
    }
}

export const mutations = {
    increment(state) {
        state.counter++
    },
    ADD_TODO(state, value) {
        state.todos.push({
            "userId": 1,
            "id": state.todos.length + 1,
            "title": value,
            "completed": false
        });
    },
    TOGGLE_TODO(state,{id, completed}) {
        const index = state.todos.findIndex(todo => {
            return todo.id === id;
        });
        state.todos[index].completed = completed;
    },
    DELETE_TODO(state, todoId) {
        const index = state.todos.findIndex(todo => {
            return todo.id === todoId;
        });
        state.todos.splice(index, 1);
    }
}

export const actions = {
    async fetchCounter(state) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    }
}