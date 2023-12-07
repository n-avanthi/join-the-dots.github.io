gdjs.home_32pageCode = {};
gdjs.home_32pageCode.GDGameTitleObjects1= [];
gdjs.home_32pageCode.GDGameTitleObjects2= [];
gdjs.home_32pageCode.GDplayButtonObjects1= [];
gdjs.home_32pageCode.GDplayButtonObjects2= [];


gdjs.home_32pageCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameTitle"), gdjs.home_32pageCode.GDGameTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.home_32pageCode.GDplayButtonObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "20;20;20");
}{for(var i = 0, len = gdjs.home_32pageCode.GDGameTitleObjects1.length ;i < len;++i) {
    gdjs.home_32pageCode.GDGameTitleObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 50,100);
}
}{for(var i = 0, len = gdjs.home_32pageCode.GDplayButtonObjects1.length ;i < len;++i) {
    gdjs.home_32pageCode.GDplayButtonObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 150,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.home_32pageCode.GDplayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.home_32pageCode.GDplayButtonObjects1.length;i<l;++i) {
    if ( gdjs.home_32pageCode.GDplayButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.home_32pageCode.GDplayButtonObjects1[k] = gdjs.home_32pageCode.GDplayButtonObjects1[i];
        ++k;
    }
}
gdjs.home_32pageCode.GDplayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "rules scene", false);
}}

}


};

gdjs.home_32pageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.home_32pageCode.GDGameTitleObjects1.length = 0;
gdjs.home_32pageCode.GDGameTitleObjects2.length = 0;
gdjs.home_32pageCode.GDplayButtonObjects1.length = 0;
gdjs.home_32pageCode.GDplayButtonObjects2.length = 0;

gdjs.home_32pageCode.eventsList0(runtimeScene);

return;

}

gdjs['home_32pageCode'] = gdjs.home_32pageCode;
