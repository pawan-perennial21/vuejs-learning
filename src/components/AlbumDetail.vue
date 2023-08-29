<template>
    <div v-if="!loading">
        <h1>Post Details</h1>
        <p>{{ postDetails?.id }} {{ postDetails?.title }}</p>
    </div>
    <main class="load" v-else>
        <div>Loading...</div>
    </main>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "AlbumDetail",
    data() {
        return {
            // loading:true,
            postId: this.$route.params.id,
        };
    },
    computed: {
        ...mapState({
            postDetails: (state) => state.postDataDetails,
            loading: (state) => state.loading,
        }),
    },
    methods: {
        async getPostData1() {
            await this.$store.dispatch("getPostDetails", this.postId);
        },
    },
    async created() {
        await this.getPostData1();
    },
};
</script>

<style></style>
