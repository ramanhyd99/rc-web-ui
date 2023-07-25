import { Router, Request, Response, NextFunction } from "express";
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const assignmentController = require("../controllers/assignmentController");
const settingsController = require("../controllers/settingsController");
const slotsController = require("../controllers/slotsController");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = Router();

router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.json({ status: "Healthy!" });
});

router.post("/login/google", authController.loginWithGoogle);
router.post("/logout", authController.logout);

router.get("/users/userProfile", userController.fetchUserProfile);
router.get("/users", userController.fetchUsers);
router.post("/users/updateFreeFollowUp", userController.updateFreeFollowUp);

router.post(
  "/assignments/upload",
  upload.single("files"),
  assignmentController.uploadAssignments
);
router.get("/assignments/", assignmentController.getAssignmentsForUserId);
router.delete("/assignments/", assignmentController.deleteAssignmentsForAssignmentId);

router.patch("/settings/updateDayTypes", settingsController.updateDayTypes);
router.get("/settings/getDayTypes", settingsController.getDayTypes);

router.get("/slots/", slotsController.getSlotsForDate);
router.post("/slots/processSlot", slotsController.lockSlotForDate); 
router.post("/slots/create/", slotsController.generateSlotsForDate); 
router.delete("/slots/", slotsController.deleteSlotBySlotId); 

export default router;
