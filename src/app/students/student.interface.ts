export type TypeOfGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TypeOfStudents = {
  id: string;
  password:string;
  name: string;
  department: string;
  section: string;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  bloogGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TypeOfGuardian;
  profileImg?: string;
  isActive: "active" | "blocked";
  isDeleted: boolean;
};
