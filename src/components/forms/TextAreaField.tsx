'use client';

import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface TextAreaFieldProps {
    label: string;
    name: string;
    register: UseFormRegister<any>;
    error?: FieldError;
    placeholder?: string;
    required?: boolean;
    rows?: number;
    className?: string;
}

export function TextAreaField({
    label,
    name,
    register,
    error,
    placeholder,
    required = false,
    rows = 4,
    className = '',
}: TextAreaFieldProps) {
    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor={name} className="text-sm font-medium">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Textarea
                id={name}
                rows={rows}
                placeholder={placeholder}
                {...register(name)}
                className={error ? 'border-red-500 focus:ring-red-500' : ''}
            />
            {error && <p className="text-sm text-red-600">{error.message}</p>}
        </div>
    );
}
