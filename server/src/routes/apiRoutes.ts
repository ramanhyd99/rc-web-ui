import { Router, Request, Response, NextFunction } from "express";
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const assignmentController = require("../controllers/assignmentController");
const notesController = require("../controllers/notesController");
const settingsController = require("../controllers/settingsController");
const slotsController = require("../controllers/slotsController");
const dashboardController = require("../controllers/dashboardController");
const reviewController = require("../controllers/reviewController");
const bookingController = require("../controllers/bookingController");

const multer = require("multer");
const upload = multer();

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
router.delete(
  "/assignments/",
  assignmentController.deleteAssignmentsForAssignmentId
);

router.patch("/settings/updateDayTypes", settingsController.updateDayTypes);
router.get("/settings/getDayTypes", settingsController.getDayTypes);

router.get("/slots/", slotsController.getSlotsForDate);
router.post("/slots/processSlot", slotsController.lockSlotForDate);
router.post("/slots/create/", slotsController.generateSlotsForDate);
router.delete("/slots/", slotsController.deleteSlotBySlotId);

router.get("/dashboard/", dashboardController.fetchMetrics);

router.post("/reviews/upload", upload.none(), reviewController.uploadReview);
router.get("/reviews/", reviewController.getReviews);

router.post("/bookings/", upload.none(), bookingController.bookSession);
router.get("/bookings/", bookingController.getBookingsForUser);
router.get("/bookings/admin/", bookingController.getBookingsByDate);
router.post("/bookings/cancel/", bookingController.cancelBooking);

router.get("/notes/", notesController.getNotesForUserId);
router.delete("/notes/", notesController.deleteNoteByNoteId);
router.post("/notes/", notesController.createNote);
router.patch("/notes/", notesController.updateNote);

export default router;
