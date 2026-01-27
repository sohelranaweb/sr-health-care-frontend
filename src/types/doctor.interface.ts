import { IDoctorSchedule } from "./schedule.interface";

export interface IDoctorExperiences {
  id?: string;
  instituteName: string;
  designation: string;
  department: string;
  startDate: string;
  endDate: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IDoctor {
  id?: string;
  name: string;
  email: string;
  password: string;
  contactNumber: string;
  address?: string;
  about: string;
  registrationNumber: string;
  gender: "MALE" | "FEMALE";
  appointmentFee: number;
  followUpFee?: number;
  qualification: string;
  currentWorkingPlace: string;
  specialties?: string[];
  profilePhoto?: File | string;
  removeSpecialties?: string[];
  isDeleted?: boolean;
  averageRating?: number;
  createdAt?: string;
  updatedAt?: string;
  doctorSpecialties?: Array<{
    specialitiesId: string;
    specialities?: {
      id: string;
      title: string;
      icon?: string;
    };
  }>;

  doctorSchedules?: IDoctorSchedule[];
  doctorExperiences?: IDoctorExperiences[];
}
