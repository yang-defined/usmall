import axios from 'axios'
import qs from 'qs'

const api='/api'
// 响应拦截
axios.interceptors.response.use(res=>{
    console.log('========请求的路径:'+res.config.url+'=============')
    console.log(res)
    return res
})
// 菜单模块请求
// 添加菜单
export const reqMenuAdd=(data)=>{
    return axios({
        url:api+'/api/menuadd',
        method:'post',
        data:data
    })
}
// 渲染列表
export const reqMenuList=(data)=>{
    return axios({
        url:api+'/api/menulist',
        method:'get',
        params:data
    })
}
// 获取编辑信息
export const reqMenuListOne=(id)=>{
    return axios({
        url:api+'/api/menuinfo',
        method:'get',
        params:id
    })
}
// 修改菜单
export const reqMenuModify=(data)=>{
    return axios({
        url:api+'/api/menuedit',
        method:'post',
        data:data
    })
}
// 删除菜单
export const reqMenuListDel=(id)=>{
    return axios({
        url:api+'/api/menudelete',
        method:'post',
        data:id
    })
}


////////////////////////角色管理////////////////////////////
// 角色管理
// 添加角色
export const reqRoleAdd=(data)=>{
    return axios({
        url:api+'/api/roleadd',
        method:'post',
        data:data
    })
}

// 渲染角色列表
export const reqRoleList=()=>{
    return axios({
        url:api+'/api/rolelist',
        method:'get',
    })
}

// 查询一条数据
export const reqRoleListOne=(id)=>{
    return axios({
        url:api+'/api/roleinfo',
        method:'get',
        params:id
    })
}

// 修改数据
export const reqRoleListMdify=(data)=>{
    return axios({
        url:api+'/api/roleedit',
        method:'post',
        data:data
    })
}
// 删除
export const reqRoleListDel=(id)=>{
    return axios({
        url:api+'/api/roledelete',
        method:'post',
        data:id
    })
}



/////////////////////管理员管理/////////////////////////

// 管理员管理
// 添加管理员
export const reqManger=(data)=>{
    return axios({
        url:api+'/api/useradd',
        method:'post',
        data:data
    })
}
// 查询管理员总数
export const reqMangerList=()=>{
    return axios({
        url:api+'/api/usercount',
        method:'get'
    })
}
// 管理员列表分页
export const reqMangerListPaging=(data)=>{
    return axios({
        url:api+'/api/userlist',
        method:'get',
        params:data
    })
}
// 获取一条管理员数据
export const reqMangerListOne=(uid)=>{
    return axios({
        url:api+'/api/userinfo',
        method:'get',
        params:uid
    })
}

// 管理员修改
export const reqMangerListMdify=(data)=>{
    return axios({
        url:api+'/api/useredit',
        method:'post',
        data:data
    })
}
// 管理员删除
export const reqMangerListDel=(data)=>{
    return axios({
        url:api+'/api/userdelete',
        method:'post',
        data:data
    })
}


// 管理员登录
export const reqMangerLogin=(data)=>{
    return axios({
        url:api+'/api/userlogin',
        method:'post',
        data:data
    })
}


/////////////////////商品分类管理/////////////////////////

// 添加商品分类
export const reqClassify=(data)=>{
    var form = new FormData();
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:api+'/api/cateadd',
        method:'post',
        data:form
    })
}
// 渲染商品分类列表
export const reqClassifyListPaging=(data)=>{
    return axios({
        url:api+'/api/catelist',
        method:'get',
        params:data
    })
}
// 获取一条商品分类数据
export const reqClassifyListOne=(id)=>{
    return axios({
        url:api+'/api/cateinfo',
        method:'get', 
        params:id
    })
}

// 商品分类修改
export const reqClassifyListMdify=(data)=>{
    var form = new FormData();
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:api+'/api/cateedit',
        method:'post',
        data:form
    })
}
// 商品分类删除
export const reqClassifyListDel=(data)=>{
    return axios({
        url:api+'/api/catedelete',
        method:'post',
        data:data
    })
}



//////////////////商品规格管理///////////////////////////

// 商品规格添加
export const reqSpecs=(data)=>{
    return axios({
        url:api+'/api/specsadd',
        method:'post',
        data:data
    })
}
// 商品规格总数
export const reqSpecsCount=()=>{
    return axios({
        url:api+'/api/specscount',
        method:'get'
    })
}
// 商品规格分页
export const reqSpecsPaging=(data)=>{
    return axios({
        url:api+'/api/specslist',
        method:'get',
        params:data
    })
}
// 获取一条商品规格数据
export const reqSpecsListOne=(id)=>{
    return axios({
        url:api+'/api/specsinfo',
        method:'get', 
        params:id
    })
}

// 商品规格修改
export const reqSpecsListMdify=(data)=>{
    return axios({
        url:api+'/api/specsedit',
        method:'post',
        data:data
    })
}
// 商品规格删除
export const reqSpecsListDel=(data)=>{
    return axios({
        url:api+'/api/specsdelete',
        method:'post',
        data:data
    })
}



//////////////////商品规格管理///////////////////////////

// 商品规格添加
export const reqGoods=(data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:api+'/api/goodsadd',
        method:'post',
        data:form
    })
}
// 商品规格总数
export const reqGoodsCount=()=>{
    return axios({
        url:api+'/api/goodscount',
        method:'get'
    })
}
// 商品规格分页
export const reqGoodsPaging=(data)=>{
    return axios({
        url:api+'/api/goodslist',
        method:'get',
        params:data
    })
}
// 获取一条商品规格数据
export const reqgoodsListOne=(id)=>{
    return axios({
        url:api+'/api/goodsinfo',
        method:'get', 
        params:id
    })
}

// 商品规格修改
export const reqGoodsListMdify=(data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:api+'/api/goodsedit',
        method:'post',
        data:form
    })
}
// 商品规格删除
export const reqGoodsListDel=(data)=>{
    return axios({
        url:api+'/api/goodsdelete',
        method:'post',
        data:data
    })
}



//////////////////会员管理///////////////////////////
// 列表渲染
export const reqVipList=()=>{
    return axios({
        url:api+'/api/memberlist',
        method:'GET'
    })
}
// 获取一条
export const reqVipListOne=(data)=>{
    return axios({
        url:api+'/api/memberinfo',
        method:'GET',
        params:data
    })
}
// 修改数据
export const reqVipListMdify=(data)=>{
    return axios({
        url:api+'/api/memberedit',
        method:'post',
        data:data
    })
}


//////////////////l轮播图管理///////////////////////////
// 轮播图添加
export const reqBannerListAdd=(data)=>{
    var form = new FormData();
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:api+'/api/banneradd',
        method:'post',
        data:form
    })
}
// 渲染列表
export const reqBannerList=()=>{
    return axios({
        url:api+'/api/bannerlist',
        method:'GET'
    })
}
// 查询一条轮播图数据
export const reqBannerListOne=(data)=>{
    return axios({
        url:api+'/api/bannerinfo',
        method:'get',
        params:data
    })
}
// 删除轮播图数据
export const reqBannerListBel=(data)=>{
    return axios({
        url:api+'/api/bannerdelete',
        method:'post',
        data:data
    })
}
// 轮播图修改
export const reqBannerListMdify=(data)=>{
    var form = new FormData();
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:api+'/api/banneredit',
        method:'post',
        data:form
    })
}