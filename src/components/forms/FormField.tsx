'use client';

import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface FormFieldProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'tel' | 'number' | 'date';
    register: UseFormRegister<any>;
    error?: FieldError;
    placeholder?: string;
    required?: boolean;
    className?: string;
}

export function FormField({
    label,
    name,
    type = 'text',
    register,
    error,
    placeholder,
    required = false,
    className = '',
}: FormFieldProps) {
    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor={name} className="text-sm font-medium">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Input
                id={name}
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className={error ? 'border-red-500 focus:ring-red-500' : ''}
            />
            {error && <p className="text-sm text-red-600">{error.message}</p>}
        </div>
    );
}
