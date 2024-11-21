import { TypeOfStudents } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (studentData: TypeOfStudents) => {
  const result = await Student.create(studentData);
  return result;
};
const getAllStudentsFromDB = async () => {
  const result = await Student.find({});
  return result;
};
const getSingleStudentFromDB = async (id: String) => {
  const result = await Student.aggregate([{ $match: { id } }]);
  return result;
};
const deleteStudentFromDB = async (id: String) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
