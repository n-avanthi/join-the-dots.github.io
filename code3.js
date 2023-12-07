gdjs.level_321_32sceneCode = {};
gdjs.level_321_32sceneCode.forEachCount0_3 = 0;

gdjs.level_321_32sceneCode.forEachCount1_3 = 0;

gdjs.level_321_32sceneCode.forEachCount2_3 = 0;

gdjs.level_321_32sceneCode.forEachCount3_3 = 0;

gdjs.level_321_32sceneCode.forEachIndex3 = 0;

gdjs.level_321_32sceneCode.forEachObjects3 = [];

gdjs.level_321_32sceneCode.forEachTotalCount3 = 0;

gdjs.level_321_32sceneCode.GDbubbleObjects1= [];
gdjs.level_321_32sceneCode.GDbubbleObjects2= [];
gdjs.level_321_32sceneCode.GDbubbleObjects3= [];
gdjs.level_321_32sceneCode.GDbubbleObjects4= [];
gdjs.level_321_32sceneCode.GDbubbleObjects5= [];
gdjs.level_321_32sceneCode.GDbubbleObjects6= [];
gdjs.level_321_32sceneCode.GDbubbleObjects7= [];
gdjs.level_321_32sceneCode.GDplayerObjects1= [];
gdjs.level_321_32sceneCode.GDplayerObjects2= [];
gdjs.level_321_32sceneCode.GDplayerObjects3= [];
gdjs.level_321_32sceneCode.GDplayerObjects4= [];
gdjs.level_321_32sceneCode.GDplayerObjects5= [];
gdjs.level_321_32sceneCode.GDplayerObjects6= [];
gdjs.level_321_32sceneCode.GDplayerObjects7= [];
gdjs.level_321_32sceneCode.GDgridObjects1= [];
gdjs.level_321_32sceneCode.GDgridObjects2= [];
gdjs.level_321_32sceneCode.GDgridObjects3= [];
gdjs.level_321_32sceneCode.GDgridObjects4= [];
gdjs.level_321_32sceneCode.GDgridObjects5= [];
gdjs.level_321_32sceneCode.GDgridObjects6= [];
gdjs.level_321_32sceneCode.GDgridObjects7= [];
gdjs.level_321_32sceneCode.GDrightLineObjects1= [];
gdjs.level_321_32sceneCode.GDrightLineObjects2= [];
gdjs.level_321_32sceneCode.GDrightLineObjects3= [];
gdjs.level_321_32sceneCode.GDrightLineObjects4= [];
gdjs.level_321_32sceneCode.GDrightLineObjects5= [];
gdjs.level_321_32sceneCode.GDrightLineObjects6= [];
gdjs.level_321_32sceneCode.GDrightLineObjects7= [];
gdjs.level_321_32sceneCode.GDleftLineObjects1= [];
gdjs.level_321_32sceneCode.GDleftLineObjects2= [];
gdjs.level_321_32sceneCode.GDleftLineObjects3= [];
gdjs.level_321_32sceneCode.GDleftLineObjects4= [];
gdjs.level_321_32sceneCode.GDleftLineObjects5= [];
gdjs.level_321_32sceneCode.GDleftLineObjects6= [];
gdjs.level_321_32sceneCode.GDleftLineObjects7= [];
gdjs.level_321_32sceneCode.GDbottomLineObjects1= [];
gdjs.level_321_32sceneCode.GDbottomLineObjects2= [];
gdjs.level_321_32sceneCode.GDbottomLineObjects3= [];
gdjs.level_321_32sceneCode.GDbottomLineObjects4= [];
gdjs.level_321_32sceneCode.GDbottomLineObjects5= [];
gdjs.level_321_32sceneCode.GDbottomLineObjects6= [];
gdjs.level_321_32sceneCode.GDbottomLineObjects7= [];
gdjs.level_321_32sceneCode.GDtopLineObjects1= [];
gdjs.level_321_32sceneCode.GDtopLineObjects2= [];
gdjs.level_321_32sceneCode.GDtopLineObjects3= [];
gdjs.level_321_32sceneCode.GDtopLineObjects4= [];
gdjs.level_321_32sceneCode.GDtopLineObjects5= [];
gdjs.level_321_32sceneCode.GDtopLineObjects6= [];
gdjs.level_321_32sceneCode.GDtopLineObjects7= [];
gdjs.level_321_32sceneCode.GDScoreObjects1= [];
gdjs.level_321_32sceneCode.GDScoreObjects2= [];
gdjs.level_321_32sceneCode.GDScoreObjects3= [];
gdjs.level_321_32sceneCode.GDScoreObjects4= [];
gdjs.level_321_32sceneCode.GDScoreObjects5= [];
gdjs.level_321_32sceneCode.GDScoreObjects6= [];
gdjs.level_321_32sceneCode.GDScoreObjects7= [];
gdjs.level_321_32sceneCode.GDgameTitleObjects1= [];
gdjs.level_321_32sceneCode.GDgameTitleObjects2= [];
gdjs.level_321_32sceneCode.GDgameTitleObjects3= [];
gdjs.level_321_32sceneCode.GDgameTitleObjects4= [];
gdjs.level_321_32sceneCode.GDgameTitleObjects5= [];
gdjs.level_321_32sceneCode.GDgameTitleObjects6= [];
gdjs.level_321_32sceneCode.GDgameTitleObjects7= [];


gdjs.level_321_32sceneCode.userFunc0x99fd68 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
runtimeScene.setBackgroundColor(20,20,20);
//Get Scene Variables
var variables = runtimeScene.getVariables();
var maxRows = variables.get("rows").getAsNumber();
var maxColumns = variables.get("columns").getAsNumber();
var cellWidth = variables.get("cellWidth").getAsNumber();
var cellHeight = variables.get("cellHeight").getAsNumber();

//Calculate the initial position of the grid
//var offsetX = runtimeScene.getGame().getGameResolutionWidth() / 2 - (maxColumns * cellWidth) / 2;
//var offsetY = runtimeScene.getGame().getGameResolutionHeight() / 2 - (maxRows * cellHeight) / 2;

var offsetX = variables.get("offsetX").getAsNumber();
var offsetY = variables.get("offsetY").getAsNumber();

// Define the group name for the grid squares
var groupName = "Cells";

for (let row = 0; row < maxRows; row++) {
  for (let column = 0; column < maxColumns; column++) {
    const instance = runtimeScene.createObject("grid");
    const posX = offsetX + column * cellWidth;
    const posY = offsetY + row * cellHeight;
    instance.setPosition(posX, posY);

    // Assign unique name or identifier to each grid square using object variables
    instance.getVariables().get("Name").setString("cell_" + row + "_" + column);

    // Set the group name for the grid squares
    instance.getVariables().get("Group").setString(groupName);
  }
}
};
gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDbubbleObjects3Objects = Hashtable.newFrom({"bubble": gdjs.level_321_32sceneCode.GDbubbleObjects3});
gdjs.level_321_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) >= gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))).getChild("counterBubble").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))).getChild("counterBubble").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(0);
}}

}


};gdjs.level_321_32sceneCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("grid"), gdjs.level_321_32sceneCode.GDgridObjects2);

var objects = [];
objects.push.apply(objects,gdjs.level_321_32sceneCode.GDgridObjects2);
gdjs.level_321_32sceneCode.userFunc0x99fd68(runtimeScene, objects);

}


{



}


{


const valueIteratorReference3 = runtimeScene.getScene().getVariables().get("child");
const iterableReference3 = runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.level_321_32sceneCode.GDbubbleObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDbubbleObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))).getChild("column")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))).getChild("row")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))), "");
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDbubbleObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDbubbleObjects3[i].setColor(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11))))) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11))))) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11))))));
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDbubbleObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDbubbleObjects3[i].returnVariable(gdjs.level_321_32sceneCode.GDbubbleObjects3[i].getVariables().getFromIndex(0)).setString("bubble_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))).getChild("row"))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))).getChild("column"))));
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDbubbleObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDbubbleObjects3[i].returnVariable(gdjs.level_321_32sceneCode.GDbubbleObjects3[i].getVariables().getFromIndex(1)).setString("bubble_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11))));
}
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))).getChild("colorCount").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)));
}{runtimeScene.getScene().getVariables().getFromIndex(11).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(9).add(1);
}
{ //Subevents: 
gdjs.level_321_32sceneCode.eventsList0(runtimeScene);} //Subevents end.
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gameTitle"), gdjs.level_321_32sceneCode.GDgameTitleObjects1);
{for(var i = 0, len = gdjs.level_321_32sceneCode.GDgameTitleObjects1.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDgameTitleObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 50,50);
}
}}

}


};gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDbubbleObjects2Objects = Hashtable.newFrom({"bubble": gdjs.level_321_32sceneCode.GDbubbleObjects2});
gdjs.level_321_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15))).getChild("counterBubble"));
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15))).getChild("counterBubble"));
if (isConditionTrue_0) {
/* Reuse gdjs.level_321_32sceneCode.GDbubbleObjects5 */
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow").setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(((gdjs.level_321_32sceneCode.GDbubbleObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_321_32sceneCode.GDbubbleObjects5[0].getVariables()).getFromIndex(0))), 7, 1)));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol").setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(((gdjs.level_321_32sceneCode.GDbubbleObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_321_32sceneCode.GDbubbleObjects5[0].getVariables()).getFromIndex(0))), 9, 1)));
}}

}


};gdjs.level_321_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14)) == -(1);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.level_321_32sceneCode.GDbubbleObjects5, gdjs.level_321_32sceneCode.GDbubbleObjects6);

{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow").setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(((gdjs.level_321_32sceneCode.GDbubbleObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_321_32sceneCode.GDbubbleObjects6[0].getVariables()).getFromIndex(0))), 7, 1)));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol").setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(((gdjs.level_321_32sceneCode.GDbubbleObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_321_32sceneCode.GDbubbleObjects6[0].getVariables()).getFromIndex(0))), 9, 1)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14)) != -(1);
if (isConditionTrue_0) {

{ //Subevents
gdjs.level_321_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.level_321_32sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.level_321_32sceneCode.GDbubbleObjects2, gdjs.level_321_32sceneCode.GDbubbleObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15))).getChild("row")) == gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(((gdjs.level_321_32sceneCode.GDbubbleObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_321_32sceneCode.GDbubbleObjects5[0].getVariables()).getFromIndex(0))), 7, 1));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15))).getChild("column")) == gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(((gdjs.level_321_32sceneCode.GDbubbleObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_321_32sceneCode.GDbubbleObjects5[0].getVariables()).getFromIndex(0))), 9, 1));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.level_321_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(15).add(1);
}}

}


};gdjs.level_321_32sceneCode.eventsList5 = function(runtimeScene) {

{



}


{


const valueIteratorReference4 = runtimeScene.getScene().getVariables().get("child");
const iterableReference4 = runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles");
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.level_321_32sceneCode.eventsList4(runtimeScene);} //Subevents end.
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(0);
}}

}


};gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDgridObjects1Objects = Hashtable.newFrom({"grid": gdjs.level_321_32sceneCode.GDgridObjects1});
gdjs.level_321_32sceneCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.level_321_32sceneCode.GDbottomLineObjects4 */
/* Reuse gdjs.level_321_32sceneCode.GDleftLineObjects4 */
/* Reuse gdjs.level_321_32sceneCode.GDrightLineObjects4 */
/* Reuse gdjs.level_321_32sceneCode.GDtopLineObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strFind((gdjs.RuntimeObject.getVariableString(((gdjs.level_321_32sceneCode.GDtopLineObjects4.length === 0 ) ? ((gdjs.level_321_32sceneCode.GDbottomLineObjects4.length === 0 ) ? ((gdjs.level_321_32sceneCode.GDleftLineObjects4.length === 0 ) ? ((gdjs.level_321_32sceneCode.GDrightLineObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_321_32sceneCode.GDrightLineObjects4[0].getVariables()) : gdjs.level_321_32sceneCode.GDleftLineObjects4[0].getVariables()) : gdjs.level_321_32sceneCode.GDbottomLineObjects4[0].getVariables()) : gdjs.level_321_32sceneCode.GDtopLineObjects4[0].getVariables()).get("Name"))), (gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)))) != -(1));
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(19), true);
}}

}


};gdjs.level_321_32sceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.level_321_32sceneCode.GDbottomLineObjects3, gdjs.level_321_32sceneCode.GDbottomLineObjects4);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDleftLineObjects3, gdjs.level_321_32sceneCode.GDleftLineObjects4);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDrightLineObjects3, gdjs.level_321_32sceneCode.GDrightLineObjects4);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDtopLineObjects3, gdjs.level_321_32sceneCode.GDtopLineObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableString(((gdjs.level_321_32sceneCode.GDtopLineObjects4.length === 0 ) ? ((gdjs.level_321_32sceneCode.GDbottomLineObjects4.length === 0 ) ? ((gdjs.level_321_32sceneCode.GDleftLineObjects4.length === 0 ) ? ((gdjs.level_321_32sceneCode.GDrightLineObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_321_32sceneCode.GDrightLineObjects4[0].getVariables()) : gdjs.level_321_32sceneCode.GDleftLineObjects4[0].getVariables()) : gdjs.level_321_32sceneCode.GDbottomLineObjects4[0].getVariables()) : gdjs.level_321_32sceneCode.GDtopLineObjects4[0].getVariables()).get("Group"))) != "line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.level_321_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.level_321_32sceneCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.level_321_32sceneCode.GDbottomLineObjects4, gdjs.level_321_32sceneCode.GDbottomLineObjects5);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDleftLineObjects4, gdjs.level_321_32sceneCode.GDleftLineObjects5);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDrightLineObjects4, gdjs.level_321_32sceneCode.GDrightLineObjects5);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDtopLineObjects4, gdjs.level_321_32sceneCode.GDtopLineObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.level_321_32sceneCode.GDtopLineObjects5.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDbottomLineObjects5.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDleftLineObjects5.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDrightLineObjects5.length === 0 ) ? "" :gdjs.level_321_32sceneCode.GDrightLineObjects5[0].getName()) :gdjs.level_321_32sceneCode.GDleftLineObjects5[0].getName()) :gdjs.level_321_32sceneCode.GDbottomLineObjects5[0].getName()) :gdjs.level_321_32sceneCode.GDtopLineObjects5[0].getName()) == "bottomLine");
}
if (isConditionTrue_0) {
/* Reuse gdjs.level_321_32sceneCode.GDbottomLineObjects5 */
{for(var i = 0, len = gdjs.level_321_32sceneCode.GDbottomLineObjects5.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDbottomLineObjects5[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineStarted"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineCompleted"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble"))).getChild("lineCompleted"), false);
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow").setNumber(-(1));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startinCol").setNumber(-(1));
}}

}


{

gdjs.copyArray(gdjs.level_321_32sceneCode.GDbottomLineObjects4, gdjs.level_321_32sceneCode.GDbottomLineObjects5);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDleftLineObjects4, gdjs.level_321_32sceneCode.GDleftLineObjects5);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDrightLineObjects4, gdjs.level_321_32sceneCode.GDrightLineObjects5);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDtopLineObjects4, gdjs.level_321_32sceneCode.GDtopLineObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.level_321_32sceneCode.GDtopLineObjects5.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDbottomLineObjects5.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDleftLineObjects5.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDrightLineObjects5.length === 0 ) ? "" :gdjs.level_321_32sceneCode.GDrightLineObjects5[0].getName()) :gdjs.level_321_32sceneCode.GDleftLineObjects5[0].getName()) :gdjs.level_321_32sceneCode.GDbottomLineObjects5[0].getName()) :gdjs.level_321_32sceneCode.GDtopLineObjects5[0].getName()) == "rightLine");
}
if (isConditionTrue_0) {
/* Reuse gdjs.level_321_32sceneCode.GDrightLineObjects5 */
{for(var i = 0, len = gdjs.level_321_32sceneCode.GDrightLineObjects5.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDrightLineObjects5[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineStarted"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineCompleted"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble"))).getChild("lineCompleted"), false);
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow").setNumber(-(1));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startinCol").setNumber(-(1));
}}

}


{

gdjs.copyArray(gdjs.level_321_32sceneCode.GDbottomLineObjects4, gdjs.level_321_32sceneCode.GDbottomLineObjects5);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDleftLineObjects4, gdjs.level_321_32sceneCode.GDleftLineObjects5);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDrightLineObjects4, gdjs.level_321_32sceneCode.GDrightLineObjects5);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDtopLineObjects4, gdjs.level_321_32sceneCode.GDtopLineObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.level_321_32sceneCode.GDtopLineObjects5.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDbottomLineObjects5.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDleftLineObjects5.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDrightLineObjects5.length === 0 ) ? "" :gdjs.level_321_32sceneCode.GDrightLineObjects5[0].getName()) :gdjs.level_321_32sceneCode.GDleftLineObjects5[0].getName()) :gdjs.level_321_32sceneCode.GDbottomLineObjects5[0].getName()) :gdjs.level_321_32sceneCode.GDtopLineObjects5[0].getName()) == "topLine");
}
if (isConditionTrue_0) {
/* Reuse gdjs.level_321_32sceneCode.GDtopLineObjects5 */
{for(var i = 0, len = gdjs.level_321_32sceneCode.GDtopLineObjects5.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDtopLineObjects5[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineStarted"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineCompleted"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble"))).getChild("lineCompleted"), false);
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow").setNumber(-(1));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startinCol").setNumber(-(1));
}}

}


{

/* Reuse gdjs.level_321_32sceneCode.GDbottomLineObjects4 */
/* Reuse gdjs.level_321_32sceneCode.GDleftLineObjects4 */
/* Reuse gdjs.level_321_32sceneCode.GDrightLineObjects4 */
/* Reuse gdjs.level_321_32sceneCode.GDtopLineObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.level_321_32sceneCode.GDtopLineObjects4.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDbottomLineObjects4.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDleftLineObjects4.length === 0 ) ? (( gdjs.level_321_32sceneCode.GDrightLineObjects4.length === 0 ) ? "" :gdjs.level_321_32sceneCode.GDrightLineObjects4[0].getName()) :gdjs.level_321_32sceneCode.GDleftLineObjects4[0].getName()) :gdjs.level_321_32sceneCode.GDbottomLineObjects4[0].getName()) :gdjs.level_321_32sceneCode.GDtopLineObjects4[0].getName()) == "leftLine");
}
if (isConditionTrue_0) {
/* Reuse gdjs.level_321_32sceneCode.GDleftLineObjects4 */
{for(var i = 0, len = gdjs.level_321_32sceneCode.GDleftLineObjects4.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDleftLineObjects4[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineStarted"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineCompleted"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble"))).getChild("lineCompleted"), false);
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow").setNumber(-(1));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startinCol").setNumber(-(1));
}}

}


};gdjs.level_321_32sceneCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.level_321_32sceneCode.GDbottomLineObjects3, gdjs.level_321_32sceneCode.GDbottomLineObjects4);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDleftLineObjects3, gdjs.level_321_32sceneCode.GDleftLineObjects4);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDrightLineObjects3, gdjs.level_321_32sceneCode.GDrightLineObjects4);

gdjs.copyArray(gdjs.level_321_32sceneCode.GDtopLineObjects3, gdjs.level_321_32sceneCode.GDtopLineObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_321_32sceneCode.GDrightLineObjects4.length;i<l;++i) {
    if ( gdjs.level_321_32sceneCode.GDrightLineObjects4[i].getVariableString(gdjs.level_321_32sceneCode.GDrightLineObjects4[i].getVariables().get("Group")) == "line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) ) {
        isConditionTrue_0 = true;
        gdjs.level_321_32sceneCode.GDrightLineObjects4[k] = gdjs.level_321_32sceneCode.GDrightLineObjects4[i];
        ++k;
    }
}
gdjs.level_321_32sceneCode.GDrightLineObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.level_321_32sceneCode.GDleftLineObjects4.length;i<l;++i) {
    if ( gdjs.level_321_32sceneCode.GDleftLineObjects4[i].getVariableString(gdjs.level_321_32sceneCode.GDleftLineObjects4[i].getVariables().get("Group")) == "line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) ) {
        isConditionTrue_0 = true;
        gdjs.level_321_32sceneCode.GDleftLineObjects4[k] = gdjs.level_321_32sceneCode.GDleftLineObjects4[i];
        ++k;
    }
}
gdjs.level_321_32sceneCode.GDleftLineObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.level_321_32sceneCode.GDbottomLineObjects4.length;i<l;++i) {
    if ( gdjs.level_321_32sceneCode.GDbottomLineObjects4[i].getVariableString(gdjs.level_321_32sceneCode.GDbottomLineObjects4[i].getVariables().get("Group")) == "line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) ) {
        isConditionTrue_0 = true;
        gdjs.level_321_32sceneCode.GDbottomLineObjects4[k] = gdjs.level_321_32sceneCode.GDbottomLineObjects4[i];
        ++k;
    }
}
gdjs.level_321_32sceneCode.GDbottomLineObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.level_321_32sceneCode.GDtopLineObjects4.length;i<l;++i) {
    if ( gdjs.level_321_32sceneCode.GDtopLineObjects4[i].getVariableString(gdjs.level_321_32sceneCode.GDtopLineObjects4[i].getVariables().get("Group")) == "line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) ) {
        isConditionTrue_0 = true;
        gdjs.level_321_32sceneCode.GDtopLineObjects4[k] = gdjs.level_321_32sceneCode.GDtopLineObjects4[i];
        ++k;
    }
}
gdjs.level_321_32sceneCode.GDtopLineObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level_321_32sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.level_321_32sceneCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bottomLine"), gdjs.level_321_32sceneCode.GDbottomLineObjects2);
gdjs.copyArray(runtimeScene.getObjects("leftLine"), gdjs.level_321_32sceneCode.GDleftLineObjects2);
gdjs.copyArray(runtimeScene.getObjects("rightLine"), gdjs.level_321_32sceneCode.GDrightLineObjects2);
gdjs.copyArray(runtimeScene.getObjects("topLine"), gdjs.level_321_32sceneCode.GDtopLineObjects2);

gdjs.level_321_32sceneCode.forEachTotalCount3 = 0;
gdjs.level_321_32sceneCode.forEachObjects3.length = 0;
gdjs.level_321_32sceneCode.forEachCount0_3 = gdjs.level_321_32sceneCode.GDrightLineObjects2.length;
gdjs.level_321_32sceneCode.forEachTotalCount3 += gdjs.level_321_32sceneCode.forEachCount0_3;
gdjs.level_321_32sceneCode.forEachObjects3.push.apply(gdjs.level_321_32sceneCode.forEachObjects3,gdjs.level_321_32sceneCode.GDrightLineObjects2);
gdjs.level_321_32sceneCode.forEachCount1_3 = gdjs.level_321_32sceneCode.GDleftLineObjects2.length;
gdjs.level_321_32sceneCode.forEachTotalCount3 += gdjs.level_321_32sceneCode.forEachCount1_3;
gdjs.level_321_32sceneCode.forEachObjects3.push.apply(gdjs.level_321_32sceneCode.forEachObjects3,gdjs.level_321_32sceneCode.GDleftLineObjects2);
gdjs.level_321_32sceneCode.forEachCount2_3 = gdjs.level_321_32sceneCode.GDbottomLineObjects2.length;
gdjs.level_321_32sceneCode.forEachTotalCount3 += gdjs.level_321_32sceneCode.forEachCount2_3;
gdjs.level_321_32sceneCode.forEachObjects3.push.apply(gdjs.level_321_32sceneCode.forEachObjects3,gdjs.level_321_32sceneCode.GDbottomLineObjects2);
gdjs.level_321_32sceneCode.forEachCount3_3 = gdjs.level_321_32sceneCode.GDtopLineObjects2.length;
gdjs.level_321_32sceneCode.forEachTotalCount3 += gdjs.level_321_32sceneCode.forEachCount3_3;
gdjs.level_321_32sceneCode.forEachObjects3.push.apply(gdjs.level_321_32sceneCode.forEachObjects3,gdjs.level_321_32sceneCode.GDtopLineObjects2);
for (gdjs.level_321_32sceneCode.forEachIndex3 = 0;gdjs.level_321_32sceneCode.forEachIndex3 < gdjs.level_321_32sceneCode.forEachTotalCount3;++gdjs.level_321_32sceneCode.forEachIndex3) {
gdjs.level_321_32sceneCode.GDbottomLineObjects3.length = 0;

gdjs.level_321_32sceneCode.GDleftLineObjects3.length = 0;

gdjs.level_321_32sceneCode.GDrightLineObjects3.length = 0;

gdjs.level_321_32sceneCode.GDtopLineObjects3.length = 0;


if (gdjs.level_321_32sceneCode.forEachIndex3 < gdjs.level_321_32sceneCode.forEachCount0_3) {
    gdjs.level_321_32sceneCode.GDrightLineObjects3.push(gdjs.level_321_32sceneCode.forEachObjects3[gdjs.level_321_32sceneCode.forEachIndex3]);
}
else if (gdjs.level_321_32sceneCode.forEachIndex3 < gdjs.level_321_32sceneCode.forEachCount0_3+gdjs.level_321_32sceneCode.forEachCount1_3) {
    gdjs.level_321_32sceneCode.GDleftLineObjects3.push(gdjs.level_321_32sceneCode.forEachObjects3[gdjs.level_321_32sceneCode.forEachIndex3]);
}
else if (gdjs.level_321_32sceneCode.forEachIndex3 < gdjs.level_321_32sceneCode.forEachCount0_3+gdjs.level_321_32sceneCode.forEachCount1_3+gdjs.level_321_32sceneCode.forEachCount2_3) {
    gdjs.level_321_32sceneCode.GDbottomLineObjects3.push(gdjs.level_321_32sceneCode.forEachObjects3[gdjs.level_321_32sceneCode.forEachIndex3]);
}
else if (gdjs.level_321_32sceneCode.forEachIndex3 < gdjs.level_321_32sceneCode.forEachCount0_3+gdjs.level_321_32sceneCode.forEachCount1_3+gdjs.level_321_32sceneCode.forEachCount2_3+gdjs.level_321_32sceneCode.forEachCount3_3) {
    gdjs.level_321_32sceneCode.GDtopLineObjects3.push(gdjs.level_321_32sceneCode.forEachObjects3[gdjs.level_321_32sceneCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.level_321_32sceneCode.eventsList9(runtimeScene);} //Subevents end.
}
}

}


};gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDbottomLineObjects3Objects = Hashtable.newFrom({"bottomLine": gdjs.level_321_32sceneCode.GDbottomLineObjects3});
gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDrightLineObjects3Objects = Hashtable.newFrom({"rightLine": gdjs.level_321_32sceneCode.GDrightLineObjects3});
gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDtopLineObjects3Objects = Hashtable.newFrom({"topLine": gdjs.level_321_32sceneCode.GDtopLineObjects3});
gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDleftLineObjects2Objects = Hashtable.newFrom({"leftLine": gdjs.level_321_32sceneCode.GDleftLineObjects2});
gdjs.level_321_32sceneCode.eventsList11 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow")) + 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol"));
}
if (isConditionTrue_0) {
gdjs.level_321_32sceneCode.GDbottomLineObjects3.length = 0;

{gdjs.evtTools.debuggerTools.log("in bottom", "", "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDbottomLineObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) / 2), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) / 2), "");
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDbottomLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDbottomLineObjects3[i].setColor(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))));
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDbottomLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDbottomLineObjects3[i].setHeight(64);
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDbottomLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDbottomLineObjects3[i].setWidth(350);
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDbottomLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDbottomLineObjects3[i].returnVariable(gdjs.level_321_32sceneCode.GDbottomLineObjects3[i].getVariables().getFromIndex(0)).setString("line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol"))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow"))) + "~" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16))));
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDbottomLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDbottomLineObjects3[i].returnVariable(gdjs.level_321_32sceneCode.GDbottomLineObjects3[i].getVariables().getFromIndex(1)).setString("line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))));
}
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)));
}{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble")));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineStarted"), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol")) + 1;
}
if (isConditionTrue_0) {
gdjs.level_321_32sceneCode.GDrightLineObjects3.length = 0;

{gdjs.evtTools.debuggerTools.log("in right", "", "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDrightLineObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) / 2), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) / 2), "");
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDrightLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDrightLineObjects3[i].setColor(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))));
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDrightLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDrightLineObjects3[i].setHeight(350);
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDrightLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDrightLineObjects3[i].setWidth(64);
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDrightLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDrightLineObjects3[i].returnVariable(gdjs.level_321_32sceneCode.GDrightLineObjects3[i].getVariables().getFromIndex(0)).setString("line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol"))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow"))) + "~" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16))));
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDrightLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDrightLineObjects3[i].returnVariable(gdjs.level_321_32sceneCode.GDrightLineObjects3[i].getVariables().getFromIndex(1)).setString("line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))));
}
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)));
}{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble")));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineStarted"), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow")) - 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol"));
}
if (isConditionTrue_0) {
gdjs.level_321_32sceneCode.GDtopLineObjects3.length = 0;

{gdjs.evtTools.debuggerTools.log("in top", "", "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDtopLineObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) / 2), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) / 2), "");
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDtopLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDtopLineObjects3[i].setColor(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))));
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDtopLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDtopLineObjects3[i].setHeight(64);
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDtopLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDtopLineObjects3[i].setWidth(350);
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDtopLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDtopLineObjects3[i].returnVariable(gdjs.level_321_32sceneCode.GDtopLineObjects3[i].getVariables().getFromIndex(0)).setString("line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol"))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow"))) + "~" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16))));
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDtopLineObjects3.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDtopLineObjects3[i].returnVariable(gdjs.level_321_32sceneCode.GDtopLineObjects3[i].getVariables().getFromIndex(1)).setString("line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))));
}
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)));
}{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble")));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineStarted"), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol")) - 1;
}
if (isConditionTrue_0) {
gdjs.level_321_32sceneCode.GDleftLineObjects2.length = 0;

{gdjs.evtTools.debuggerTools.log("in left", "", "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDleftLineObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) / 2), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) / 2), "");
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDleftLineObjects2.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDleftLineObjects2[i].setColor(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))));
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDleftLineObjects2.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDleftLineObjects2[i].setHeight(350);
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDleftLineObjects2.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDleftLineObjects2[i].setWidth(64);
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDleftLineObjects2.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDleftLineObjects2[i].returnVariable(gdjs.level_321_32sceneCode.GDleftLineObjects2[i].getVariables().getFromIndex(0)).setString("line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol"))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow"))) + "~" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16))));
}
}{for(var i = 0, len = gdjs.level_321_32sceneCode.GDleftLineObjects2.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDleftLineObjects2[i].returnVariable(gdjs.level_321_32sceneCode.GDleftLineObjects2[i].getVariables().getFromIndex(1)).setString("line_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorR").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorG").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))) + "_" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("colorB").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("colorCount"))))));
}
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)));
}{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)));
}{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble")));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineStarted"), true);
}}

}


};gdjs.level_321_32sceneCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(22).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22))).getChild("lineCompleted"), true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}}

}


};gdjs.level_321_32sceneCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(0);
}}

}


{


const valueIteratorReference3 = runtimeScene.getScene().getVariables().get("child");
const iterableReference3 = runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.level_321_32sceneCode.eventsList12(runtimeScene);} //Subevents end.
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(23)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)) + 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(23)) == 10;
}
if (isConditionTrue_0) {
{gdjs.evtTools.debuggerTools.log("all complete", "", "");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(24), true);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber(-(1));
}}

}


};gdjs.level_321_32sceneCode.eventsList14 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("bottomLine"), gdjs.level_321_32sceneCode.GDbottomLineObjects2);
gdjs.copyArray(runtimeScene.getObjects("leftLine"), gdjs.level_321_32sceneCode.GDleftLineObjects2);
gdjs.copyArray(runtimeScene.getObjects("rightLine"), gdjs.level_321_32sceneCode.GDrightLineObjects2);
gdjs.copyArray(runtimeScene.getObjects("topLine"), gdjs.level_321_32sceneCode.GDtopLineObjects2);

gdjs.level_321_32sceneCode.forEachTotalCount3 = 0;
gdjs.level_321_32sceneCode.forEachObjects3.length = 0;
gdjs.level_321_32sceneCode.forEachCount0_3 = gdjs.level_321_32sceneCode.GDrightLineObjects2.length;
gdjs.level_321_32sceneCode.forEachTotalCount3 += gdjs.level_321_32sceneCode.forEachCount0_3;
gdjs.level_321_32sceneCode.forEachObjects3.push.apply(gdjs.level_321_32sceneCode.forEachObjects3,gdjs.level_321_32sceneCode.GDrightLineObjects2);
gdjs.level_321_32sceneCode.forEachCount1_3 = gdjs.level_321_32sceneCode.GDleftLineObjects2.length;
gdjs.level_321_32sceneCode.forEachTotalCount3 += gdjs.level_321_32sceneCode.forEachCount1_3;
gdjs.level_321_32sceneCode.forEachObjects3.push.apply(gdjs.level_321_32sceneCode.forEachObjects3,gdjs.level_321_32sceneCode.GDleftLineObjects2);
gdjs.level_321_32sceneCode.forEachCount2_3 = gdjs.level_321_32sceneCode.GDbottomLineObjects2.length;
gdjs.level_321_32sceneCode.forEachTotalCount3 += gdjs.level_321_32sceneCode.forEachCount2_3;
gdjs.level_321_32sceneCode.forEachObjects3.push.apply(gdjs.level_321_32sceneCode.forEachObjects3,gdjs.level_321_32sceneCode.GDbottomLineObjects2);
gdjs.level_321_32sceneCode.forEachCount3_3 = gdjs.level_321_32sceneCode.GDtopLineObjects2.length;
gdjs.level_321_32sceneCode.forEachTotalCount3 += gdjs.level_321_32sceneCode.forEachCount3_3;
gdjs.level_321_32sceneCode.forEachObjects3.push.apply(gdjs.level_321_32sceneCode.forEachObjects3,gdjs.level_321_32sceneCode.GDtopLineObjects2);
for (gdjs.level_321_32sceneCode.forEachIndex3 = 0;gdjs.level_321_32sceneCode.forEachIndex3 < gdjs.level_321_32sceneCode.forEachTotalCount3;++gdjs.level_321_32sceneCode.forEachIndex3) {
gdjs.level_321_32sceneCode.GDbottomLineObjects3.length = 0;

gdjs.level_321_32sceneCode.GDleftLineObjects3.length = 0;

gdjs.level_321_32sceneCode.GDrightLineObjects3.length = 0;

gdjs.level_321_32sceneCode.GDtopLineObjects3.length = 0;


if (gdjs.level_321_32sceneCode.forEachIndex3 < gdjs.level_321_32sceneCode.forEachCount0_3) {
    gdjs.level_321_32sceneCode.GDrightLineObjects3.push(gdjs.level_321_32sceneCode.forEachObjects3[gdjs.level_321_32sceneCode.forEachIndex3]);
}
else if (gdjs.level_321_32sceneCode.forEachIndex3 < gdjs.level_321_32sceneCode.forEachCount0_3+gdjs.level_321_32sceneCode.forEachCount1_3) {
    gdjs.level_321_32sceneCode.GDleftLineObjects3.push(gdjs.level_321_32sceneCode.forEachObjects3[gdjs.level_321_32sceneCode.forEachIndex3]);
}
else if (gdjs.level_321_32sceneCode.forEachIndex3 < gdjs.level_321_32sceneCode.forEachCount0_3+gdjs.level_321_32sceneCode.forEachCount1_3+gdjs.level_321_32sceneCode.forEachCount2_3) {
    gdjs.level_321_32sceneCode.GDbottomLineObjects3.push(gdjs.level_321_32sceneCode.forEachObjects3[gdjs.level_321_32sceneCode.forEachIndex3]);
}
else if (gdjs.level_321_32sceneCode.forEachIndex3 < gdjs.level_321_32sceneCode.forEachCount0_3+gdjs.level_321_32sceneCode.forEachCount1_3+gdjs.level_321_32sceneCode.forEachCount2_3+gdjs.level_321_32sceneCode.forEachCount3_3) {
    gdjs.level_321_32sceneCode.GDtopLineObjects3.push(gdjs.level_321_32sceneCode.forEachObjects3[gdjs.level_321_32sceneCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.level_321_32sceneCode.eventsList7(runtimeScene);} //Subevents end.
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineStarted"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingRow")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("row"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("startingCol")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("column"));
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(19), true);
}
{ //Subevents
gdjs.level_321_32sceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(19), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineCompleted"), false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.level_321_32sceneCode.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineStarted"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble"))).getChild("startingRow"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble"))).getChild("startingCol"));
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble"))).getChild("row"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble"))).getChild("column"));
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("lineCompleted"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("level1bubbles").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14))).getChild("counterBubble"))).getChild("lineCompleted"), true);
}
{ //Subevents
gdjs.level_321_32sceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.level_321_32sceneCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.level_321_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_321_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.level_321_32sceneCode.GDplayerObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.level_321_32sceneCode.GDplayerObjects1[k] = gdjs.level_321_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.level_321_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level_321_32sceneCode.GDgridObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(((gdjs.level_321_32sceneCode.GDgridObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_321_32sceneCode.GDgridObjects1[0].getVariables()).get("Name"))), 5, 1)));
}{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(((gdjs.level_321_32sceneCode.GDgridObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_321_32sceneCode.GDgridObjects1[0].getVariables()).get("Name"))), 7, 1)));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(19), false);
}
{ //Subevents
gdjs.level_321_32sceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.level_321_32sceneCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bubble"), gdjs.level_321_32sceneCode.GDbubbleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDbubbleObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.level_321_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("grid"), gdjs.level_321_32sceneCode.GDgridObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.level_321_32sceneCode.mapOfGDgdjs_9546level_9595321_959532sceneCode_9546GDgridObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.level_321_32sceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.level_321_32sceneCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) / 2)));
}{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) / 2)));
}
{ //Subevents
gdjs.level_321_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.level_321_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.level_321_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTimer"))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.level_321_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.level_321_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.level_321_32sceneCode.GDplayerObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.level_321_32sceneCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(24), true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "success scene", false);
}}

}


};

gdjs.level_321_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level_321_32sceneCode.GDbubbleObjects1.length = 0;
gdjs.level_321_32sceneCode.GDbubbleObjects2.length = 0;
gdjs.level_321_32sceneCode.GDbubbleObjects3.length = 0;
gdjs.level_321_32sceneCode.GDbubbleObjects4.length = 0;
gdjs.level_321_32sceneCode.GDbubbleObjects5.length = 0;
gdjs.level_321_32sceneCode.GDbubbleObjects6.length = 0;
gdjs.level_321_32sceneCode.GDbubbleObjects7.length = 0;
gdjs.level_321_32sceneCode.GDplayerObjects1.length = 0;
gdjs.level_321_32sceneCode.GDplayerObjects2.length = 0;
gdjs.level_321_32sceneCode.GDplayerObjects3.length = 0;
gdjs.level_321_32sceneCode.GDplayerObjects4.length = 0;
gdjs.level_321_32sceneCode.GDplayerObjects5.length = 0;
gdjs.level_321_32sceneCode.GDplayerObjects6.length = 0;
gdjs.level_321_32sceneCode.GDplayerObjects7.length = 0;
gdjs.level_321_32sceneCode.GDgridObjects1.length = 0;
gdjs.level_321_32sceneCode.GDgridObjects2.length = 0;
gdjs.level_321_32sceneCode.GDgridObjects3.length = 0;
gdjs.level_321_32sceneCode.GDgridObjects4.length = 0;
gdjs.level_321_32sceneCode.GDgridObjects5.length = 0;
gdjs.level_321_32sceneCode.GDgridObjects6.length = 0;
gdjs.level_321_32sceneCode.GDgridObjects7.length = 0;
gdjs.level_321_32sceneCode.GDrightLineObjects1.length = 0;
gdjs.level_321_32sceneCode.GDrightLineObjects2.length = 0;
gdjs.level_321_32sceneCode.GDrightLineObjects3.length = 0;
gdjs.level_321_32sceneCode.GDrightLineObjects4.length = 0;
gdjs.level_321_32sceneCode.GDrightLineObjects5.length = 0;
gdjs.level_321_32sceneCode.GDrightLineObjects6.length = 0;
gdjs.level_321_32sceneCode.GDrightLineObjects7.length = 0;
gdjs.level_321_32sceneCode.GDleftLineObjects1.length = 0;
gdjs.level_321_32sceneCode.GDleftLineObjects2.length = 0;
gdjs.level_321_32sceneCode.GDleftLineObjects3.length = 0;
gdjs.level_321_32sceneCode.GDleftLineObjects4.length = 0;
gdjs.level_321_32sceneCode.GDleftLineObjects5.length = 0;
gdjs.level_321_32sceneCode.GDleftLineObjects6.length = 0;
gdjs.level_321_32sceneCode.GDleftLineObjects7.length = 0;
gdjs.level_321_32sceneCode.GDbottomLineObjects1.length = 0;
gdjs.level_321_32sceneCode.GDbottomLineObjects2.length = 0;
gdjs.level_321_32sceneCode.GDbottomLineObjects3.length = 0;
gdjs.level_321_32sceneCode.GDbottomLineObjects4.length = 0;
gdjs.level_321_32sceneCode.GDbottomLineObjects5.length = 0;
gdjs.level_321_32sceneCode.GDbottomLineObjects6.length = 0;
gdjs.level_321_32sceneCode.GDbottomLineObjects7.length = 0;
gdjs.level_321_32sceneCode.GDtopLineObjects1.length = 0;
gdjs.level_321_32sceneCode.GDtopLineObjects2.length = 0;
gdjs.level_321_32sceneCode.GDtopLineObjects3.length = 0;
gdjs.level_321_32sceneCode.GDtopLineObjects4.length = 0;
gdjs.level_321_32sceneCode.GDtopLineObjects5.length = 0;
gdjs.level_321_32sceneCode.GDtopLineObjects6.length = 0;
gdjs.level_321_32sceneCode.GDtopLineObjects7.length = 0;
gdjs.level_321_32sceneCode.GDScoreObjects1.length = 0;
gdjs.level_321_32sceneCode.GDScoreObjects2.length = 0;
gdjs.level_321_32sceneCode.GDScoreObjects3.length = 0;
gdjs.level_321_32sceneCode.GDScoreObjects4.length = 0;
gdjs.level_321_32sceneCode.GDScoreObjects5.length = 0;
gdjs.level_321_32sceneCode.GDScoreObjects6.length = 0;
gdjs.level_321_32sceneCode.GDScoreObjects7.length = 0;
gdjs.level_321_32sceneCode.GDgameTitleObjects1.length = 0;
gdjs.level_321_32sceneCode.GDgameTitleObjects2.length = 0;
gdjs.level_321_32sceneCode.GDgameTitleObjects3.length = 0;
gdjs.level_321_32sceneCode.GDgameTitleObjects4.length = 0;
gdjs.level_321_32sceneCode.GDgameTitleObjects5.length = 0;
gdjs.level_321_32sceneCode.GDgameTitleObjects6.length = 0;
gdjs.level_321_32sceneCode.GDgameTitleObjects7.length = 0;

gdjs.level_321_32sceneCode.eventsList17(runtimeScene);

return;

}

gdjs['level_321_32sceneCode'] = gdjs.level_321_32sceneCode;
