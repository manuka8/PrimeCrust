import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                P
                            </div>
                            <span className="text-2xl font-bold tracking-tight">PrimeCrust</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Serving the most authentic and premium pizzas in Sri Lanka.
                            Our fusion of Italian craft with island spices brings you a taste like no other.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Explore</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Menu</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Special Offers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Experience</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex justify-between">
                                <span>Mon - Thu</span>
                                <span className="text-white">10 AM - 10 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Fri - Sat</span>
                                <span className="text-white">10 AM - 12 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-white">11 AM - 10 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>123 Pizza Lane, Colombo 03,<br />Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>hello@primecrust.lk</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs text-center md:text-left">
                    <p>© 2026 PrimeCrust Pizzeria Sri Lanka. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
