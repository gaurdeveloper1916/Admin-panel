'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lenis from 'lenis';
import SectionOne from '@/components/SectionOne';
import SectionTwo from '@/components/SectionTwo';
const CorporatePage = () => {

    return (
        <section className="min-vh-100">
            {/* Section one */}
            <SectionOne />
            {/* Section two */}
            <SectionTwo />
        </section>
    );
};

export default CorporatePage;
