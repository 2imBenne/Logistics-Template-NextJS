"use client";
import Container from '@/assets/images/container.png';
import AboutM2 from '@/assets/images/about-m2.png';
import Af1 from '@/assets/images/af-1.png';
import Af2 from '@/assets/images/af-2.png';
import AboutM from '@/assets/images/about-m.jpg';
import CounterUp from '@/components/elements/CounterUp';
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSec2() {
   return (
      <>
         {/* About Section Start */}
         <section className="about-sec2 overflow-hidden">
            <Image src={Container} width={189} height={185} alt="container" loading="eager" className="position-absolute top-0" />
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xl-6 col-sm-8 ms-sm-auto">
                     <FadeInAdvanced variant='fadeInLeft'>
                        <div className="about-media-box position-relative">
                           <div className="ab-main-img">
                              <Image src={AboutM} width={557} height={582} className="img-fluid" loading="eager" alt='Image' />
                              <div className="experien-stat">
                                 <p className="text-info m-0"> <span><CounterUp ending={25} /></span>+ Years
                                    Experience</p>
                              </div>
                              <div className="about-sm">
                                 <Image className="img-fluid" src={AboutM2} width={350} height={350} loading="eager" alt='Image'/>
                              </div>
                           </div>
                        </div>
                     </FadeInAdvanced>
                  </div>
                  <div className="col-xl-6 ps-xl-4">
                     <div className="about-content">
                        <span className="sub-title2 fadeInUp single">
                           <TextAnimation animationStyle="style1">
                              About Our Company
                           </TextAnimation>
                        </span>
                        <h2 className="sec-title">
                           <TextAnimation animationStyle="style1">
                              Why Businesses Trust Our Logistics Solutions
                           </TextAnimation>
                        </h2>
                        <p className="lead">With over four decades of experience providing solutions to large-scale enterprises
                           throughout the globe, we offer end-to-end logistics tailored for specific markets.</p>
                        <ul className="check">
                           <li>Fast & Reliable Delivery</li>
                           <li>End-to-End Solutions</li>
                           <li>Smart Technology</li>
                           <li>Competitive Pricing</li>
                        </ul>
                        <div className="d-sm-flex align-items-center about-cta gap-5">
                           <Link href="/about" className="btn btn-primary">About More <i className="fa fa-arrow-right"></i><span
                              style={{ top: '267.45px', left: '119.6px' }}></span> </Link>

                           <div className="quick-call d-flex align-items-center">
                              <span className="bg-dark icon-lg rounded-circle text-info"><i
                                 className="fa-solid fa-phone-volume"></i></span>
                              <div className="conn-txt ms-3">
                                 <p className="m-0">Call Us Any Time:</p>
                                 <a className="h6 text-primary" href="tel:148359505285">148 359 505 285</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="about-footer d-sm-flex align-items-center gap-5 bg-shade round mt-5">
                        <div className="af-item d-flex align-items-start gap-4">
                           <Image src={Af1} width={48} height={48} alt="transform" />
                           <div className="af-info">
                              <h3 className="h5">Global logistics </h3>
                              <p>The is a long established fact that a reader.</p>
                           </div>
                        </div>
                        <div className="af-item d-flex align-items-start gap-4">
                           <Image src={Af2} width={48} height={48} alt="transform" />
                           <div className="af-info">
                              <h3 className="h5">Online Tracing</h3>
                              <p>The is a long established fact that a reader.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* About Section End */}
      </>

   );
}
