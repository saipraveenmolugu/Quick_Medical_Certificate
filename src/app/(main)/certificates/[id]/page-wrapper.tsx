import { CERTIFICATE_TYPES } from "@/lib/utils";
import CertificateDetailClient from "./CertificateDetailClient";
import { notFound } from "next/navigation";

// Generate static paths for all certificate types
export function generateStaticParams() {
    return CERTIFICATE_TYPES.map((cert) => ({
        id: cert.id,
    }));
}

export default function CertificateDetailPage({ params }: { params: { id: string } }) {
    const certificate = CERTIFICATE_TYPES.find((c) => c.id === params.id);

    if (!certificate) {
        notFound();
    }

    return <CertificateDetailClient certificate={certificate} />;
}
