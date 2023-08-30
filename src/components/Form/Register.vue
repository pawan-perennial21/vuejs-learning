<template>
    <div class="formWrapper">
        <form class="registerForm" @submit.prevent="submitForm">
            <h2>Register Here</h2>
            <label for="name">Name</label>
            <input
                type="text"
                id="name"
                v-model="formData.name"
                placeholder="please enter your fullname"
            />
            <span class="error" v-if="formErrors.name">{{
                formErrors.name
            }}</span>
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
            <button type="submit">Register</button>
            <div class="register-here">
                <p>Please login here</p>
                <router-link to="/login">Login</router-link>
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
                name: "",
                email: "",
                password: "",
            },
            formErrors: {},
        };
    },
    methods: {
        validateForm() {
            this.formErrors = {};

            if (!this.formData.name) {
                this.formErrors.name = "Name is required.";
            }

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
                console.log("submitForm");
                const response = await axios.post(
                    "http://localhost:3000/users",
                    {
                        name: this.formData.name,
                        email: this.formData.email,
                        password: this.formData.password,
                    }
                );
                console.log("loginData", response);
                if (response.status === 201) {
                    alert("Register User Successfully");
                    this.$router.push({ name: "home" });
                    localStorage.setItem(
                        "userInfo",
                        JSON.stringify(response.data)
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
