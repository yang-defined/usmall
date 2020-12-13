<template>
  <div class="box">
    <el-dialog
      :title="info.show ? '商品分类添加' : '商品分类修改'"
      :visible.sync="info.isShow"
      @opened="changeWang"
    >
      <el-form :model="form">
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
          <el-select v-model="form.second_cateid" placeholder="请选择">
            <el-option
              v-for="item in secondCate"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="form.goodsname"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="市场价格" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="form.market_price"></el-input>
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
        <el-form-item label="商品规格" :label-width="formLabelWidth">
          <el-select
            v-model="form.specsid"
            placeholder="请选择"
            @change="changeSpec"
          >
            <el-option
              v-for="item in specList"
              :key="item.id"
              :label="item.specsname"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="规格属性" :label-width="formLabelWidth">
          <el-select v-model="form.specsattr" placeholder="请选择" multiple>
            <el-option
              v-for="item in secondSpec"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否新品" :label-width="formLabelWidth">
          <el-radio v-model="form.isnew" :label="1">是</el-radio>
          <el-radio v-model="form.isnew" :label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="是否热卖" :label-width="formLabelWidth">
          <el-radio v-model="form.ishot" :label="1">是</el-radio>
          <el-radio v-model="form.ishot" :label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="商品描述" :label-width="formLabelWidth">
          <!-- <textarea cols="30" rows="10" v-model="form.description"></textarea> -->
          <div id="div1" v-if="info.isShow"></div>
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
  reqGoods,
  reqgoodsListOne,
  reqGoodsListMdify,
} from "../../../util/request";
import E from "wangeditor";
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      imageUrl: "",
      secondCate: [],
      secondSpec: [], //用来存放规格属性
      form: {
        first_cateid: null,
        second_cateid: null,
        goodsname: "",
        price: null,
        market_price: null,
        description: "",
        specsid: null,
        specsattr: [],
        isnew: 1,
        ishot: 1,
        status: 1,
        img: null,
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    emit() {
      this.form = {
        first_cateid: null,
        second_cateid: null,
        goodsname: "",
        price: null,
        market_price: null,
        description: "",
        specsid: null,
        specsattr: [],
        isnew: 1,
        ishot: 1,
        status: 1,
        img: null,
      };
      this.imageUrl = "";
    },
    add() {
        this.form.description=this.editor.txt.html()
      reqGoods(this.form).then((res) => {
        this.hide();
      });
    },
    mdify() {
        this.form.description=this.editor.txt.html()
      reqGoodsListMdify(this.form).then((res) => {
        // this.requestClassifyListPaging();
        this.hide();
      });
    },
    look(id) {
      reqgoodsListOne({ id: id }).then((res) => {
        this.form = res.data.list;
        this.form.specsattr = this.form.specsattr.split(",");
        this.form.id = id;
        this.imageUrl = this.$preImg + res.data.list.img;
        this.info.isShow = true;
        
      });
    },
    hide() {
      this.info.isShow = false;
    },
    changeCate() {
      this.secondCate = this.list.find((item) => {
        return item.id == this.form.first_cateid;
      }).children;
    },
    changeSpec() {
      this.form.specsattr = [];
      this.secondSpec = this.specList.find((item) => {
        return item.id == this.form.specsid;
      }).attrs;
    },
    changeWang() {
      this.editor = new E("#div1");
      this.editor.create();
      this.editor.txt.html(this.form.description)
    },
    handleAvatarSuccess(e) {
      var file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      this.form.img = file;
    },
    ...mapActions({
      requestClassifyListPaging: "classify/requestClassifyListPaging",
      requestSpecsList: "specs/requestSpecsList",
    }),
  },
  mounted() {
    this.requestClassifyListPaging();
    this.requestSpecsList(true);
  },
  computed: {
    ...mapGetters({
      list: "classify/list",
      specList: "specs/list",
    }),
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