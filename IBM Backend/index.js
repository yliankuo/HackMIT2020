// Step 1: create a cloud function
main = message => {  
	console.log(message.email) 
	console.log(message.password)
}
// Step 2: Execute it for testing
main({  email: 'abc@gmail.com',  password: 'thisIsPassword'})

// Step 3: Assign it as start function
global.main = main