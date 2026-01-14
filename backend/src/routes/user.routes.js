import { Router } from "express";
import { verifyToken, requireAdmin } from "../utils/auth.js";

import {
  getMyProfile,
  getUserProfile,
  getAllUsers,
  getUserMedia,
  updateProfile,
  updatePrivacy,
  updateAvatar
} from "../controllers/user.controller.js";

const router = Router();

// PERFIL DO UTILIZADOR AUTENTICADO
router.get("/me", verifyToken, getMyProfile);

//  PERFIL PÚBLICO
router.get("/:nickName/profile", verifyToken, getUserProfile);

// ADMIN
router.get("/", verifyToken, requireAdmin, getAllUsers);

// MEDIA DE UM USER
router.get("/:nickName/media", verifyToken, getUserMedia);

// UPDATES
router.put("/profile", verifyToken, updateProfile);
router.put("/privacy", verifyToken, updatePrivacy);
router.put("/avatar", verifyToken, updateAvatar);

export default router;
