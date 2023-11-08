import mongoose from "mongoose"

const GroupSchema = new mongoose.Schema(
  {
    groupName:{
        type:String,
        required:true
    },
    members:{
        type:[String],
        default:[]
    }
  }
)

const Group = mongoose.model("Group", GroupSchema)
export default Group
