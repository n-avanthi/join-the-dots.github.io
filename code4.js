gdjs.success_32sceneCode = {};
gdjs.success_32sceneCode.GDsuccessObjects1= [];
gdjs.success_32sceneCode.GDsuccessObjects2= [];
gdjs.success_32sceneCode.GDlevelsButtonObjects1= [];
gdjs.success_32sceneCode.GDlevelsButtonObjects2= [];


gdjs.success_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("levelsButton"), gdjs.success_32sceneCode.GDlevelsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("success"), gdjs.success_32sceneCode.GDsuccessObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "20;20;20");
}{for(var i = 0, len = gdjs.success_32sceneCode.GDsuccessObjects1.length ;i < len;++i) {
    gdjs.success_32sceneCode.GDsuccessObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 50,200);
}
}{for(var i = 0, len = gdjs.success_32sceneCode.GDlevelsButtonObjects1.length ;i < len;++i) {
    gdjs.success_32sceneCode.GDlevelsButtonObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 180,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("levelsButton"), gdjs.success_32sceneCode.GDlevelsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.success_32sceneCode.GDlevelsButtonObjects1.length;i<l;++i) {
    if ( gdjs.success_32sceneCode.GDlevelsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.success_32sceneCode.GDlevelsButtonObjects1[k] = gdjs.success_32sceneCode.GDlevelsButtonObjects1[i];
        ++k;
    }
}
gdjs.success_32sceneCode.GDlevelsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levels page", false);
}}

}


};

gdjs.success_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.success_32sceneCode.GDsuccessObjects1.length = 0;
gdjs.success_32sceneCode.GDsuccessObjects2.length = 0;
gdjs.success_32sceneCode.GDlevelsButtonObjects1.length = 0;
gdjs.success_32sceneCode.GDlevelsButtonObjects2.length = 0;

gdjs.success_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['success_32sceneCode'] = gdjs.success_32sceneCode;
