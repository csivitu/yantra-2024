'use client'

import React, { ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation'

interface SmoothScrollProps {
    target: string;
    route: string;
    children: ReactNode;
    className?: string; 
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ target, route, children, className }) => {
    const router = useRouter();
    const location = usePathname();

    const smoothScroll = () => {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (location === route) {
            smoothScroll();
        } else {
            router.push(route);
        }
    };

    useEffect(() => {
        if (location === route) {
            smoothScroll();
        }
    }, [location]);

    return (
        <a href={target} onClick={handleClick} className={className}>
            {children}
        </a>
    );
};

export default SmoothScroll;