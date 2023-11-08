import Group from '../models/Group.js'


export const createGroup = async (req, res) => {
    try {
        const { groupName } = req.body
        console.log(req.body)
        const newGroup = new Group({
            groupName
        })

        const savedGroup = await newGroup.save()

        res.status(200).json(savedGroup)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// export const adminLogin = async (req, res) => {
//     try {
//         const { email, password } = req.body

//         const admin = await Group.findOne({ email: email })

//         if (!admin) return res.status(404).json({ msg: "Group does not exist. " })

//         const isMatch = await bcrypt.compare(password, admin.password)
//         if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " })

//         const token = jwt.sign({ id: admin._id }, `${process.env.JWT_SECRET}`)
//         res.status(200).json({ token, userID: admin._id })
//     } catch (err) {
//         res.status(500).json({ error: err.message })
//     }

// }
