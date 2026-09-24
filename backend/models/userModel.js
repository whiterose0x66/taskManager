import {mongoose} from "mongoose" ;
import bcrypt from "bcrypt";
const user = new mongoose.Schema({
  username : {
    type: String ,
    trim : true ,
    required : true
  },
  password : {
    type: String ,
    required: this.provider === 'local'  
  } ,
  provider : {
    type: String ,
    enum: ['local' , 'google'] ,
  }
})

user.pre("save", async function () {
  if (!this.isModified("password")) {
    return ;
  }

  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
});

const User = mongoose.model("User" , user) ;

export {User} ;
