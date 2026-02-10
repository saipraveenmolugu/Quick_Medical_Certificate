import { z } from 'zod';
import { Gender, GuardianRelationship, OrganizationLocation, DocumentFormat } from '@/types/certificate.types';

// Address Schema
export const addressSchema = z.object({
    street: z.string().min(1, 'Street address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State/Region is required'),
    postalCode: z.string().min(1, 'Postal code is required'),
    country: z.string().min(1, 'Country is required'),
});

// Patient Details Schema (Step 1 - Common for all forms)
export const patientDetailsSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, 'Invalid phone number'),
    otp: z.string().length(6, 'OTP must be 6 digits').optional(),
    guardianRelationship: z.nativeEnum(GuardianRelationship),
    guardianName: z.string().min(1, 'Guardian name is required'),
    email: z.string().email('Invalid email address'),
    gender: z.nativeEnum(Gender),
    address: addressSchema,
    dateOfBirth: z.string().min(1, 'Date of birth is required'),
    organizationName: z.string().min(1, 'Organization name is required'),
    organizationLocation: z.nativeEnum(OrganizationLocation),
});

// Medical Problem Details Schema
export const medicalProblemSchema = z.object({
    problem: z.string().min(1, 'Medical problem is required'),
    customProblem: z.string().optional(),
    duration: z.string().min(1, 'Duration is required'),
    customDuration: z.string().optional(),
    startDate: z.string().min(1, 'Start date is required'),
});

// File validation helper
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];

export const fileSchema = z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, 'File size must be less than 5MB')
    .refine(
        (file) => ACCEPTED_FILE_TYPES.includes(file.type),
        'Only PDF, JPG, and PNG files are accepted'
    );

// Common Certificate Details Schema
export const certificateDetailsSchema = z.object({
    govtIdProof: fileSchema,
    hasSpecialFormat: z.boolean(),
    specialFormatFile: fileSchema.optional(),
    documentFormat: z.nativeEnum(DocumentFormat),
    paymentOption: z.nativeEnum(DocumentFormat),
    termsAccepted: z.literal(true, {
        errorMap: () => ({ message: 'You must accept the terms and conditions' }),
    }),
});

// Sick Leave / WFH / Unfit to Work / Unfit to Travel Schema
export const sickLeaveFormSchema = z.object({
    // Step 1
    ...patientDetailsSchema.shape,
    // Step 2
    ...medicalProblemSchema.shape,
    ...certificateDetailsSchema.shape,
});

export type SickLeaveFormData = z.infer<typeof sickLeaveFormSchema>;
