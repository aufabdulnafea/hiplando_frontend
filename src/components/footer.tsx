'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import Container from '@/components/container';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground">
            <Container>
                <Card className="bg-transparent border-none shadow-none">
                    <CardContent className="p-0 flex flex-col gap-10 py-10">
                        {/* === Top Section === */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Brand / Description */}
                            <div>
                                <h2 className="text-3xl font-extrabold mb-3 tracking-tight">HIPLANDO</h2>
                                <p className="text-sm leading-relaxed text-primary-foreground/90 max-w-sm">
                                    Your premier destination for horse trading, transport services, and equestrian competitions worldwide.
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide">Quick Links</h3>
                                <ul className="flex flex-col gap-2 text-sm">
                                    {[
                                        { label: 'Horse Market', href: '/horses' },
                                        { label: 'Transport', href: '/transport' },
                                        { label: 'Competitions', href: '/competitions' },
                                        { label: 'Services', href: '/services' },
                                    ].map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className="transition-colors hover:text-yellow-300"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Support Links */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide">Support</h3>
                                <ul className="flex flex-col gap-2 text-sm">
                                    {[
                                        { label: 'About Us', href: '/about' },
                                        { label: 'Contact', href: '/contact' },
                                        { label: 'Membership', href: '/membership' },
                                        { label: 'Help Center', href: '/help' },
                                    ].map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className="transition-colors hover:text-yellow-300"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <Separator className="bg-primary-foreground/30" />

                        {/* === Bottom Section === */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                            <p className="text-center md:text-left">
                                © {year} <span className="font-semibold">Hiplando</span>. All rights reserved.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                {/* Language Selector */}
                                <div className="flex items-center gap-2">
                                    <span>Language:</span>
                                    <Select defaultValue="en">
                                        <SelectTrigger className="w-[100px] border-none focus:ring-0 bg-primary text-primary-foreground">
                                            <SelectValue placeholder="EN" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="en">English</SelectItem>
                                            <SelectItem value="ar">العربية</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Social Icons */}
                                <ul className="flex gap-4 items-center text-lg">
                                    <li>
                                        <a
                                            href="https://wa.me/1234567890"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="WhatsApp"
                                            className="hover:text-yellow-300 transition-colors"
                                        >
                                            <FaWhatsapp />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Facebook"
                                            className="hover:text-yellow-300 transition-colors"
                                        >
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                            className="hover:text-yellow-300 transition-colors"
                                        >
                                            <FaInstagram />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </footer>
    );
}
