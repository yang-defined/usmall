<template>
  <div>
    <el-dialog title="会员修改" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.nickname" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" placeholder="请输入内容"></el-input>
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
        <el-button type="primary" @click="mdify">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { reqVipListOne,reqVipListMdify } from "../../../util/request";
import {mapGetters,mapActions} from 'vuex'
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      formLabelWidth: "120px",
      form: {
        uid: null,
        nickname: "",
        phone: null,
        password: "",
        status: 1,
      },
    };
  },
  methods: {
    emit() {
      this.form = {
        uid: null,
        nickname: "",
        phone: null,
        password: null,
        status: 1,
      };
    },
    mdify() {
        reqVipListMdify(this.form).then(res=>{
            this.hide();
            this.requestVipList()
        })
    },
    hide() {
      this.info.isShow = false;
    },
    look(id) {
      reqVipListOne({ uid: id }).then((res) => {
        this.info.isShow = true;
        this.form = res.data.list;
      });
    },
     ...mapActions({
          requestVipList:'vip/requestVipList'
      })
  },

  mounted() {},
};
</script>
<style>
</style>