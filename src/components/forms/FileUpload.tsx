'use client';

import React, { useState, useRef } from 'react';
import { UseFormRegister, FieldError, FieldValues } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Upload, File, X } from 'lucide-react';

interface FileUploadProps {
    label: string;
    name: string;
    accept?: string;
    register: UseFormRegister<FieldValues>;
    error?: FieldError;
    required?: boolean;
    onChange?: (file: File | null) => void;
    className?: string;
}

export function FileUpload({
    label,
    name,
    accept = '.pdf,.jpg,.jpeg,.png',
    register,
    error,
    required = false,
    onChange,
    className = '',
}: FileUploadProps) {
    const [preview, setPreview] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);

            // Create preview for images
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result as string);
                };
                reader.readAsDataURL(file);
            } else {
                setPreview(null);
            }

            if (onChange) {
                onChange(file);
            }
        }
    };

    const handleClear = () => {
        setPreview(null);
        setFileName(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        if (onChange) {
            onChange(null);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={`space-y-3 ${className}`}>
            <Label className="text-sm font-medium">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </Label>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                    type="file"
                    accept={accept}
                    {...register(name)}
                    onChange={(e) => {
                        handleFileChange(e);
                        register(name).onChange(e);
                    }}
                    ref={(e) => {
                        register(name).ref(e);
                        (fileInputRef as React.MutableRefObject<HTMLInputElement | null>).current = e;
                    }}
                    className="hidden"
                />

                {!fileName ? (
                    <div className="space-y-3">
                        <Upload className="w-12 h-12 mx-auto text-gray-400" />
                        <div>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleClick}
                                className="mx-auto"
                            >
                                Choose File
                            </Button>
                            <p className="text-sm text-gray-500 mt-2">
                                PDF, JPG, or PNG (Max 5MB)
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {preview ? (
                            <img
                                src={preview}
                                alt="Preview"
                                className="max-h-40 mx-auto rounded"
                            />
                        ) : (
                            <File className="w-12 h-12 mx-auto text-blue-500" />
                        )}
                        <div className="flex items-center justify-center gap-2">
                            <p className="text-sm font-medium">{fileName}</p>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={handleClear}
                                className="h-6 w-6 p-0"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {error && <p className="text-sm text-red-600">{error.message}</p>}
        </div>
    );
}
