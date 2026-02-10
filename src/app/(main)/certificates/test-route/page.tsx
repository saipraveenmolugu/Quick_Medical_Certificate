import React from "react";
import { CERTIFICATE_TYPES } from "@/lib/utils";

export function generateStaticParams() {
    return CERTIFICATE_TYPES.map((cert) => ({
        id: cert.id,
    }));
}

export default async function CertificateDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div className="p-20">
            <h1 className="text-4xl font-bold">Certificate ID: {id}</h1>
            <p>If you see this, the route is working.</p>
        </div>
    );
}
