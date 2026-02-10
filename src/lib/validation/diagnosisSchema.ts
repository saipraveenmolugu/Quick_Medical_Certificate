import { z } from 'zod';
import { patientDetailsSchema, certificateDetailsSchema } from './sickLeaveSchema';

// Medical Diagnosis Schema (simplified - no medical problem details)
export const diagnosisFormSchema = z.object({
    // Step 1
    ...patientDetailsSchema.shape,
    // Step 2
    startDate: z.string().min(1, 'Certificate start date is required'),
    ...certificateDetailsSchema.shape,
});

export type DiagnosisFormData = z.infer<typeof diagnosisFormSchema>;
