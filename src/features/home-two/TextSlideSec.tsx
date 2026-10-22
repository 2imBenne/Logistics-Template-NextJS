"use client";

import Star1 from "@/assets/images/star-1.png";
import MarqueeSlider from "@/components/elements/MarqueeSlider";
import Image from "next/image";

export default function TextSlideSec() {
    return (
        <>
            <section className="text-slide-sec sec-padding text-slide-sec3 overflow-hidden">
                <div className="marque-active">
                    <div className="text-slide-wrap">
                        <MarqueeSlider
                            mode="1"
                            className="text-slide-wrap"
                        >
                            <div className="text-item">
                                <Image src={Star1} style={{width: "auto" , height:"auto"}} alt="logo" />
                                <h3 className="display-1">Transport</h3>
                            </div>
                            <div className="text-item">
                                <Image src={Star1} style={{width: "auto" , height:"auto"}} alt="logo" />
                                <h3 className="display-1">Logistic</h3>
                            </div>
                            <div className="text-item">
                                <Image src={Star1} style={{width: "auto" , height:"auto"}} alt="logo" />
                                <h3 className="display-1">Global Export</h3>
                            </div>
                            <div className="text-item">
                                <Image src={Star1} style={{width: "auto" , height:"auto"}} alt="logo" />
                                <h3 className="display-1">Transport</h3>
                            </div>
                            <div className="text-item">
                                <Image src={Star1} style={{width: "auto" , height:"auto"}} alt="logo" />
                                <h3 className="display-1">Global Import</h3>
                            </div>
                        </MarqueeSlider>
                    </div>
                </div>
            </section>
        </>
    );
}
