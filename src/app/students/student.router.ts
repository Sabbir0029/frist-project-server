import express  from "express";
import { StudentControllers } from "./student.controllers";

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
router.get('/:id', StudentControllers.getSingleStudent);
router.delete('/:id', StudentControllers.deleteStudent);
router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;