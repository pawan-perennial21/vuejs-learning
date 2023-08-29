<template>
 <div>
    <h1>Todo App</h1>
    <input
        type="text"
        v-model="newTask"
        placeholder="Add a new task"
    />
    <button @click="addTask">Add</button>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
            <span v-if="task.editing">
                <input
                    type="text"
                    v-model="task.name"
                    @keyup.enter="updateTask(task)"
                    @blur="updateTask(task)"
                />
            </span>
            <span v-else>{{ task.name }}</span>
            <button @click="editTask(task)">Edit</button>
            <button @click="removeTask(index)">Remove</button>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            newTask: "",
            tasks: [],
        };
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.tasks.push({
                    name: this.newTask,
                    editing: false,
                });
                this.newTask = "";
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        editTask(task) {
            task.editing = true;
        },
        updateTask(task) {
            task.editing = false;
        },
    },
};
</script>

<style scoped></style>
