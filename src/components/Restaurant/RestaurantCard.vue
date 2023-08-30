<template>
    <div class="card">
        <h3>Restaurant: {{ restaurant.restaurantName }}</h3>
        <p>Price: Rs.{{ restaurant.price }}</p>
        <p>Product: {{ restaurant.product }}</p>
    </div>
</template>

<script>
export default {
    props: {
        restaurant: Object,
    },
};
</script>

<style>
.card {
    display: flex;
    align-items: center;
    margin: 20px auto;
    width: 50%;
    padding: 20px;
    justify-content: center;
    justify-content: space-between;
    background: #2C74B3;
    color:#ffffff
}
</style>
