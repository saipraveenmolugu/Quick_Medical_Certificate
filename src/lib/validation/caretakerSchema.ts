import { z } from 'zod';
import { CaretakerRelationship } from '@/types/certificate.types';
import {
    patientDetailsSchema,
    medicalProblemSchema,
    certificateDetailsSchema,
    fileSchema,
    addressSchema,
} from './sickLeaveSchema';

// Caretaker Details Schema
export const caretakerDetailsSchema = z.object({
    firstName: z.string().min(1, 'Caretaker first name is required'),
    lastName: z.string().min(1, 'Caretaker last name is required'),
    age: z.number().min(18, 'Caretaker must be at least 18 years old'),
    relationship: z.nativeEnum(CaretakerRelationship),
    address: addressSchema,
    govtIdProof: fileSchema,
});

// Caretaker Certificate Schema
export const caretakerFormSchema = z.object({
    // Step 1
    ...patientDetailsSchema.shape,
    // Step 2
    ...medicalProblemSchema.shape,
    ...caretakerDetailsSchema.shape,
    ...certificateDetailsSchema.shape,
});

export type CaretakerFormData = z.infer<typeof caretakerFormSchema>;
