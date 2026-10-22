"use client";

import { teamData } from "@/data/teamData";
import SlideSh1 from "@/assets/images/slide-sh1.png";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";
import Link from "next/link";

export default function TeamSec() {
    // Get only the first 4 team members
    const featuredTeam = teamData.slice(0, 4);

    return (
        <>
            {/* Team Section Start */}
            <section className="team-sec sec-padding position-relative">
                <Image
                    src={SlideSh1}
                    width={292}
                    height={287}
                    alt="icon"
                    className="abs-img d-none d-lg-block top-0 stat-0"
                />
                <div className="container">
                    <div className="sec-intro mx-auto text-center">
                        <span className="sub-title2 fadeInUp">
                            <TextAnimation animationStyle="style1">
                                our Expert Team Members
                            </TextAnimation>
                        </span>
                        <h2 className="sec-title">
                            <TextAnimation animationStyle="style1">
                                Meet our Special Support Team Members!
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row gy-5">
                        {featuredTeam.map((member) => (
                            <div key={member.id} className="col-lg-3 col-sm-6">
                                <div className="team-card">
                                    <div className="team-thumb round overflow-hidden">
                                        <Link href={member.link}>
                                            <Image src={member.image} width={283} height={334} alt={member.name} />
                                        </Link>
                                        <div className="team-share">
                                            <a
                                                className="icon link-icon rounded-circle"
                                                href="#"
                                            >
                                                <i className="fa-solid fa-link"></i>
                                            </a>
                                            <div className="social-share">
                                                {member.socialLinks.map((social, index) => (
                                                    <Link key={index} href={social.url}>
                                                        <i className={social.icon}></i>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3 className="display-4 mb-0">
                                            <Link href={member.link}>
                                                {member.name}
                                            </Link>
                                        </h3>
                                        <span>{member.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Team Section End */}
        </>
    );
}