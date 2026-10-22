import Image from 'next/image';
import React from 'react';
import SingleService from "@/assets/images/single-service.jpg";
import ServG1 from "@/assets/images/serv-g1.jpg";
import ServG2 from "@/assets/images/serv-g2.jpg";
const BrandsSecMain: React.FC = () => {
    return (
        <div className="single-service bg-shade sec-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="service-thumb">
                            <Image
                                src={SingleService}
                                width={1196}
                                height={518}
                                alt="Service"
                                className="img-fluid round"
                            />
                        </div>
                        <h2 className="display-3">
                            International Transport Services
                        </h2>
                        <p>
                            Our Ocean Freight Services offer comprehensive
                            solutions for all your shipping needs, ensuring
                            your cargo is transported efficiently and safely
                            across the seas, giving you peace of mind and
                            the best results for your business.With our
                            Ocean Freight Services, we handle all aspects of
                            your sea shipping needs, documentation to
                            delivery,With our Ocean Freight Services, we
                            handle all aspects of your sea shipping needs.
                        </p>
                        <p>
                            With our Ocean Freight Services, we handle all
                            aspects of your sea shipping needs, from
                            documentation to delivery, ensuring your goods
                            arrive on time and in excellent condition,
                            allowing you to focus on your core business
                            operations.helping you navigate the complexities
                            of international trade.
                        </p>
                        <h3 className="display-3">
                            Why Choose Our Services
                        </h3>
                        <p>
                            Our Ocean Freight Services offer comprehensive
                            solutions for all your shipping needs, ensuring
                            your cargo is transported efficiently and safely
                            across the seas, giving you peace of mind and
                            the best results for your business.With our
                            Ocean Freight Services, we handle all aspects of
                            your sea shipping needs, documentation to
                        </p>
                        <div className="d-sm-flex  list-single">
                            <ul className="ct-list">
                                <li>
                                    Ocean freight offers predictable transit
                                    times and schedules.
                                </li>
                                <li>
                                    It remains one of the most economical
                                    ways to transport.
                                </li>
                                <li>
                                    Despite its scale, modern shipping
                                    companies are increasingly.
                                </li>
                            </ul>
                            <ul className="ct-list">
                                <li>
                                    Sky freight offers predictable transit
                                    times and schedules.
                                </li>
                                <li>
                                    It remains one of the most economical
                                    ways to transport.
                                </li>
                                <li>
                                    We are doing scale, modern shipping
                                    companies are increasingly.
                                </li>
                            </ul>
                        </div>
                        <div className="d-sm-flex gap-5 gallery-single mb-5 pt-2">
                            <Image src={ServG1} width={597} height={339} alt='Image' className="img-fluid round" />
                            <Image src={ServG2} width={597} height={339} alt='Image' className="img-fluid round" />
                        </div>
                        <p>
                            Our Ocean Freight Services offer comprehensive
                            solutions for all your shipping needs, ensuring
                            your cargo is transported efficiently and safely
                            across the seas, giving you peace of mind and
                            the best results for your business.With our
                            Ocean Freight Services, we handle all aspects of
                            your sea shipping needs, documentation to
                            delivery,With our Ocean Freight Services, we
                            handle all aspects of your sea shipping needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandsSecMain;