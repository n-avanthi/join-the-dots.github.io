gdjs.levels_32pageCode = {};
gdjs.levels_32pageCode.GDlevel1Objects1= [];
gdjs.levels_32pageCode.GDlevel1Objects2= [];
gdjs.levels_32pageCode.GDlevel2Objects1= [];
gdjs.levels_32pageCode.GDlevel2Objects2= [];
gdjs.levels_32pageCode.GDlevel3Objects1= [];
gdjs.levels_32pageCode.GDlevel3Objects2= [];
gdjs.levels_32pageCode.GDlevel4Objects1= [];
gdjs.levels_32pageCode.GDlevel4Objects2= [];


gdjs.levels_32pageCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("level1"), gdjs.levels_32pageCode.GDlevel1Objects1);
gdjs.copyArray(runtimeScene.getObjects("level2"), gdjs.levels_32pageCode.GDlevel2Objects1);
gdjs.copyArray(runtimeScene.getObjects("level3"), gdjs.levels_32pageCode.GDlevel3Objects1);
gdjs.copyArray(runtimeScene.getObjects("level4"), gdjs.levels_32pageCode.GDlevel4Objects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "20;20;20");
}{for(var i = 0, len = gdjs.levels_32pageCode.GDlevel1Objects1.length ;i < len;++i) {
    gdjs.levels_32pageCode.GDlevel1Objects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 100,200);
}
}{for(var i = 0, len = gdjs.levels_32pageCode.GDlevel2Objects1.length ;i < len;++i) {
    gdjs.levels_32pageCode.GDlevel2Objects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 400,200);
}
}{for(var i = 0, len = gdjs.levels_32pageCode.GDlevel3Objects1.length ;i < len;++i) {
    gdjs.levels_32pageCode.GDlevel3Objects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 100,400);
}
}{for(var i = 0, len = gdjs.levels_32pageCode.GDlevel4Objects1.length ;i < len;++i) {
    gdjs.levels_32pageCode.GDlevel4Objects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 400,400);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("level1"), gdjs.levels_32pageCode.GDlevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levels_32pageCode.GDlevel1Objects1.length;i<l;++i) {
    if ( gdjs.levels_32pageCode.GDlevel1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levels_32pageCode.GDlevel1Objects1[k] = gdjs.levels_32pageCode.GDlevel1Objects1[i];
        ++k;
    }
}
gdjs.levels_32pageCode.GDlevel1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1 scene", false);
}}

}


};

gdjs.levels_32pageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levels_32pageCode.GDlevel1Objects1.length = 0;
gdjs.levels_32pageCode.GDlevel1Objects2.length = 0;
gdjs.levels_32pageCode.GDlevel2Objects1.length = 0;
gdjs.levels_32pageCode.GDlevel2Objects2.length = 0;
gdjs.levels_32pageCode.GDlevel3Objects1.length = 0;
gdjs.levels_32pageCode.GDlevel3Objects2.length = 0;
gdjs.levels_32pageCode.GDlevel4Objects1.length = 0;
gdjs.levels_32pageCode.GDlevel4Objects2.length = 0;

gdjs.levels_32pageCode.eventsList0(runtimeScene);

return;

}

gdjs['levels_32pageCode'] = gdjs.levels_32pageCode;
