
//inventory
static var inventoryArray : int[] = [1,0,0];   // Starting amounts for a new game (1 Health potion, 0 chests and 0 quest items)
var inventoryText : GameObject;				   // Display text for the players inventory
var GameNotification : GUIText;				   // Game notification text
var QuestText : GUIText;					   // Quest Information
 
function Start ()
{ 
	QuestText.text = "Go and talk to M'aiq";
	GameNotification.text = ""; 
}

function Update () 
{
	inventoryText.guiText.text = "Health Potions: " + inventoryArray[0] + "\n" 
							   + "Chests: " + inventoryArray[1] + "\n"
							   + "Quest Items: " + inventoryArray[2];
 
 	if (Input.GetKeyDown("h"))		// Press 'h' to use a health potion
 	{
 		if (inventoryArray[0] > 0)	// Make sure a health potion is available
 		{
 			healthPotion();			// Use a health potion
 			GameNotification.text = "You used a Health Potion!";
 		}
 		else
 		{
 			GameNotification.text = "You have no Health Potions!";
 		}
 	}
 	
 	if (Input.GetKeyDown("c"))
 	{
 		inventoryArray[1] ++;
 		GameNotification.text = "You cheated and gained a chest!";
 	}
 	
 	if (Input.GetKeyDown("x"))
 	{
 		inventoryArray[2] ++;
 		GameNotification.text = "You cheated and gained a quest item";
 	} 	 
}

function healthPotion()
{
	PlayerStats.curHealth += 100;	// Increase the players health to 100 after use
	inventoryArray[0] -= 1;			// Deduct one health potion from the inventory
}