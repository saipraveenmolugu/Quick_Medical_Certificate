// Certificate Types and Related Interfaces

export enum CertificateType {
    SICK_LEAVE = 'sick-leave',
    FITNESS = 'fitness',
    WORK_FROM_HOME = 'work-from-home',
    UNFIT_TO_TRAVEL = 'unfit-to-travel',
    UNFIT_TO_WORK = 'unfit-to-work',
    MEDICAL_DIAGNOSIS = 'medical-diagnosis',
    CARETAKER = 'caretaker',
    RECOVERY = 'recovery',
    FIT_TO_FLY = 'fit-to-fly',
}

export enum DocumentFormat {
    DIGITAL_NO_PRESCRIPTION = 'digital-no-prescription',
    DIGITAL_WITH_PRESCRIPTION = 'digital-with-prescription',
    DIGITAL_EXPRESS = 'digital-express',
    HANDWRITTEN_NO_PRESCRIPTION = 'handwritten-no-prescription',
    HANDWRITTEN_WITH_PRESCRIPTION = 'handwritten-with-prescription',
    HANDWRITTEN_NO_PRESCRIPTION_SHIPPING = 'handwritten-no-prescription-shipping',
    HANDWRITTEN_WITH_PRESCRIPTION_SHIPPING = 'handwritten-with-prescription-shipping',
}

export enum OrganizationLocation {
    INDIA = 'india',
    OUTSIDE_INDIA = 'outside-india',
}

export enum Gender {
    FEMALE = 'female',
    MALE = 'male',
    OTHER = 'other',
}

export enum GuardianRelationship {
    FATHER = 'father',
    HUSBAND = 'husband',
    MOTHER = 'mother',
    WIFE = 'wife',
    SON = 'son',
    DAUGHTER = 'daughter',
    OTHER = 'other',
}

export enum CaretakerRelationship {
    PARENT = 'parent',
    WIFE = 'wife',
    HUSBAND = 'husband',
    OTHER = 'other',
}

export interface PaymentOption {
    id: DocumentFormat;
    name: string;
    price: number;
    currency: string;
    isRefundable: boolean;
    convenienceFee?: number;
    description?: string;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export interface PatientDetails {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    gender: Gender;
    dateOfBirth: string;
    guardianRelationship: GuardianRelationship;
    guardianName: string;
    address: Address;
    organizationName: string;
    organizationLocation: OrganizationLocation;
}

export interface MedicalProblemDetails {
    problem: string;
    customProblem?: string;
    duration: string;
    customDuration?: string;
    startDate: string;
}

export interface VitalSigns {
    height?: number; // in cm
    weight?: number; // in kg
    acceptedVitalsDeclaration?: boolean;
}

export interface CaretakerDetails {
    firstName: string;
    lastName: string;
    age: number;
    relationship: CaretakerRelationship;
    address: Address;
    govtIdProof: File | null;
}

export interface FormSubmission {
    certificateType: CertificateType;
    patientDetails: PatientDetails;
    medicalDetails?: MedicalProblemDetails;
    vitalSigns?: VitalSigns;
    caretakerDetails?: CaretakerDetails;
    govtIdProof: File | null;
    hasSpecialFormat: boolean;
    specialFormatFile?: File | null;
    documentFormat: DocumentFormat;
    paymentOption: DocumentFormat;
    totalAmount: number;
    termsAccepted: boolean;
    submittedAt: string;
}
