cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        var anim = this.getComponent(cc.Animation);
        var animState = anim.play('zizhuan');
        
        // // 设置循环模式为 Normal
        // animState.wrapeMode = cc.WrapMode.Normal;
        
        // 设置循环模式为 Loop
        animState.wrapeMode = cc.WrapMode.Loop;
        // 设置动画循环次数为无限次
        animState.repeatCount = Infinity;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
