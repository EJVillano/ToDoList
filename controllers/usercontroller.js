const bcrypt = require("bcrypt")

const User = require("../Models/User");

const auth = require("../auth.js");
const { error } = require("console");

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
                    password : bcrypt.hashSync(rb.password, 10)
                })
                return newUser.save()
                .then((savedUser) =>{
                    return res.status(200).send({message: "Registered Successfully" })
                 })
                 .catch(err => {
                    console.error("Error in saving: ", err)
                    return res.status(500).send({ error: "Error in save"})
                 })
            }
        })
        
    }  

}

module.exports.loginUser = (req, res) =>{

        return User.findOne({username : req.body.username})
        .then(result=>{
            if(result == null){
                return res.status(404).send({message : "User not found"});
            }else{

                const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                if(isPasswordCorrect){
                    return res.status(200).send({access: auth.createAccessToken(result)})
                }else{
                    return res.status(401).send({message : "Username and password do not match"}
                        );
                }
            }
        }).catch(err => {
            console.error("Error in finding user:", err); // Log the error
            return res.status(500).json({ message: "Error in finding user" });
        });

    
};

module.exports.getUser =(req, res) =>{
    const userId = req.params.userId;

    return User.findById(userId)
        .then(result=>{
            if(result == null){
                return res.status(404).send({message : "User does not Exist"});
            }else{
                return res.status(200).send({result})
                
            }
        }).catch(err => {
            console.error("Error in finding user:", err); // Log the error
            return res.status(500).json({ message: "Error in finding user" });
        });
} 

module.exports.getUserDetails = (req, res) => {
    const userId = req.user.id;

    User.findById(userId)
    .then(user => {
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        // Exclude sensitive information like password
        user.password = undefined;

        return res.status(200).send({ user });
    })
    .catch(err => {
        console.error("Error in fetching user profile", err)
        return res.status(500).send({ error: 'Failed to fetch user profile' })
    });
}