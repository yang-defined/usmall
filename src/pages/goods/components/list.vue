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
        <el-table-column prop="id" label="商品编号" sortable width="110">
        </el-table-column>
        <el-table-column prop="goodsname" label="商品名称" sortable width="120">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" sortable width="120">
        </el-table-column>
        <el-table-column
          prop="market_price"
          label="市场价格"
          sortable
          width="120"
        >
        </el-table-column>
        <el-table-column label="图片" width="140">
          <template slot-scope="scope">
            <img :src="$preImg + scope.row.img" alt="" />
          </template>
        </el-table-column>
        <el-table-column prop="status" label="是否新品" width="110">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.isnew == 1">是</el-button>
            <el-button type="info" v-else>否</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="是否热卖" width="110">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.ishot == 1">是</el-button>
            <el-button type="info" v-else>否</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="110">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.status == 1"
              >启用</el-button
            >
            <el-button type="info" v-else>禁用</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="handleEdit(scope.row.id)"
              >编辑</el-button
            >
            <el-button type="danger" @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { reqGoodsListDel } from "../../../util/request";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      requestGoodsList: "goods/requestGoodsList",
    }),
    handleEdit(id) {
      this.$emit("add", id);
    },
    handleDelete(id) {
      reqGoodsListDel({ id: id });
    },
  },
  mounted() {
    this.requestGoodsList();
  },
  computed: {
    ...mapGetters({
      list: "goods/list",
    }),
  },
};
</script>
<style scoped>
img {
  width: 80px;
  height: 80px;
}
</style>