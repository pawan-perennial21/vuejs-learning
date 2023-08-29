<template>
  <main>
    <p>Hello {{name}}</p>   
    <!-- text interploation -->

    <!-- Derative is special html attribute and it replace entire text of element -->
    <p v-text="name"></p> 
    <div v-html="htmlContent"></div> 
    <p v-bind:id="headingId">Perennial systems</p>
    <button v-bind:disabled="isDisabled">View</button>
    <p  class="underline" v-bind:id="headingId">Underline</p>
    <p  v-bind:class="isPromoted && 'promoted'">Promoted</p>
    <p  v-bind:class="isSoldOut?'new-movie':'sold-out'">Movie Ticket</p>
    <h2  v-bind:class="[isPromoted && 'promoted',isSoldOut?'new-movie':'sold-out']">Movie Ticket</h2>
  </main>
</template>

<script>
export default {
data(){
  return {
    name:"Pawan",
    htmlContent:"<h1>Full stack developer</h1>",
    headingId:"title",
    isDisabled:true,
    isPromoted:true,
    isSoldOut:false
    

  }
}
}
</script>

<style>
#title{
  color: aqua;
}
.underline{
  text-decoration: underline;
}
.promoted{
background: yellow;
}
.new-movie{
  color: green;
}
.sold-out{
  color: brown;
}
</style>