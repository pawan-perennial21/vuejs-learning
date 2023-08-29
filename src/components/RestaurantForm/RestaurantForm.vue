<template>
    <div class="restaurantWrapper">
        <form class="restaurantForm" @submit.prevent="submitForm">
            <p class="add-restaurant">Add Your Restaurant Here</p>
            <label for="name">Restaurant Name</label>
            <input
                type="text"
                id="name"
                placeholder="Please Enter Restaurant Name"
                v-model="restaurantData.restaurantName"
            />
            <!-- <span class="error" v-if="formErrors.name">{{
                formErrors.name
            }}</span> -->
            <label for="price">Price</label>
            <input
                type="text"
                id="price"
                placeholder="Please Enter price"
                v-model="restaurantData.price"
            />
            <!-- <span class="error" v-if="restaurantData.price">{{
               restaurantData.price
            }}</span> -->
            <label for="product">Product</label>
            <input
                type="text"
                id="product"
                placeholder="Please Enter Product"
                v-model="restaurantData.product"
            />
            <!-- <span class="error" v-if="restaurantData.product">{{
               restaurantData.product
            }}</span> -->
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Restaurant",
    data() {
        return {
            restaurantData: {
                restaurantName: "",
                price: "",
                product: "",
            },
        };
    },
    methods: {
        async submitForm() {
            console.log("submitForm");
            const response = await axios.post(
                "http://localhost:3000/restaurants",
                {
                    restaurantName:
                        this.restaurantData.restaurantName,
                    price: this.restaurantData.price,
                    product: this.restaurantData.product,
                }
            );
            if (response.status === 201) {
                alert("Restaurant Add Successfully");
                this.$router.push({ name: "about" });
            }
            console.log("response", response);
        },
    },
};
</script>

<style>
.add-restaurant{
    font-size: 22px;
    font-weight: 700;
    margin: 20px;
}
</style>
