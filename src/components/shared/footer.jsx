// Footer.jsx
import React from 'react';

const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-200 text-gray-800 md:py-8 py-5">
            <div className="text-center md:text-base text-sm text-gray-600">
                <p>© {currentYear} <a href="https://khizarwakeel.vercel.app" className='hover:text-slate-900' target='_blank'>
                    Khizar Wakeel
                </a>. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;