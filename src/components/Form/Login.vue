<template>
    <div class="formWrapper">
        <form class="loginForm" @submit.prevent="submitForm">
            <h2>Login Here</h2>
            <label for="email">Email</label>
            <input
                type="email"
                id="email"
                v-model="formData.email"
                autocomplete="off"
                placeholder="please enter your email"
            />
            <span class="error" v-if="formErrors.email">{{
                formErrors.email
            }}</span>
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                v-model="formData.password"
                autocomplete="off"
                placeholder="please enter your password"
            />
            <span class="error" v-if="formErrors.password">{{
                formErrors.password
            }}</span>
            <button type="submit">Login</button>
            <div class="register-here">
                <p>Please register here</p>
                <router-link to="/register">Register</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            formData: {
                email: "",
                password: "",
            },
            formErrors: {},
        };
    },
    methods: {
        validateForm() {
            this.formErrors = {};

            if (!this.formData.email) {
                this.formErrors.email = "Email is required.";
            } else if (!this.isValidEmail(this.formData.email)) {
                this.formErrors.email = "Invalid email format.";
            }

            if (!this.formData.password) {
                this.formErrors.password = "Password is required.";
            } else if (
                !this.isValidPassword(this.formData.password)
            ) {
                this.formErrors.password =
                    "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.";
            }

            return Object.keys(this.formErrors).length === 0;
        },
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        isValidPassword(password) {
            const passwordRegex =
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return passwordRegex.test(password);
        },
        async submitForm() {
            if (this.validateForm()) {
                const response = await axios.get(
                    `http://localhost:3005/users?email=${this.formData.email}&password=${this.formData.password}`
                );
                console.log("loginData", response);

                if (response.status === 200) {
                    alert("Login User Successfully");
                    this.$router.push({ name: "home" });
                    localStorage.setItem(
                        "userInfo",
                        JSON.stringify(response.data[0])
                    );
                }
            }
        },
    },
    mounted() {
        let user = localStorage.getItem("userInfo");
        if (user) {
            this.$router.push({ name: "home" });
        }
    },
};
</script>

<style>
.error {
    color: red;
    display: flex;
    align-items: center;
    font-size: 12px;
    margin: 5px 0;
}
.register-here {
    display: flex;
}
.register-here p {
    margin-right: 8px;
}
</style>
