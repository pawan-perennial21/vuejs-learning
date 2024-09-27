<template>
    <div class="about">
        <ReastaurantListVue />
    </div>
</template>

<script>
// import Academid from '../components/learn/Academid.vue'
import ReastaurantListVue from "../components/Restaurant/RestaurantList.vue";
export default {
    name: "Home",
    components: {
        ReastaurantListVue,
    },
    mounted() {
        let user = localStorage.getItem("userInfo");
        if (!user) {
            this.$router.push({ name: "login" });
        }
    },
};
</script>
