<template>
  <main>
    <p>{{title}}</p>
    <p>{{thisTitle}}</p>
    <input @input="cssClass = $event.target.value" >
    <p :class="cssClass">class {{cssClass}}</p>
    <button @click="onChangeTitle">Click</button>
<hr>
<h1>Counter App</h1>
<div>
  <p v-if="show">Best Counter app</p>
  <button @click="show = !show">Show/hide</button>
  <p>Counter: {{counter}}</p>
  <p>AddCount: {{addCount}}</p>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</div>
<ul>
  <li v-for="(person, index) in persons" :key="person.name">{{person.name}}-{{index}}</li>
</ul>
    <!--  -->
  </main>
</template>

<script>
export default {
data(){
  return {
    title:"Pawan",
    // thisTitle:"Capitalize",
    cssClass:"",
    counter:0,
    addCount:0,
    show:true,
    persons:[
      {name:"Pawan",age:27},
      {name:"Pooja",age:25},
      {name:"Rahul",age:26},
    ]
     }
},
methods:{
onChangeTitle(){
this.title = "Rahul"
},
increment(){
  this.addCount++
// this.counter = this.counter + 2
},
decrement(){
this.counter = this.counter - 2
}
},
computed:{
  thisTitle:function(){
    return this.title.toUpperCase()
  },
  counter(){
   return this.counter*2
  }
}


}
</script>

<style>
.orange{
  background: orange;
}
.teal{
  background: teal;
}
</style>