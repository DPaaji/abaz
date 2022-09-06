import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    userName: {
        type:String,
        // length: {min:3, max:14},
        // required: true,
        // validate: alphaNumValidator
    },
    firstName: {
        type: String,
        // required: true,
        // length: {
        //      min:3,
        //      max:14
        // },
        // format: alpha
    },
    lastName:{
        type:String,
        // required: true
        
    },
    email: {
        type: String,
        // required: true,
        format: "email"
    },
//     socialLinks:[
//             facebook= { type: String },
//             instagram= { type: String }, 
//             vimeo= { type: String},
//             twitter= { type: String}
// ],
    bio:{
        type: String,
        // length: {
        //     min:2, 
        //     max:500, 
        //     required: true
        // }
    },

    profession:{
        type: String,
        // required: true
    },
    password:{
        type: String,
        // required: true
    },
    imageUrl:{
        type: String,
        // required: true
    },
    // roles:[
    //     "admin", "user", "reviewer", "author"
    // ],
    isActive:{
        type: Boolean,
        // required: true
    },
    
},{timestamps: {createdAt: true, updatedAt: false}});

const UsersModel = mongoose.model("Users", userModel);
export default UsersModel;