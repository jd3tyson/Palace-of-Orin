var NPCDialogGUI : GUIText;
var Dialog : String[];
var QuestComDialog : String[];
var Quest2ComDialog : String[];
var QuestText : GUIText;
var GameNotification : GUIText;

private var Talking:boolean;
private var QuestComplete:boolean;
private var Quest2Complete:boolean;
private var PlayerController:CharacterController;
private var CurrentLine:int;

function Start ()
{
	NPCDialogGUI.enabled = false;
}

function OnTriggerEnter (col:Collider) 
{
	if (col.tag == "Player")
	{
		NPCDialogGUI.enabled = true;
		
		if (Inventory.inventoryArray[1] < 4)
		{
			QuestText.text = "Search M'aiq's house and find four chests. Return to M'aiq when you have them";
			Talking = true;
			CurrentLine = 0;
			NPCDialogGUI.text = Dialog[CurrentLine];
			
			
		}
		
		if (Inventory.inventoryArray[1] >= 4)
		{
			QuestComplete = true;
			CurrentLine = 0;
			NPCDialogGUI.text = QuestComDialog[CurrentLine];
		}
		
		if (Inventory.inventoryArray[2] >= 1)
		{
			Quest2Complete = true;
			CurrentLine = 0;
			NPCDialogGUI.text = Quest2ComDialog[CurrentLine];
			Inventory.inventoryArray[2] -= 1;
		}
	}
}

function OnTriggerExit (col:Collider)
{
	if (col.tag == "Player")
	{
		NPCDialogGUI.enabled = false;
	}
}

function Update () 
{
	if (Talking)
	{
		if (Input.GetButtonDown("Ctrl"))
		{ 
			if (CurrentLine < Dialog.Length - 1)
			{
				//QuestText.text = "Return to M'aiq";
				CurrentLine ++; //display next line
				NPCDialogGUI.text = Dialog[CurrentLine];
			}
			else
			{
				CurrentLine = 0;
				NPCDialogGUI.text = "";
				Talking = false;
			}
		}
	
	}
	
	if (QuestComplete)
	{
			
		if (Input.GetButtonDown("Ctrl"))
		{
			if (CurrentLine < QuestComDialog.Length -1)
			{
				QuestText.text = "Head north to the abandoned campsite and find the rare book";
				CurrentLine ++;
				NPCDialogGUI.text = QuestComDialog[CurrentLine];
			}
			else
			{
				CurrentLine = 0;
				NPCDialogGUI.text = "";
			}
		}
	}
	
	if (Quest2Complete)
	{
		if (Input.GetButtonDown("Ctrl"))
		{
			if (CurrentLine < Quest2ComDialog.Length -1)
			{
				CurrentLine++;
				NPCDialogGUI.text = Quest2ComDialog[CurrentLine];
			}
			else
			{
				QuestText.text = "You have completed the Palace of Orin: Demo Edition. Press Esc to exit";
				GameNotification.text = "Quests Completed";
				CurrentLine = 0;
				NPCDialogGUI.text = "";
			}
		}
	}
	
}
