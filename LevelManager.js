var NPCDialogGUI : GUIText;
var edgeMarginPercent : int;

function Start () 
{
	var edgeMargin = (Screen.width / 100) * edgeMarginPercent;
	NPCDialogGUI.pixelOffset.x = edgeMargin;
	NPCDialogGUI.pixelOffset.y = edgeMargin;
	

}

function Update () {

}