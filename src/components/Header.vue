<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
            <router-link to="/login">Login</router-link>
            <button v-on:click="logoutFunc">Logout</button>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    methods: {
        logoutFunc() {
            localStorage.clear();
            this.$router.push({ name: "login" });
        },
    },
};
</script>

<style></style>
