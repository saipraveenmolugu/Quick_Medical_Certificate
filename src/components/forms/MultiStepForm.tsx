'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MultiStepFormProps {
    children: React.ReactNode[];
    onSubmit: () => void;
    currentStep: number;
    setCurrentStep: (step: number) => void;
    totalSteps: number;
    canProceed?: boolean;
}

export function MultiStepForm({
    children,
    onSubmit,
    currentStep,
    setCurrentStep,
    totalSteps,
    canProceed = true,
}: MultiStepFormProps) {
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === totalSteps - 1;

    const handleNext = () => {
        if (!isLastStep && canProceed) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (!isFirstStep) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleFinalSubmit = () => {
        if (isLastStep && canProceed) {
            onSubmit();
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                    {Array.from({ length: totalSteps }).map((_, index) => (
                        <React.Fragment key={index}>
                            <div
                                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${index === currentStep
                                    ? 'border-blue-600 bg-blue-600 text-white'
                                    : index < currentStep
                                        ? 'border-green-600 bg-green-600 text-white'
                                        : 'border-gray-300 bg-white text-gray-500'
                                    }`}
                            >
                                {index + 1}
                            </div>
                            {index < totalSteps - 1 && (
                                <div
                                    className={`h-0.5 w-12 transition-colors ${index < currentStep ? 'bg-green-600' : 'bg-gray-300'
                                        }`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <p className="text-center text-sm text-gray-600">
                    Step {currentStep + 1} of {totalSteps}
                </p>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                {children[currentStep]}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={isFirstStep}
                    className="flex items-center gap-2"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                </Button>

                {!isLastStep ? (
                    <Button
                        type="button"
                        onClick={handleNext}
                        disabled={!canProceed}
                        className="flex items-center gap-2"
                    >
                        Next
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                ) : (
                    <Button
                        type="button"
                        onClick={handleFinalSubmit}
                        disabled={!canProceed}
                        className="bg-green-600 hover:bg-green-700"
                    >
                        Pay Now
                    </Button>
                )}
            </div>
        </div>
    );
}
