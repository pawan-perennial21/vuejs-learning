<template>
    <div id="app">
        <Header v-if="showHeader" />
        <!-- <Form/> -->
        <!-- <Todo/> -->
        <!-- <Parent/> -->
        <div class="container">
            <router-view />
        </div>
        <!-- <teleport v></teleport> -->
        <Footer v-if="showHeader" />
    </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import Todo from "./components/Todo/Todo.vue";
// import Form from "./components/Form/Form.vue"
// import Parent from "./components/FlowData/Parent.vue"
export default {
    components: {
        Header,
        // Todo,
        // Form,
        // Parent,
        Footer,
    },
    computed: {
        showHeader() {
            return (
                this.$route.path !== "/login" &&
                this.$route.path !== "/register"
            );
        },
        showFooter() {
            return (
                this.$route.path !== "/login" &&
                this.$route.path !== "/register"
            );
        },
    },
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0a2647;
}
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0a2647;
    padding: 5px 10px;
}
.header-content {
    display: flex;
    align-items: center;
}
.header-content p {
    color: #ffffff;
}
nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
}

nav a {
    font-weight: bold;
    color: #ffffff;
    margin-left: 10px;
}
.header-content > button {
    margin: 0 12px;
    cursor: pointer;
    color: #ffffff;
    padding: 5px 10px;
    background: #144272;
    outline: none;
    border: none;
    border-radius: 5px;
}

nav a.router-link-exact-active {
    color: #2c74b3;
}
.formWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
}
.restaurantWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 88vh;
}
.restaurantForm,
.registerForm,
.loginForm {
    width: 35%;
}
.restaurantForm label,
.registerForm label,
.loginForm label {
    display: flex;
    font-weight: 700;
}
.restaurantForm input,
.registerForm input,
.loginForm input {
    display: block;
    margin: 10px auto;
    padding: 5px;
    width: 100%;
    height: 32px;
}
.restaurantForm button,
.registerForm button,
.loginForm button {
    margin: 10px auto;
    border: none;
    outline: none;
    background: #144272;
    padding: 5px;
    width: 100%;
    height: 35px;
    font-weight: bold;
    color: #ffffff;
}
</style>
