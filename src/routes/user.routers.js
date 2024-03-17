import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",// i have written Avatar instead of avatar
            maxCount: 6
        },
        {
            name: "coverImage",
            maxCount  :6
        }
    ]),
    registerUser
)

export default router;