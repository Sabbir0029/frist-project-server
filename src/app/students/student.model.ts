import { model, Schema } from "mongoose";
import { TypeOfGuardian, TypeOfStudents } from "./student.interface";
import bcrypt from "bcrypt";
import config from "../config";

const guardianSchema = new Schema<TypeOfGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, "Father Name is required"],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, "Father occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father Contact No is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother Name is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother Contact No is required"],
  },
});

const studentSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength: [20, "Password must be 20 characters"],
    trim: true,
  },
  name: {
    type: String,
    requried: [true, "Name is required"],
    trim: true,
    maxlength: [30, "Password must be 20 characters"],
  },
  department: {
    type: String,
    required: [true, "department is reuired"],
    enum: {
      values: ["CSE", "EEE", "TEX"],
      message: "{VALUE} is not a valid department",
    },
  },
  section: {
    type: String,
    enum: {
      values: ["A", "B", "C", "D"],
      message: "{VALUE} is not a valid section",
    },
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message: "{VALUE} is not a valid gender",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
  },
  bloogGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} is not a valid blood group",
    },
  },
  presentAddress: {
    type: String,
    required: [true, "Present Address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent Address is required"],
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ["active", "blocked"],
      message: "{VALUE} is not a valid status",
    },
    default: "active",
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// pre save
studentSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_saltRounds)
  );
  next();
});

// post save
studentSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

export const Student = model<TypeOfStudents>("Student", studentSchema);
