<template>
	<div :class="$style.comments">
		<li v-for="item in comments" :class="$style.comment_item">
	        <div :class="$style.space">
	            <div :class="$style.avatar">
					<img src="http://xueer.muxixyz.com/static/x_m/avatar.png">
	            </div>
	            <div :class="$style.content">
	                <div :class="$style.name">{{ item.user_name }}</div>
	                <div :class="$style.time">{{ item.date }}</div>
	                <div :class="$style.body">{{ item.body }}</div>
	                <div :class="$style.like">
	                    <div :class="$style.touch_area">
	                        <svg :class="$style.like_icon ">
	                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#heart_f"></use>
	                        </svg>
	                        <span :class="$style.like_count">{{ item.likes }}</span>
	                    </div>
					</div>
	            </div>
	            <div v-if="item._body" @click="showMore(item)" :class="$style.more">
	                <svg :class="$style.more_icon">
	                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow_down"></use>
	                </svg>
	                <span :class="$style.more_text">查看全文</span>
	            </div>
	        </div>
	    </li>
	    <div :class="$style.no_comments">∑(っ °Д °;)っ<br>没有任何评价，快去添加第一条评价吧。<div></div></div>
	</div>
</template>

<script>
export default {
	props:['comments'],
	methods: {
		showMore(item) {
			item.body = item._body
			item._body = ''
		}
	}
}
</script>

<style lang='sass' module>
@import '../../assets/value.scss';

.comment_item {
	font-size: 0;
	padding-top: 21px;
	border-bottom: 2px solid #ececec; /*px*/
}
.avatar, .content {
	display: inline-block;
	vertical-align: top;
}
.avatar {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 16px;
	overflow: hidden;
}
.content {
	width: 273px;
	padding-bottom: 18px;
}
.name, .time {
	font-size: 20px; /*px*/
	line-height: 16px;
	color: $shallow_grey;
}
.body {
	font-size: 28px; /*px*/
}
.like {
	font-size: 24px; /*px*/
	color: $shallow_grey;
	margin-top: 16px;
	text-align: right;
}
.like_icon {
	width: 13px;
	height: 12px;
	margin-right: 6px;
}
.like_icon, .like_count {
	display: inline-block;
	vertical-align: middle;
}
.like_icon use {
	fill: $shallow_grey;
}
.more {
	text-align: center;
	margin: 4px 0 9px;
}
.more_icon, .more_text {
	vertical-align: middle;
}
.more_icon {
	width: 14px;
	height: 5px;
	margin-right: 6px;
}
.more_text {
	font-size: 28px; /*px*/
	color: $shallow_grey;
}
.no_comments {
	padding-top: 15px;
	font-size: 28px; /*px*/
    text-align: center;
    color: #999;
}
</style>