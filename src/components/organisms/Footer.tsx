import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-950 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Sección 1: Acerca de Nosotros */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida blandit dolor, id mollis arcu.
                        </p>
                    </div>

                    {/* Sección 2: Contacto */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-300">
                            123 Main St, New York, NY<br />
                            info@example.com<br />
                            +1 (123) 456-7890
                        </p>
                    </div>

                    {/* Sección 3: Misión */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
                        <p className="text-gray-300">
                            We empower individuals to achieve their full potential through innovative solutions and opportunities.
                        </p>
                    </div>

                    {/* Sección 4: Redes Sociales */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" className="text-blue-400">
                                Twitter
                            </a>
                            <a href="https://facebook.com" className="text-blue-600">
                                Facebook
                            </a>
                            <a href="https://instagram.com" className="text-pink-500">
                                Instagram
                            </a>
                            <a href="https://linkedin.com" className="text-blue-500">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
