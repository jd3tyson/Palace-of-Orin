using UnityEngine;
using System.Collections;

[RequireComponent (typeof(CharacterController))]
public class PlayerController : MonoBehaviour {
	
	public float movementSpeed = 5.0f;
	public float mouseSensitivity = 5.0f;
	float verticalRotation = 0; 
	public float range = 60.0f;
	float verticalVol = 0;
	public float jumpSpeed = 20.0f;
	
	CharacterController charactorController;
	
	// Use this for initialization
	void Start () {
		Screen.lockCursor = true;
		 charactorController = GetComponent<CharacterController>();
	}
	
	// Update is called once per frame
	void Update () {
		
		
		//rotation 
		float rotX = Input.GetAxis ("Mouse X") * mouseSensitivity;
		transform.Rotate(0, rotX, 0);
		
		verticalRotation -= Input.GetAxis ("Mouse Y") * mouseSensitivity;
		verticalRotation = Mathf.Clamp(verticalRotation, -range, range);
		Camera.main.transform.localRotation = Quaternion.Euler(verticalRotation, 0, 0);
		
	
		
		//movement 
		float forwardspeed = Input.GetAxis("Vertical")* movementSpeed;
		float sidespeed = Input.GetAxis("Horizontal")* movementSpeed;
		
		verticalVol += Physics.gravity.y * Time.deltaTime;
		
		if (charactorController.isGrounded && Input.GetButtonDown ("Jump")){
			verticalVol = jumpSpeed;
		}
		
		Vector3 speed = new Vector3 (sidespeed, verticalVol, forwardspeed);
		speed = transform.rotation * speed;
		
		charactorController.Move ( speed * Time.deltaTime );
	}
}
