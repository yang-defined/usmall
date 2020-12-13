<template>
  <div class="box">
    <el-dialog
      :title="info.show ? '轮播图添加' : '轮播图修改'"
      :visible.sync="info.isShow"
    >
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="handleAvatarSuccess"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
  reqBannerListAdd,
  reqBannerListOne,
  reqBannerListMdify,
} from "../../../util/request";
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      imageUrl: "",
      form: {
        title: "",
        status: 1,
        img: null,
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    emit() {
      this.form = {
        title: "",
        status: 1,
        img: null,
      };
      this.imageUrl = "";
    },
    add() {
      reqBannerListAdd(this.form).then((res) => {
        this.hide();
        this.requestBannerListPaging();
      });
    },
    mdify() {
      reqBannerListMdify(this.form).then((res) => {
        this.hide();
        this.requestBannerListPaging();
      });
    },
    look(id) {
      reqBannerListOne({ id: id }).then((res) => {
        this.form = res.data.list;
        this.imageUrl = this.$preImg + res.data.list.img;
        this.form.id = id
        this.info.isShow = true;
      });
    },
    hide() {
      this.info.isShow = false;
    },
    handleAvatarSuccess(e) {
      console.log(e.raw);
      var file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      this.form.img = file;
    },
    ...mapActions({
      requestBannerListPaging: "banner/requestBannerListPaging",
    }),
  },
  mounted() {},
  computed: {
    ...mapGetters({}),
  },
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  border: 1px dashed #d9d9d9;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>