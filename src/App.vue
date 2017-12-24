<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newitem" v-on:keyup.enter="addNew"/>
    <ul v-for="item in items" v-bind:class="{finished:item.isFinished}"
   v-on:click="todo(item)"  >
      <li>
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import store from './store'
console.log(store);
export default {
  data: function() {
    return {
      title: 'this is a todo list',
      items:store.fetch(),
      newitem:''
    }
  },
  watch:{
    items:{
      handler:function (items) {
        store.save(items);
      },
      deep:true
    }
  },
  methods:{
    todo: function (item) {
      item.isFinished=!item.isFinished;
    },
    addNew: function () {
      this.items.push({
        label: this.newitem,
        isFinished:false
      });
      this.newitem='';
    }
  }
}
</script>

<style>

.finished{
  text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
