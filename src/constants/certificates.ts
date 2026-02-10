import { CertificateType } from '@/types/certificate.types';

export interface CertificateInfo {
    type: CertificateType;
    title: string;
    shortDescription: string;
    fullDescription: string;
    path: string;
    category: 'leave' | 'fitness' | 'medical';
}

export const CERTIFICATES: CertificateInfo[] = [
    {
        type: CertificateType.SICK_LEAVE,
        title: 'Sick Leave Certificate',
        shortDescription: 'Official medical confirmation for sick leave from work, school, or college',
        fullDescription: 'When health issues prevent you from attending work, school, or college, a Sick Leave Medical Certificate provides official medical confirmation of your condition. You can consult a certified doctor online and receive the required certificate without the need to visit a clinic.',
        path: '/certificates/sick-leave',
        category: 'leave',
    },
    {
        type: CertificateType.FITNESS,
        title: 'Fitness Certificate',
        shortDescription: 'Medical fitness confirmation for employment, academics, sports, or travel',
        fullDescription: 'A Medical Fitness Certificate is often required before starting a job, academic program, sports activity, or travel plan. Through an online consultation, our doctors review your health details and issue a fitness certificate where appropriate.',
        path: '/certificates/fitness',
        category: 'fitness',
    },
    {
        type: CertificateType.WORK_FROM_HOME,
        title: 'Work From Home Certificate',
        shortDescription: 'Medical recommendation for remote working arrangements',
        fullDescription: 'Certain medical conditions may allow you to work but make office attendance difficult. A Work from Home Medical Certificate supports remote working arrangements based on medical advice.',
        path: '/certificates/work-from-home',
        category: 'leave',
    },
    {
        type: CertificateType.UNFIT_TO_TRAVEL,
        title: 'Unfit To Travel Certificate',
        shortDescription: 'Medical documentation that travel should be avoided',
        fullDescription: 'Medical conditions or recovery phases may make travel unsafe or inadvisable. An Unfit To Travel Medical Certificate formally states that travel should be avoided for a defined duration.',
        path: '/certificates/unfit-to-travel',
        category: 'fitness',
    },
    {
        type: CertificateType.UNFIT_TO_WORK,
        title: 'Unfit To Work Certificate',
        shortDescription: 'Documentation of inability to perform work duties due to medical reasons',
        fullDescription: 'When illness or injury affects your ability to perform work duties safely, an Unfit To Work Medical Certificate provides clear medical documentation of your condition.',
        path: '/certificates/unfit-to-work',
        category: 'fitness',
    },
    {
        type: CertificateType.MEDICAL_DIAGNOSIS,
        title: 'Medical Diagnosis Certificate',
        shortDescription: 'Official documentation of diagnosed medical condition',
        fullDescription: 'A Medical Diagnosis Certificate serves as official documentation of a diagnosed medical condition following professional medical assessment. It is commonly required for insurance purposes, academic submissions, workplace records, or administrative and legal documentation.',
        path: '/certificates/medical-diagnosis',
        category: 'medical',
    },
    {
        type: CertificateType.CARETAKER,
        title: 'Caretaker Certificate',
        shortDescription: 'Documentation for caregiving responsibilities during family member recovery',
        fullDescription: 'When a family member requires medical care, a Caretaker Medical Certificate confirms the need for your presence as a caregiver during their recovery.',
        path: '/certificates/caretaker',
        category: 'leave',
    },
    {
        type: CertificateType.RECOVERY,
        title: 'Recovery Certificate',
        shortDescription: 'Confirmation of recovery and fitness to resume activities',
        fullDescription: 'A Recovery Medical Certificate confirms that an individual has recovered from a medical condition and is fit to resume regular activities such as work, studies, or travel.',
        path: '/certificates/recovery',
        category: 'leave',
    },
    {
        type: CertificateType.FIT_TO_FLY,
        title: 'Fit-to-Fly Certificate',
        shortDescription: 'Medical clearance confirming safety to travel by air',
        fullDescription: 'A Fit-to-Fly Medical Certificate confirms that an individual is medically safe to travel by air. Doctors assess your current health condition to ensure that flying will not pose any risk to you or others during the journey.',
        path: '/certificates/fit-to-fly',
        category: 'fitness',
    },
];

// Medical Problem Options
export const MEDICAL_PROBLEMS = [
    'Fever',
    'Cold',
    'Headache',
    'Body Pain',
    'Viral Fever',
    'Stomach Pain',
    'Migraine',
    'Back Pain',
    'Cough',
    'Sore Throat',
    'Other',
];

// Leave Duration Options
export const LEAVE_DURATIONS = [
    '1 day',
    '2 days',
    '3 days',
    '4 days',
    '5 days',
    '6 days',
    '1 week',
    '2 weeks',
    'Other',
];

// Helper function to get certificate by type
export const getCertificateByType = (type: CertificateType): CertificateInfo | undefined => {
    return CERTIFICATES.find(cert => cert.type === type);
};

// Helper function to get certificates by category
export const getCertificatesByCategory = (category: 'leave' | 'fitness' | 'medical'): CertificateInfo[] => {
    return CERTIFICATES.filter(cert => cert.category === category);
};
