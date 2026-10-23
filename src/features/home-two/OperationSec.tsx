
"use client";

import { useState } from 'react';
import TabIcon from "@/assets/images/tab-icon.png";
import TabMain1 from "@/assets/images/tab-main1.jpg";
import TabMain2 from "@/assets/images/tab-main2.jpg";
import TabMain3 from "@/assets/images/tab-main3.jpg"; 
import TextAnimation from "@/components/elements/TextAnimation"
import Link from 'next/link';
import Image from 'next/image';
export default function OperationSec() {
    const [activeTab, setActiveTab] = useState('air');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <>
            {/* Operation Section Start */}
            <section className="operation-sec bg-dark position-relative sec-padding">
                <div className="operate-bg jarallax bg-cover position-absolute bgImage"
                    data-speed="0.8" ></div>

                <div className="container ct-container">
                    <div className="row">
                        <div className="col-lg-7 pe-lg-5">
                            <span className="sub-title2 fadeInUp single">
                                <TextAnimation animationStyle="style1">
                                    Thành tựu
                                </TextAnimation>
                            </span>
                            <h2 className="sec-title text-info">
                                <TextAnimation animationStyle="style1">
                                    Chúng tôi đã giúp khách hàng tối ưu hóa mọi
                                    hoạt động hậu cần.
                                </TextAnimation>
                            </h2>

                            <div
                                className="ct-tab nav flex-column nav-pills me-3"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <button
                                    className={`nav-link d-flex align-items-center justify-content-between ${activeTab === 'air' ? 'active' : ''}`}
                                    id="air-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="air"
                                    aria-selected={activeTab === 'air'}
                                    onClick={() => handleTabChange('air')}
                                >
                                    <span className="th-info text-start">
                                        <span className="h4 d-block">
                                            Giải pháp vận tải hàng không
                                        </span>
                                        <span className="p d-block">
                                            Dịch vụ vận chuyển hàng hóa của chúng tôi đảm bảo chi phí giảm thiểu thông qua logistics hiệu quả và hoạt động tinh gọn.
                                        </span>
                                    </span>
                                    <span className="icon-lg rounded-circle">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </button>

                                <button
                                    className={`nav-link d-flex align-items-center justify-content-between ${activeTab === 'byroad' ? 'active' : ''}`}
                                    id="byroad-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="byroad"
                                    aria-selected={activeTab === 'byroad'}
                                    onClick={() => handleTabChange('byroad')}
                                >
                                    <span className="th-info text-start">
                                        <span className="h4 d-block">
                                            Quản lý tồn kho nhà kho
                                        </span>
                                        <span className="p d-block">
                                            Dịch vụ vận chuyển hàng hóa của chúng tôi đảm bảo chi phí giảm thiểu thông qua logistics hiệu quả và hoạt động tinh gọn.
                                        </span>
                                    </span>
                                    <span className="icon-lg rounded-circle">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </button>

                                <button
                                    className={`nav-link d-flex align-items-center justify-content-between ${activeTab === 'road' ? 'active' : ''}`}
                                    id="road-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="road"
                                    aria-selected={activeTab === 'road'}
                                    onClick={() => handleTabChange('road')}
                                >
                                    <span className="th-info text-start">
                                        <span className="h4 d-block">
                                            Giải pháp vận tải đường bộ ngay lập tức
                                        </span>
                                        <span className="p d-block">
                                            Dịch vụ vận chuyển hàng hóa của chúng tôi đảm bảo chi phí giảm thiểu thông qua logistics hiệu quả và hoạt động tinh gọn.
                                        </span>
                                    </span>
                                    <span className="icon-lg rounded-circle">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div
                                className="tab-content"
                                id="v-pills-tabContent"
                            >
                                <div
                                    className={`tab-pane fade ${activeTab === 'air' ? 'show active' : ''}`}
                                    id="air"
                                    role="tabpanel"
                                    aria-labelledby="air-tab"
                                >
                                    <div className="operation-content">
                                        <div className="operation-thumb">
                                            <Image
                                                src={TabMain1}
                                                width={700} height={682}
                                                loading="eager"
                                                className="img-fluid"
                                                alt="Air freight cargo plane"
                                            />
                                        </div>
                                        <div className="opt-card bg-white rounded-4 p-4">
                                            <span>
                                                <Image src={TabIcon} width={40} height={40} alt="Icon" />
                                            </span>
                                            <h3 className="mt-3 h5">
                                                Thông tin bưu kiện
                                            </h3>
                                            <p>
                                                Dịch vụ vận chuyển hàng hóa của chúng tôi đảm bảo chi phí giảm thiểu thông qua logistics hiệu quả và hoạt động tinh gọn.
                                            </p>
                                            <Link href="/single-service"
                                                className="link-btn"
                                            >
                                                Tìm hiểu thêm
                                                <i className="fa fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade ${activeTab === 'byroad' ? 'show active' : ''}`}
                                    id="byroad"
                                    role="tabpanel"
                                    aria-labelledby="byroad-tab"
                                >
                                    <div className="operation-content">
                                        <div className="operation-thumb">
                                            <Image
                                                src={TabMain2}
                                                loading="eager"
                                                width={700} height={682}
                                                className="img-fluid"
                                                alt="Warehouse inventory storage"
                                            />
                                        </div>
                                        <div className="opt-card bg-white rounded-4 p-4">
                                            <span>
                                                <Image src={TabIcon} width={40} height={40} alt="Icon" />
                                            </span>
                                            <h3 className="mt-3 h5">
                                                Thông tin bưu kiện
                                            </h3>
                                            <p>
                                                Dịch vụ vận chuyển hàng hóa của chúng tôi đảm bảo chi phí giảm thiểu thông qua logistics hiệu quả và hoạt động tinh gọn.
                                            </p>
                                            <Link href="/single-service"
                                                className="link-btn"
                                            >
                                                Tìm hiểu thêm
                                                <i className="fa fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade ${activeTab === 'road' ? 'show active' : ''}`}
                                    id="road"
                                    role="tabpanel"
                                    aria-labelledby="road-tab"
                                >
                                    <div className="operation-content">
                                        <div className="operation-thumb">
                                            <Image
                                                src={TabMain3}
                                                loading="eager"
                                                width={700} height={682}
                                                className="img-fluid"
                                                alt="Road logistics delivery truck"
                                            />
                                        </div>
                                        <div className="opt-card bg-white rounded-4 p-4">
                                            <span>
                                                <Image src={TabIcon} width={40} height={40} alt="Icon" />
                                            </span>
                                            <h3 className="mt-3 h5">
                                                Giải pháp tức thì cho đường bộ
                                            </h3>
                                            <p>
                                                Dịch vụ vận chuyển hàng hóa của chúng tôi đảm bảo chi phí giảm thiểu thông qua logistics hiệu quả và hoạt động tinh gọn.
                                            </p>
                                            <Link href="/single-service"
                                                className="link-btn"
                                            >
                                                Tìm hiểu thêm
                                                <i className="fa fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Operation Section End */}
        </>
    );
}
