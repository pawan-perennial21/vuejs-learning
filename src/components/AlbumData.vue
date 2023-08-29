<template>
    <main>
        <hr />
        <!-- <div v-for="album in albumData" :key="album.id">
            <Card
                :title="album.title"
                :thumbnailUrl="album.thumbnailUrl"
            />
        </div> -->
        <h1>Album Detail</h1>
        <div v-for="post in postDataDetails" :key="post.id">
            <router-link :to="'/albumDetails/' + post.id">
                {{ post.title }}
            </router-link>
        </div>
    </main>
</template>

<script>
import { mapState } from "vuex";
import Card from "./Card.vue";
import AlbumDetail from "./AlbumDetail.vue";
export default {
    components: {
        Card,
        AlbumDetail,
    },
    name: "album",
    props: ["albumData"],
    // data() {
    //     return {
    //         postData: [],
    //     };
    // },
    computed: {
        // ...mapGetters(["getUserInfoDetail"]),
        ...mapState({
            postDataDetails: (state) => state.postData,
        }),
    },
    methods: {
        async getPostData() {
            await this.$store.dispatch("getPostInfo");
        },
    },
    async created() {
        await this.getPostData();
        this.loading = false;
    },
};
</script>

<style></style>
