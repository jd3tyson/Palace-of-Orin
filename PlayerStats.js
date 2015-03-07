static var curHealth : int = 100;		// How much health the player has
static var maxHealth : int = 100;		// The maximum amount of player health possible
var healthtext : GUIText;				// On screen health information
var GameNotification : GUIText;
    
static var curXp : int = 0;
var maxXp : int = 100;
//var xpText : GUIText;
    
var level : int = 1;
//var levelText : GUIText;
     
     
function Start () 
{
	healthRegen();					// Start health regen on start
}
     
function Update () 
{	
	healthtext.text = "Health: " + curHealth + " / " + maxHealth + "\n" + "XP: " + curXp + " / " 	// On screen player stats information
					+ maxXp + "\n" + "Level: " + level;								
     
    if(curHealth < 0 ) 				// If current health is less than zero
    {
    	//curHealth = 0;				// Set to zero, no negative health values
    }
     
    if(curHealth > maxHealth) 			// If current health is more than maxHealth
    { 
    	curHealth = maxHealth;			// Set to maxHealth, no health value over maxHealth
    }
     
    if(Input.GetKeyDown("e")) 		// If the E key is pressed (test)
    {		
    	curHealth -= 10;			// Subtract 10 health points from current player health
    }
    
    if(curXp >= maxXp)
    {
    	level ++;					// Increase the players level if current xp reaches the maximum xp
    	maxHealth += 5;				// Increase the players maximum health by 5
    	curXp = 0;					// Reset the player xp
    	GameNotification.text = "You levelled up and gained 5 health!";
    }     
    
    if(Input.GetKeyDown("q"))		// Increase the player xp by pressing 'q'
    {
    	curXp +=10;
    }
}
     
     
     
     
function healthRegen () 

{
	for(i=1;i>0;i++) 
	{
    	yield WaitForSeconds(1.0);		// Wait 1.5 seconds before starting to regen health
     	if(curHealth < maxHealth)		// If health is less than maximum, increase the current player health
     	{
     		curHealth++;
     	}
     
     
    }
}

