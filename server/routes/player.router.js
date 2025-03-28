import express from "express";
import{ getAllPlayers , getPlayerDetail , registerPlayer ,handleGetPartiCerti ,handleGeMeritCerti ,handleLogin, handleVerifyPlayer,getPlayersInTournament,getPlayerForCertificates } from "../controllers/player.controller.js"
import { upload } from "../middlewares/multer.middelware.js";

const router = express.Router()

router.route("/all-players").get(getAllPlayers);
router.route("/all-players/:tid").get(getPlayersInTournament);

router.route("/get-players-for-adding-certificate/:tid").get(getPlayerForCertificates)

router.post("/login", handleLogin);

router.get("/verifyPlayer",handleVerifyPlayer)

router.post("/",upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'aadharCardPhoto', maxCount: 1 }]) ,registerPlayer);


router.route("/:pid")
 .get(getPlayerDetail)
 

 // get certificates 
 router.get("/get-participation-certificates/:pid", handleGetPartiCerti);
 router.get("/get-Merit-certificates/:pid", handleGeMeritCerti);
export default router;