"use client";


import { teamData } from "@/data/teamData";
import Image from "next/image";
import Link from "next/link";

export default function TeamSec() {
    return (
        <section className="team-sec sec-padding position-relative">
            <div className="container">
                <div className="row gy-5">
                    {teamData.map((member) => (
                        <div key={member.id} className="col-lg-3 col-sm-6">
                            <div className="team-card">
                                <div className="team-thumb round overflow-hidden">
                                    <Link href={member.link}>
                                        <Image
                                            src={member.image}
                                            width={284} height={334}
                                            alt={member.name}
                                            className={member.id === 5 ? "img-fluid" : ""}
                                        />
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
    );
}