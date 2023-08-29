<template>
    <div>
        <h2>Child</h2>
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
        <p>{{ name }}</p>
        <button @click="sendDataToParent">Send Data to Parent</button>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
    },
    methods: {
        sendDataToParent() {
            // Emit a custom event named 'childData' along with the data you want to send
            this.$emit(
                "childData",
                "Hello from the child component!"
            );
        },
    },
};
</script>

<style></style>
