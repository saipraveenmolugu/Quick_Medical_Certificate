import { z } from 'zod';
import { patientDetailsSchema, certificateDetailsSchema, fileSchema } from './sickLeaveSchema';
import { DOCTOR_CONSULTATION_FEE } from '@/constants/pricing';

// Doctor Consultation Schema (single step)
export const consultationFormSchema = z.object({
    ...patientDetailsSchema.shape,
    govtIdProof: fileSchema,
    termsAccepted: z.literal(true, {
        errorMap: () => ({ message: 'You must accept the terms and conditions' }),
    }),
});

export type ConsultationFormData = z.infer<typeof consultationFormSchema>;

// Consultation has fixed pricing
export const CONSULTATION_AMOUNT = DOCTOR_CONSULTATION_FEE;
