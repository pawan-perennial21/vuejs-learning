<template>
    <div>
        <h1>Parent</h1>
        <p>Hello</p>
        <p>Received data from child: {{ receivedData }}</p>
        <Child @childData="handleChildData" name="Pawan">
            <template v-slot:header>
                <h1>Header</h1>
            </template>
            <template v-slot:content>
                <h1>Content</h1>
            </template>
            <template v-slot:footer>
                <h1>Footer</h1>
            </template>
        </Child>
    </div>
</template>

<script>
import Child from "./Child.vue";
export default {
    components: {
        Child,
    },
    data() {
        return {
            receivedData: "",
        };
    },
    methods: {
        handleChildData(data) {
            // This method will be called when the 'childData' event is emitted from the child component
            this.receivedData = data;
        },
    },
};
</script>

<style></style>
