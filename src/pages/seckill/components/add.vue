<template>
  <div class="box">
    <el-dialog
      :title="info.show ? '活动添加' : '活动修改'"
      :visible.sync="info.isShow"
    >
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="活动期限" :label-width="formLabelWidth">
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="一级分类" :label-width="formLabelWidth">
          <el-select
            v-model="form.first_cateid"
            placeholder="请选择"
            @change="changeCate"
          >
            <el-option
              v-for="item in list"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" :label-width="formLabelWidth">
          <el-select
            v-model="form.second_cateid"
            placeholder="请选择"
            @change="changeShop"
          >
            <el-option
              v-for="item in secondCate"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品" :label-width="formLabelWidth">
          <el-select v-model="form.goodsid" placeholder="请选择商品">
            <el-option
              v-for="item in shop"
              :key="item.id"
              :label="item.goodsname"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="hide">取 消</el-button>
        <el-button type="success" @click="add" v-if="info.show">确认</el-button>
        <el-button type="primary" v-else @click="mdify">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  reqRoleAdd,
  reqRoleListOne,
  reqRoleListMdify,
} from "../../../util/request";
export default {
  props: ["info"],
  data() {
    return {
      secondCate: [],
      shop: [],
      form: {
        title: "",
        begintime: "",
        endtime: "",
        first_cateid: null,
        second_cateid: null,
        goodsid: null,
        status: 1,
      },
      formLabelWidth: "120px",
      value2: [],
    };
  },
  computed: {
    ...mapGetters({
      list: "classify/list",
      goodList: "goods/list",
    }),
  },
  methods: {
    ...mapActions({
      requestClassifyListPaging: "classify/requestClassifyListPaging",
      requestGoodsList: "goods/requestGoodsList",
    }),
    emit() {
      this.form = {
        rolename: "",
        menus: [],
        status: 1,
      };
    },
    changeCate() {
      this.secondCate = this.list.find((item) => {
        return item.id == this.form.first_cateid;
      }).children;
    },
    add() {
      //   this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      //   reqRoleAdd(this.form).then((res) => {
      //     this.hide();
      //     this.requestRoleList();
      //   });
      
    },
    hide() {
      this.info.isShow = false;
    },
    look(id) {
      //   reqRoleListOne({ id: id }).then((res) => {
      //     this.form = res.data.list;
      //     this.info.isShow = true;
      //     this.form.id = id;
      //   });
    },
    mdify() {
      //   this.form.menus = JSON.stringify(this.form.menus);
      //   reqRoleListMdify(this.form).then((res) => {
      //     this.hide();
      //     this.requestRoleList();
      //   });
    },
    changeShop() {
      this.goodList.forEach((item) => {
        if(item.second_cateid == this.form.second_cateid){
            this.shop.push(item)
        }
        // console.log(item.second_cateid,this.form.second_cateid);
      });
      console.log(this.shop);
    },
  },
  mounted() {
    if (this.list.length <= 0) {
      this.requestClassifyListPaging();
    }
    this.requestGoodsList();
  },
};
</script>
<style>
.box {
  margin-top: 10px;
}
</style>