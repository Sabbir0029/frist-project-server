import { TypeOfStudents } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (studentData: TypeOfStudents) => {
  const result = await Student.create(studentData);
  return result;
};
// const getAllStudentsFromDB = async (studentData: TypeOfStudents) => {};
// const getSingleStudentFromDB = async (studentData: TypeOfStudents) => {};
// const deleteStudentFromDB = async (studentData: TypeOfStudents) => {};

export const StudentServices = {
  createStudentIntoDB,
  // getAllStudentsFromDB,
  // getSingleStudentFromDB,
  // deleteStudentFromDB,
};
