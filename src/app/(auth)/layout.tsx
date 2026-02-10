export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Auth pages have no header/footer for a clean, focused experience
    return <>{children}</>;
}
