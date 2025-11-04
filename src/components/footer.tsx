"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Container from "@/components/container"

export default function Footer() {
    return (
        <footer className="bg-primary">
            <Container>
                <Card className="bg-transparent border-none shadow-none text-primary-foreground">
                    <CardContent className="p-0 flex flex-col gap-10">
                        {/* Top Section */}
                        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                            <div className="flex-2">
                                <h2 className="text-2xl font-bold mb-3">HIPLANDO</h2>
                                <p>
                                    Your premier destination for horse trading, transport services, and equestrian competitions.
                                </p>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                                <ul className="flex flex-col gap-1">
                                    <li className="transition-colors">Horse Market</li>
                                    <li className="transition-colors">Transport</li>
                                    <li className="transition-colors">Competitions</li>
                                    <li className="transition-colors">Services</li>
                                </ul>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-3">Support</h3>
                                <ul className="flex flex-col gap-1">
                                    <li className="transition-colors">About Us</li>
                                    <li className="transition-colors">Contact</li>
                                    <li className="transition-colors">Membership</li>
                                    <li className="transition-colors">Services</li>
                                </ul>
                            </div>
                        </div>

                        <Separator />

                        {/* Bottom Section */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm">© 2025 Hiplando. All rights reserved.</p>

                            <div className="flex flex-col md:flex-row items-center gap-4">
                                {/* Language Selector */}
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">Language:</span>
                                    <Select defaultValue="en">
                                        <SelectTrigger className="w-[100px] border-none">
                                            <SelectValue placeholder="EN" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="en">EN</SelectItem>
                                            <SelectItem value="ar">AR</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Social Icons */}
                                <ul className="flex gap-3 items-center">
                                    <li className="cursor-pointer">
                                        WhatsApp
                                    </li>
                                    <li className="cursor-pointer">
                                        Facebook
                                    </li>
                                    <li className="cursor-pointer">
                                        Instagram
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </footer>
    )
}
