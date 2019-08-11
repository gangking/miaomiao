import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function () {

    var defaults = {   //默认值
        title: '',
        content: '',
        cancel: '',
        ok: '',
        // 取消和确认方法也在此定义
        handleCancel: null,
        handleOk: null
    };

    return function (opts) {  //配置参数

        // 拿到配置参数
        for (var attr in opts) {
            defaults[attr] = opts[attr];
        }

        // 把MessageBox结合到vue中
        var MyComponent = Vue.extend(MessageBox);
        // 新建中间件VM实例
        var vm = new MyComponent({
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                // 取消
                handleCancel () {
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    // 移除vm
                    document.body.removeChild(vm.$el);
                },
                handleOk () {
                    defaults.handleOk && defaults.handleOk.call(this);
                    // 移除vm
                    document.body.removeChild(vm.$el);
                }
            }
        });

        // 添加到body
        document.body.appendChild(vm.$el);

    };

})();