var StartButton = false;
var CreditButton = false;
var ExitButton = false;
var MenuButton = false;
var ControlButton = false;

function OnMouseUp ()
{
	// is it the start button?
	if (StartButton)
	{
		Application.LoadLevel(1);
	}
	if (CreditButton)
	{
		Application.LoadLevel(2);
	}
	if (MenuButton)
	{
		Application.LoadLevel(0);
	}
	if (ControlButton)
	{
		Application.LoadLevel(3);
	}
	else
	{
		Application.Quit();
	}
}