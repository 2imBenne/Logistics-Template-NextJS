"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { faqData } from "@/data/faqData";
import RedContainer from "@/assets/images/red-container.png";
import TextAnimation from "@/components/elements/TextAnimation";

import Swal from "sweetalert2";
import Image from "next/image";


export default function FaqSec() {
    // State to track which accordion item is open
    const [openItem, setOpenItem] = useState<number>(1);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Extract form values
        const Name = formData.get("name") as string;
        const Email = formData.get("email") as string;
        const Phone = formData.get("phone") as string;
        const Unit = formData.get("unit") as string;

        // Validate all fields are filled
        if (Name && Email && Phone && Unit) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your appointment request sent successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        }
    };

    // Toggle accordion item
    const toggleAccordion = (id: number) => {
        setOpenItem(openItem === id ? 0 : id);
    };

    return (
        <>
            {/* FAQ Section Start */}
            <section className="faq-sec overflow-hidden sec-padding position-relative">
                <Image
                    src={RedContainer}
                    width={188} height={202}
                    alt="container"
                    className="anim-img right-top moveXS"
                />
                <div className="container">
                    <div className="sec-intro mx-auto text-center">
                        <span className="sub-title2 fadeInUp">
                            <TextAnimation animationStyle="style1">
                                Đội ngũ của chúng tôi
                            </TextAnimation>
                        </span>
                        <h2 className="sec-title">
                            <TextAnimation animationStyle="style1">
                                Thông tin cần thiết để báo giá
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-7">
                            <div
                                className="faq-accordion rounded-4"
                                id="tv-accordion"
                            >
                                {faqData.map((faq) => (
                                    <div
                                        key={faq.id}
                                        className={`accordion-item ${openItem === faq.id ? 'active' : ''}`}
                                    >
                                        <h2
                                            className="accordion-header"
                                            id={`heading${faq.id}`}
                                        >
                                            <button
                                                className={`accordion-button display-5 ${openItem === faq.id ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => toggleAccordion(faq.id)}
                                                aria-expanded={openItem === faq.id}
                                                aria-controls={`collapse${faq.id}`}
                                            >
                                                {faq.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${faq.id}`}
                                            className={`accordion-collapse collapse ${openItem === faq.id ? 'show' : ''}`}
                                            aria-labelledby={`heading${faq.id}`}
                                        >
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.5,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.5 }}
                                                className="accordion-body">
                                                <p>{faq.answer}</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-form rounded-4 position-relative">
                                <h3 className="display-4">
                                    Đặt lịch hẹn
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                        />
                                        <i className="fa-regular fa-user"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your email"
                                            required
                                        />
                                        <i className="fa-regular fa-envelope"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Phone Number"
                                            required
                                        />
                                        <i className="fa-regular fa-headphones"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="date"
                                            name="date"
                                            placeholder="Date"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="unit"
                                            placeholder="Total Unit"
                                            required
                                        />
                                        <i className="fa-regular fa-clipboard"></i>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg w-100 mt-2">
                                        Đặt lịch hẹn
                                        <i className="fa fa-arrow-right"></i>
                                        <span></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section End */}
        </>
    );
}