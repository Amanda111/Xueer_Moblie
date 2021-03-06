const state = {
    info: {},
    hot_tags: [],
    comments: [],
    hot_comments: [],
    page: 0,
    more: true
}

const getters = {
    info: state => state.info,
    hot_tags: state => state.hot_tags,
    comments: state => state.comments,
    hot_comments: state => state.hot_comments,
    more: state => state.more
}

const actions = {
    fetchInfo({ commit, state }) {
        commit('fetchInfo')
    },
    fetchComments({ commit, state }) {
        commit('fetchComments')
    },
    fetchHotComments({ commit }) {
        commit('fetchHotComments')
    }
}

const mutations = {
    fetchInfo() {
        fetch('/api/v1.0/courses/190/')
        .then(function(response) {
            response.json().then(function(json) {
                state.info = json
                state.views = json.views
                let hot_tags = json.hot_tags.split(' ')
                hot_tags.unshift(json.main_category)
                state.hot_tags = hot_tags
            });
        })
    },
    fetchComments() {
        state.page++
        let url = '/api/v1.0/courses/190/comments/'+"?page="+state.page+"&per_page=10"
        fetch(url)
        .then(function(response) {
            response.json().then(function(json) {
                preprocess(json)
                if (json.length == 0) {
                    state.more = false
                    return;
                }
                state.comments = state.comments.concat(json)
                if (state.comments.length >= state.views) {
                    state.more = false
                }
            })
        })
    },
    fetchHotComments() {
        fetch('/api/v1.0/courses/190/comments/hot/')
        .then(function(response) {
            response.json().then(function(json) {
                 preprocess(json)
                 state.hot_comments = state.hot_comments.concat(json)
            })
        })
    },
}
var preprocess = (json) => {
    json.forEach(function(element, index, array){
        if(element.body.length >= 60) {
            element._body = element.body
            element.body =element.body.substr(0,60)
        }
    })
    return json
}

export default {
  state,
  getters,
  actions,
  mutations
}
