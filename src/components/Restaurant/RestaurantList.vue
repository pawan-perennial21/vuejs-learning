<template>
    <div>
        <p class="restaurant-list">Reastaurant List</p>
        <div
            v-for="restaurant in restaurantList"
            :key="restaurant.id"
        >
            <ReastaurantCardVue :restaurant="restaurant" />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ReastaurantCardVue from "./RestaurantCard.vue";
export default {
    name: "ReastaurantList",
    data() {
        return {
            restaurantList: [],
        };
    },
    components: {
        ReastaurantCardVue,
    },
    async mounted() {
        const response = await axios.get(
            "http://localhost:3000/restaurants"
        );
        if (response.status === 200) {
            this.restaurantList = response.data;
        }
    },
};
</script>

<style>
.restaurant-list{
    font-weight: 700;
    font-size: 22px;
    margin: 20px;
}
</style>
