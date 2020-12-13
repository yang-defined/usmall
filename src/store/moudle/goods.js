import { reqGoodsCount, reqGoodsPaging } from '../../util/request'

const state = {
    list: [],
    page: 1,
    size: 3,
    total: 0,
    aa: true
}

const mutations = {
    changeList(state, arr) {
        state.list = arr
    },
    changeCount(state, num) {
        state.total = num
    },
    changePage(state, page) {
        state.page = page
    }
}
const actions = {
    requestGoodsList(context) {
        reqGoodsPaging({ size: 20, page: context.state.page }).then(res => {
            context.commit('changeList', res.data.list)
        })
    },
    requestGoodsCount(context) {
        reqGoodsCount().then(res => {
            context.commit('changeCount', res.data.list[0].total)
        })
    },
    changeCurrentPages(context, page) {
        context.commit('changePage', page)
        context.dispatch('requestGoodsList')
    }

}
const getters = {
    list(state) {
        return state.list
    },
    page(state) {
        return state.page
    },
    size(state) {
        return state.size
    },
    total(state) {
        return state.total
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}