// src/Components/CookieBanner.jsx
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookies-accepted');
        if (!accepted) setVisible(true);
    }, []);

    const accept = () => {
        localStorage.setItem('cookies-accepted', 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner">
            <p>
                Site-ul nostru folosește cookie-uri tehnice necesare pentru funcționarea corectă.{' '}
                <Link href="/politica-cookies">Politica Cookies</Link>
            </p>
            <div style={{display: 'flex', gap: 20}}>
                <button onClick={accept}>Accept</button>
                <button onClick={accept}>Reject</button>
            </div>
        </div>
    );
}