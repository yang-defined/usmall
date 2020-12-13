<template>
  <div>
    <template>
      <el-table
        :data="list"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="id" label="用户编号" sortable width="180">
        </el-table-column>
        <el-table-column prop="nickname" label="昵称" sortable width="180">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" sortable width="280">
        </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.status == 1"
              >启用</el-button
            >
            <el-button type="info" v-else>禁用</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="handleEdit(scope.row.uid)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    computed:{
        ...mapGetters({
             list:'vip/list'
        })
       
    },
  components: {},
  data() {
    return {};
  },
  methods: {
      handleEdit(uid){
          this.$emit('add',uid)
      },
      ...mapActions({
          requestVipList:'vip/requestVipList'
      })
  },
  
  mounted() {
      this.requestVipList()
  },
};
</script>
<style>
</style>