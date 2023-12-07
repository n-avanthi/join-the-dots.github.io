gdjs.rules_32sceneCode = {};
gdjs.rules_32sceneCode.GDreadyObjects1= [];
gdjs.rules_32sceneCode.GDreadyObjects2= [];
gdjs.rules_32sceneCode.GDrulesObjects1= [];
gdjs.rules_32sceneCode.GDrulesObjects2= [];


gdjs.rules_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ready"), gdjs.rules_32sceneCode.GDreadyObjects1);
gdjs.copyArray(runtimeScene.getObjects("rules"), gdjs.rules_32sceneCode.GDrulesObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "20;20;20");
}{for(var i = 0, len = gdjs.rules_32sceneCode.GDrulesObjects1.length ;i < len;++i) {
    gdjs.rules_32sceneCode.GDrulesObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 350,50);
}
}{for(var i = 0, len = gdjs.rules_32sceneCode.GDreadyObjects1.length ;i < len;++i) {
    gdjs.rules_32sceneCode.GDreadyObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 140,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ready"), gdjs.rules_32sceneCode.GDreadyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.rules_32sceneCode.GDreadyObjects1.length;i<l;++i) {
    if ( gdjs.rules_32sceneCode.GDreadyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.rules_32sceneCode.GDreadyObjects1[k] = gdjs.rules_32sceneCode.GDreadyObjects1[i];
        ++k;
    }
}
gdjs.rules_32sceneCode.GDreadyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levels page", false);
}}

}


};

gdjs.rules_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.rules_32sceneCode.GDreadyObjects1.length = 0;
gdjs.rules_32sceneCode.GDreadyObjects2.length = 0;
gdjs.rules_32sceneCode.GDrulesObjects1.length = 0;
gdjs.rules_32sceneCode.GDrulesObjects2.length = 0;

gdjs.rules_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['rules_32sceneCode'] = gdjs.rules_32sceneCode;
