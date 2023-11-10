import express from "express"
import { addContacts, createGroup } from '../controllers/group.js'


const router = express.Router()

router.post("/create-group", createGroup)
router.post("/modify-group/:groupID", addContacts)

export default router
