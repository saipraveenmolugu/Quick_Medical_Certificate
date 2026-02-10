import React from "react";
import { CERTIFICATE_TYPES } from "@/lib/utils";
import CertificateApplyClient from "./CertificateApplyClient";

export function generateStaticParams() {
    return CERTIFICATE_TYPES.map((cert) => ({
        id: cert.id,
    }));
}

export default async function CertificateApplyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <CertificateApplyClient certificateId={id} />;
}
