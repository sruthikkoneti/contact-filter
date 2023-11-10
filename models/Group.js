import mongoose from "mongoose"

const GroupSchema = new mongoose.Schema(
  {
    groupName:{
        type:String,
        required:true
    },
    members:{
        type:[Number],
        default:[]
    }
  }
)

const Group = mongoose.model("Group", GroupSchema)
export default Group
