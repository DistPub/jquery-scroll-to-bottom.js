; (function ($) {
    $.fn.setupScrollToBottomEvent = function (settings) {
        //多个jq对象
        if (this.length != 1) {
            return this.each(function (index, el) { $(el).setupScrollToBottomEvent(settings); });
        }
        //默认参数
        var defaults = {
            node:document,
            offset: 0,//此选项提供设置
            callback:null//此选项提供设置
        };
        //合并参数
        if(this[0]!=window)
            settings.node=this[0]
        $.extend(this, defaults, settings);
        //扩展方法
        $.extend(this, {
            initialize: function () {
                var that=this
                this.scroll(function() {
                    var total_height=that.scrollTop() + that.height()
                    var real_height=that.getRealHeight.call(that)
                    if( total_height >= real_height - that.offset){
                        if(that.callback)
                            that.callback()
                        that.trigger('scrollToBottom');
                    }
                });
            },
            getRealHeight:function(){
                if(this.node==document){
                    return Math.max(
                        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                        Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
                        Math.max(document.body.clientHeight, document.documentElement.clientHeight)
                    )
                }else{
                    return Math.max(
                        this.node.scrollHeight,
                        this.node.offsetHeight,
                        this.node.clientHeight
                    )
                }
            }
        });
        this.initialize();
        return this
    };
})(jQuery);