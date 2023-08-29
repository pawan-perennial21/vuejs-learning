<template>
<div>
  <div class="title">{{title}}</div> 
</div>
</template>
<script>
export default {
name:"Title",
props:["title"]
}
</script>
<style>
.title{
  color: #000000;
  opacity: 0.8;
  margin: 20px 0;
}
</style>