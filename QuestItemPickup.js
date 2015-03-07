var ItemQuan : int;					// Variable for quantity
var GameNotification : GUIText;		// Game notification text
var QuestText : GUIText;			// Quest notification text

function Start () 
{
	ItemQuan = 1; // Item represents one quest item
}

function Update () 
{
	
}

function OnTriggerEnter (col : Collider)
{
	if (col.gameObject.tag == "Player")		// If the object collides with the player
	{
		Inventory.inventoryArray[2] += ItemQuan;		// Add the random amount of gold to the players inventory (array)
		PlayerStats.curXp += 60;						// Reward player 60 XP
		Destroy(this.gameObject);						// Remove the object from the game world
		
		
		GameNotification.text = "You collected a quest item and gained 60XP!";		// Display the text as a notification to the player
		QuestText.text = "Return to M'aiq";											// Update quest log.
	}
}