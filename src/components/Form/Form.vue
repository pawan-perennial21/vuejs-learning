<template>
    <div>
        <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" />
            <span class="error" v-if="formErrors.name">{{
                formErrors.name
            }}</span>
            <br />
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" />
            <span class="error" v-if="formErrors.email">{{
                formErrors.email
            }}</span>
            <br />
            <label>Gender:</label>
            <input
                type="radio"
                id="male"
                value="male"
                v-model="formData.gender"
            />
            <label for="male">Male</label>
            <input
                type="radio"
                id="female"
                value="female"
                v-model="formData.gender"
            />
            <label for="female">Female</label>
            <span class="error" v-if="formErrors.gender">{{
                formErrors.gender
            }}</span>
            <br />
            <label>Hobbies:</label>
            <input
                type="checkbox"
                id="reading"
                value="reading"
                v-model="formData.hobbies"
            />
            <label for="reading">Reading</label>
            <input
                type="checkbox"
                id="gaming"
                value="gaming"
                v-model="formData.hobbies"
            />
            <label for="gaming">Gaming</label>
            <span class="error" v-if="formErrors.hobbies">{{
                formErrors.hobbies
            }}</span>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                gender: "",
                hobbies: [],
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

            if (!this.formData.gender) {
                this.formErrors.gender = "Gender is required.";
            }

            if (this.formData.hobbies.length === 0) {
                this.formErrors.hobbies =
                    "At least one hobby must be selected.";
            }

            return Object.keys(this.formErrors).length === 0;
        },
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        submitForm() {
            if (this.validateForm()) {
                // Handle form submission here
                console.log("Form submitted:", this.formData);
            }
        },
    },
};
</script>

<style>
.error {
    color: red;
    font-size: 12px;
}
.input{
  
}
</style>
