<template>
	<div :class="$style.detail">
		<info></info>
		<div :class="$style.tags">
			<span v-for="item in hot_tags" :class="$style.tags_item">{{ item }}</span>
		</div>
		<div :class="$style.comments">
			<h2 :class="$style.comments_title">热门评论</h2>
			<comment :comments="hot_comments"></comment>
		</div>
		<div :class="$style.comments">
			<h2 :class="[$style.comments_title, $style.title_all]">所有评论</h2>
			<comment :comments="comments"></comment>
			<div v-if="more" @click="moreComments" :class="$style.more_comments">展开更多评价</div>
			<div v-else :class="$style.no_more_comments">
				∑(っ °Д °;)っ
				<br>没有更多评价了。
			</div>
		</div>
		<backToTop></backToTop>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Comment from './Comments.vue'
import Info from './Info.vue'
import BackToTop from '../common/BackToTop.vue'

export default {
	computed: {
	    ...mapGetters([
	    	'hot_tags',
	    	'comments',
	    	'hot_comments',
	    	'more'
	    ])
	},
	created (){
    	this.fetchComments()
    	this.fetchHotComments()
        
	},
	methods: {
		...mapActions([
			'fetchComments',
			'fetchHotComments'
		]),
		moreComments() {
			this.fetchComments()
		}
	},
	components: {
		Comment,
		Info,
		BackToTop
	}
}
</script>

<style lang='sass' module>
@import '../../assets/value.scss';
.detail {
	font-weight: lighter;
}
.tags {
	padding: 22px 28px 1px 34px;
}
.tags_item {
	font-size: 28px; /*px*/
    border-radius: 4px; /*px*/
    display: inline-block;
    line-height: 14px;
    background-color: #cdcdcd;
    padding: 3px;
    color: #fff;
    margin-right: 6px;
    margin-bottom: 16px;
}
.comments {
	width: 333px;
    margin: 0 auto;
}
.comments_title {
	font-size: 32px; /*px*/
    padding: 0 0 16px;
    color: #666;
    border-bottom: 2px solid #ececec; /*px*/
}
.more_comments {
	border: 2px solid currentColor; /*px*/
    border-radius: 4px; /*px*/
    text-align: center;
    width: 156px;
    line-height: 38px;
    font-size: 32px; /*px*/
    color: $_yellow;
    margin: 17px auto;
}
.no_more_comments {
	font-size: 28px; /*px*/
	color: #999;
    width: 120px;
    margin: 0 auto;
    padding: 15px 0;
}
</style>