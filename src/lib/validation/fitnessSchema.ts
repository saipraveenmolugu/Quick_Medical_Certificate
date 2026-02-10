import { z } from 'zod';
import { patientDetailsSchema, certificateDetailsSchema, fileSchema } from './sickLeaveSchema';

// Vital Signs Schema
export const vitalSignsSchema = z.object({
    height: z.number().min(50, 'Height must be at least 50cm').max(300, 'Height must be less than 300cm'),
    weight: z.number().min(10, 'Weight must be at least 10kg').max(500, 'Weight must be less than 500kg'),
    acceptedVitalsDeclaration: z.literal(true, {
        errorMap: () => ({
            message: 'You must confirm that you will provide Blood Pressure, Pulse proof and walking video',
        }),
    }),
});

// Fitness Certificate Schema
export const fitnessFormSchema = z.object({
    // Step 1
    ...patientDetailsSchema.shape,
    // Step 2 - Vitals
    ...vitalSignsSchema.shape,
    ...certificateDetailsSchema.shape,
});

export type FitnessFormData = z.infer<typeof fitnessFormSchema>;
