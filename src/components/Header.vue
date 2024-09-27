<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">Add Restaurant</router-link>

            <router-link v-if="!isLogin" to="/login"
                >Login</router-link
            >
        </nav>
        <div class="header-content">
            <p>{{ user }}</p>
            <button v-on:click="logoutFunc">Logout</button>
        </div>
    </header>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Header",
    data() {
        return {
            user: "",
        };
    },
    methods: {
        logoutFunc() {
            localStorage.clear();
            this.$router.push({ name: "login" });
        },
    },

    // console.log({isLogin});
    computed: mapState(["isLogin"]),
    mounted() {
        let userName = JSON.parse(
            localStorage.getItem("userInfo")
        ).name;
        if (userName) {
            this.user = userName.split(" ")[0];
        }
    },
};
</script>

<style></style>
