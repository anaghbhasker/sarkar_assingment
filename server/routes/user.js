import  express  from "express";
import { userAdd, userLists } from "../controllers/userController.js";
const router=express.Router();

router.post('/addUser',userAdd)
router.get('/userList',userLists)





export default router 