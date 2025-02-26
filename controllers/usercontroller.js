const User = require("../Models/User");

module.exports.registerUser = (req, res) =>{
    let rb = req.body

    if (!rb.email.includes("@")){
        return res.status(400).send({ error: "Email invalid" });
	}

    if(rb.password.length < 8){
        return res.status(400).send({ error: "Password must be atleast 8 characters" });
	}

    else{
        User.find({ 
            email : rb.email, 
            username : rb.username
        })
        .then((Found) => {
            if (Found.length > 0){
                return res.status(409).send({ error: "Email/Username already exists" });
            }
            
            else{
                let newUser = new User({
                    firstname : rb.firstname,
                    lastname : rb.lastname,
                    email : rb.email,
                    birthdate : rb.birthdate,
                    username : rb.username,
                    password : rb.password
                })
                return newUser.save()
                .then((savedUser) =>{
                    message: "Registered Successfully" 
                 })
                 .catch(err => {
                    console.error("Error in saving: ", err)
                    return res.status(500).send({ error: "Error in save"})
                 })
            }
        })
        
    }  

}