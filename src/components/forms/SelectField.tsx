'use client';

import React from 'react';
import { UseFormRegister, FieldError, FieldValues } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface SelectFieldProps {
    label: string;
    name: string;
    options: { value: string; label: string }[];
    register: UseFormRegister<FieldValues>;
    error?: FieldError;
    placeholder?: string;
    required?: boolean;
    onChange?: (value: string) => void;
    className?: string;
}

export function SelectField({
    label,
    name,
    options,
    register,
    error,
    placeholder = 'Select an option',
    required = false,
    onChange,
    className = '',
}: SelectFieldProps) {
    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor={name} className="text-sm font-medium">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Select onValueChange={onChange} {...register(name)}>
                <SelectTrigger className={error ? 'border-red-500' : ''}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {error && <p className="text-sm text-red-600">{error.message}</p>}
        </div>
    );
}
