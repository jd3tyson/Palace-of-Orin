
var RotationSpeed : float = 60; 	// Will spin 60 degrees a second
var goldrand : int;					// Variable for the random number
var GameNotification : GUIText;		// Game notification text

function Start () 
{
	goldrand = 1; // Will create a random number for the pickup (10 gold to 100 gold)
}

function Update () 
{
	
}

function OnTriggerEnter (col : Collider)
{
	if (col.gameObject.tag == "Player")		// If the object collides with the player
	{
		Inventory.inventoryArray[1] += goldrand;		// Add the random amount of gold to the players inventory (array)
		PlayerStats.curXp += 10;						// Reward player 10 XP
		Destroy(this.gameObject);						// Remove the object from the game world
		
		
		GameNotification.text = "You collected a chest and gained 10XP!";		// Display the text as a notification to the player
	}
}
