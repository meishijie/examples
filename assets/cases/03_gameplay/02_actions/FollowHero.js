cc.Class({
    extends: cc.Component,

    properties: {
        targetNode: {
            default: null,
            type: cc.Node
        },
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
        var followAction = cc.follow(this.targetNode, cc.rect(0, 0, 500, 960));
        this.node.runAction(followAction);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
