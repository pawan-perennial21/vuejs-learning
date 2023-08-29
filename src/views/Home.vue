<template>
    <main class="margin:20px" v-if="!loading">
        <!-- <Title :title="title"/>
    <Learn1/>
    <AlbumData :albumData="getUserInfoDetail"/> -->
        <RestaurantFormVue />
    </main>
    <main class="load" v-else>
        <div>Loading...</div>
    </main>

    <!-- <pre></pre> -->
</template>

<script>
import RestaurantFormVue from "../components/RestaurantForm/RestaurantForm.vue";
// import Title from "../components/Title.vue";
// import AlbumData from "../components/AlbumData.vue"
// import Learn1 from "../components/learn/Learn.vue"
import { mapGetters } from "vuex";
export default {
    name: "Home",
    components: {
        // Title,
        // AlbumData,
        // Learn1
        RestaurantFormVue,
    },
    data() {
        return {
            loading: true,
            title: "Photo Gallary",
            albumData: [],
        };
    },
    computed: {
        ...mapGetters(["getUserInfoDetail"]),
    },
    methods: {
        async fetchCovidData() {
            await this.$store.dispatch("getUserInfo");
        },
    },
    async created() {
        const data = await this.fetchCovidData();
        this.albumData = data;
        this.loading = false;
    },
    mounted() {
        let user = localStorage.getItem("userInfo");
        if (!user) {
            this.$router.push({ name: "login" });
        }
    },
};
</script>

<style>
.load {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    font-size: 20px;
    font-weight: 800;
}
</style>
