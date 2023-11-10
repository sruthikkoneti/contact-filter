import Group from '../models/Group.js'

export const createGroup = async (req, res) => {
    try {
        const { groupName, members } = req.body
        const newGroup = new Group({
            groupName,
            members
        })

        const savedGroup = await newGroup.save()

        res.status(200).json(savedGroup)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addContacts = async (req, res) => {
    try {
        const {groupID}=req.params
        const {newMembers}=req.body
        const group= await Group.findById(groupID)
        const groupMembers=group.members
        const newUniqueMembers= newMembers.filter(element=>!groupMembers.includes(element))
        const modifiedGroup= await Group.findOneAndUpdate({_id:groupID},{
            $push:{
                members:newUniqueMembers
            }
        })

        res.status(200).json({newMembers:newUniqueMembers})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}