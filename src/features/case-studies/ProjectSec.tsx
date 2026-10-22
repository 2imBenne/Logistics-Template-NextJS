"use client";

import { useEffect, useRef, useState } from "react";
import { projectsData, filterCategories } from "@/data/projectsData";
import TextAnimation from "@/components/elements/TextAnimation";
import Link from "next/link";
import Image from "next/image";

// Dynamically import Isotope only on client side
let Isotope: any = null;

export default function ProjectSec() {
    const isotopeRef = useRef<any>(null);
    const filterKeyRef = useRef<string>("*");
    const [isotopeLoaded, setIsotopeLoaded] = useState(false);

    useEffect(() => {
        // Dynamically import Isotope on client side only
        import("isotope-layout").then((IsotopeModule) => {
            Isotope = IsotopeModule.default;
            setIsotopeLoaded(true);
        });
    }, []);

    useEffect(() => {
        // Initialize Isotope after it's loaded and component mounts
        const initIsotope = () => {
            if (!isotopeLoaded || !Isotope || isotopeRef.current) return;

            const container = document.querySelector("#gallery-container") as HTMLElement;
            if (container) {
                isotopeRef.current = new Isotope(container, {
                    itemSelector: ".grid-item",
                    percentPosition: true,
                    masonry: {
                        columnWidth: ".grid-sizer"
                    }
                });
            }
        };

        // Small delay to ensure DOM is ready
        const timer = setTimeout(initIsotope, 100);

        return () => {
            clearTimeout(timer);
            if (isotopeRef.current) {
                isotopeRef.current.destroy();
                isotopeRef.current = null;
            }
        };
    }, [isotopeLoaded]);

    const handleFilterClick = (e: React.MouseEvent<HTMLAnchorElement>, filter: string) => {
        e.preventDefault();

        if (isotopeRef.current) {
            filterKeyRef.current = filter;
            isotopeRef.current.arrange({ filter });
        }
    };

    return (
        <>
            {/* Promo Section End */}
            <section className="project-sec project-masionary sec-padding">
                <div className="container ct-container">
                    <div className="d-lg-flex align-items-center justify-content-between mb-5 pb-3">
                        <div className="sec-intro2">
                            <span className="sub-title2 fadeInUp single">
                                <TextAnimation>Case Study</TextAnimation>
                            </span>
                            <h2 className="sec-title"><TextAnimation>Explore Our Portfolio</TextAnimation></h2>
                        </div>
                        <div
                            className="portfolio-menu"
                            data-target=".filter-container"
                        >
                            <ul className="nav gap-2">
                                {filterCategories.map((category, index) => (
                                    <li key={category.id} className="nav-item">
                                        <Link href="#"
                                            className={`nav-link ${index === 0 ? 'active' : ''}`}
                                            data-filter={category.filter}
                                            onClick={(e) => {
                                                handleFilterClick(e, category.filter);
                                                // Update active class
                                                document.querySelectorAll('.portfolio-menu .nav-link').forEach(link => {
                                                    link.classList.remove('active');
                                                });
                                                e.currentTarget.classList.add('active');
                                            }}
                                        >
                                            {category.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div
                        className="row gy-4 gallery-grid"
                        id="gallery-container"
                    >
                        <div className="grid-sizer"></div>
                        {projectsData.map((project) => (
                            <div
                                key={project.id}
                                className={`grid-item col-xl-3 col-md-6 ${project.categoryClass}`}
                            >
                                <div className="portfolio-card">
                                    <div className="portfolio-img">
                                        <Link href={project.link}>
                                            <Image src={project.image} width={360} height={480} alt={project.title} />
                                        </Link>
                                    </div>
                                    <div className="portfolio-info">
                                        <span>{project.category}</span>
                                        <h3 className="display-4">
                                            <Link href={project.link}>
                                                {project.title}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Project Section End */}
        </>
    );
}