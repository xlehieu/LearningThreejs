import Link from 'next/link';

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header>
                <nav className="bg-white shadow flex gap-4 p-3">
                    <Link href="/" className="hover:text-blue-600 font-medium">
                        Home
                    </Link>
                    <Link href="/Gsap" className="hover:text-blue-600 font-medium">
                        Gsap Stagger
                    </Link>
                    <Link href="/contact" className="hover:text-blue-600 font-medium">
                        Contact
                    </Link>
                    <Link href="/Gsap/Practice" className="hover:text-blue-600 font-medium">
                        Practice
                    </Link>
                </nav>
            </header>
            <main className="container mx-auto">{children}</main>
        </>
    );
}
