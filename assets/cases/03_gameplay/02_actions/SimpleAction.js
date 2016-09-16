cc.Class({
    extends: cc.Component,

    properties: {
        jumper: {
            default: null,
            type: cc.Node
        },
        colorNode: {
            default: null,
            type: cc.Node
        },
        canvas:{
            default:null,
            type: cc.Node
        },
        
    },

    // use this for initialization
    onLoad: function () {
        
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        //this.squashAction = cc.scaleTo(0.2, 1, 0.6);
       // this.stretchAction = cc.scaleTo(0.2, 1, 1.2);
        //this.scaleBackAction = cc.scaleTo(0.1, 1, 1);
        this.moveUpAction = cc.moveBy(0.3, cc.p(0, 150)).easing(cc.easeSineOut());
        //this.repeat = cc.repeatForever(cc.moveBy(1, cc.p(0, -200)));
        this.moveDownAction = cc.moveBy(0.9, cc.p(0, -1000)).easing(cc.easeSineIn());
        this.seq = cc.sequence(this.moveUpAction, this.moveDownAction );
        // this is a temp api which will be combined to cc.Node
        //this.jumper.runAction(this.seq);
        // 使用事件名来注册
        this.canvas.on('mousedown', function (event) {
          console.log(this.seq);
          this.jumper.stopAllActions();
          this.jumper.runAction(this.seq);
        }, this);
        
        // this.colorNode.runAction(cc.sequence(
        //     cc.tintTo(2, 255, 0, 0),
        //     cc.delayTime(0.5),
        //     cc.fadeOut(1),
        //     cc.delayTime(0.5),
        //     cc.fadeIn(1),
        //     cc.delayTime(0.5),
        //     cc.tintTo(2, 255, 255, 255)
        // ).repeat(2));
    },

});
