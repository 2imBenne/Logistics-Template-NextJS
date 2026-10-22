"use client";

import { servicesData } from '@/data/servicesData';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesInner() {
    return (
        <div className="services-sec bg-shade sec-padding">
            <div className="container">
                <div className="row gy-4">
                    {servicesData.map((service) => (
                        <div key={service.id} className="col-lg-4">
                            <div className="service-card2 round bg-info fadeInUp" data-delay={service.delay}>
                                <div className={`serv-thumb serviceBg-${service.id}`}>
                                    <span className="icon round-2">
                                        <Image src={service.icon} width={60} height={60} alt={service.title} />
                                    </span>
                                </div>
                                <h3 className="display-4">
                                    <Link href={service.link}>{service.title}</Link>
                                </h3>
                                <p>{service.description}</p>
                                <div className="service-footer border-top">
                                    <Link href={service.link} className="custom-btn">
                                        <span className="icon rounded-3">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}