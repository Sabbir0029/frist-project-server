import { Request, Response } from "express";
import { StudentServices } from "./student.services";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: "Student is created succesfully",
      data: result,
    });
  } catch (err : any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};
// const getAllStudents = (req: Request, res: Response) => {};
// const getSingleStudent = (req: Request, res: Response) => {};
// const deleteStudent = (req: Request, res: Response) => {};

export const StudentControllers = {
  createStudent,
  // getAllStudents,
  // getSingleStudent,
  // deleteStudent,
};
