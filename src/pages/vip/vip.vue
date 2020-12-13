<template>
  <div>
    <div>
      <v-list @add='add'></v-list>
      <v-add :info="info" ref="one"></v-add>
    </div>
  </div>
</template>
<script>
import vList from './components/list'
import vAdd from './components/add'
export default {
  components: {
    vList,
    vAdd 
  },
  data() {
    return {
      info:{
        isShow:false,
      }
    };
  },
  methods: {
    add(id){
      this.$refs.one.look(id)
    }
  },
  mounted() {},
};
</script>
<style>
</style>