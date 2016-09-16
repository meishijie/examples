cc.Class({
    extends: cc.Component,

    properties: {
        bgSky:cc.Node,
        skySca:0,
        bgHill:cc.Node,
        hillSca:0,
        bgHillnear:cc.Node,
        hillnearSca:0,
        bgFloor:cc.Node,
        floorSca:0,
        cloudLayer:cc.Node,
        cloudSca:0,
        camera: cc.Node,
        player: cc.Node,

    },
    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
        //cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        
        //cc.director.setDisplayStats(true);
        //镜头跟踪
        // creates the action with no boundary set
        var followAction = cc.follow(this.player,cc.rect(cc.director.getWinSize().width,cc.director.getWinSize().height * 5));
        this.node.runAction(followAction);

    },
    init: function(game){
        this.game = game;
    },

    moveBg: function(distance){
        //当主角跳出镜头边界时镜头才移动
        if(this.player.y > this.camera.y+this.camera.height/2){
            this.bgSky.y -= distance * this.skySca;
            this.bgHill.y -= distance * this.hillSca;
            this.bgHillnear.y -= distance * this.hillnearSca;
            this.bgFloor.y -= distance * this.floorSca;
            this.cloudLayer.y -= distance * this.cloudSca;
            this.player.y -= distance;
        }
    }
});