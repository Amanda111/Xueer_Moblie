var Backbone = require("Backbone");

var CourseInfo = Backbone.Model.extend({
	initialize:function(options){
		this.options = options;
	},
	url:function(){
		var base = "http://xueer.ccnuer.cn/api/v1.0/courses/";
		return base + this.options.id + "/"
	}
})

module.exports = CourseInfo;