<template>
    <main class="card">
        <p>{{ title }}</p>
        <img
            :src="thumbnailUrl"
            alt="thumbnailUrl"
            srcset="thumbnailUrl"
        />
    </main>
</template>

<script>
export default {
    name: "card",
    props: ["title", "thumbnailUrl"],
};
</script>

<style>
.card {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: teal;
    color: #ffffff;
    margin: 20px 0;
    padding: 20px 0;
}
</style>
