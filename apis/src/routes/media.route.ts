import {
    getAllMediaController,
    getMediaByMediaIsVideoController
} from "../controllers/media.controller";
import {getAllMedia} from "../../utils/media/getAllMedia";
import {Router} from "express";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {check} from "express-validator";

const {checkschema} = require ("express-validator")
export const mediaRoute = Router()


mediaRoute.route('/').get(getAllMedia)
.get(getAllMediaController)

mediaRoute.route('/:mediaId')
    .get(asyncValidatorController([check("mediaId", 'Please provide a valid UUID').isUUID()]), getMediaByMediaIsVideoController)
mediaRoute.route("/mediaIsVideo/:mediaIsVideo")
.get(asyncValidatorController(
    [check("mediaId", "Please check media id")
    .isInt()


    ]
))