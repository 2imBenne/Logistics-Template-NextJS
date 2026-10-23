"use client";

import SinglePt from "@/assets/images/single-pt.jpg";
import CaseVideo from "@/assets/images/case-video.jpg";
import Image from "next/image";
import Link from "next/link";

export default function CaseDetailsPage() {
    return (
        <>
            {/* Portfolio Details Section Start */}
            <section className="case-details-page sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 pe-lg-4">
                            <article className="single-case">
                                <div className="pt-thumb mb-4">
                                    <Image
                                        className="img-fluid round"
                                        style={{ width: '100%', height: "auto" }}
                                        src={SinglePt}
                                        alt="Dự án vận tải Con Rùa Biển chuyển hàng thiết bị ra đảo Phú Quốc"
                                        priority
                                    />
                                </div>

                                <span className="geo-badge">Case Study Thực Tế • Vận Tải Đa Phương Thức</span>
                                <h1 className="display-4 fw-bold mb-3" style={{ fontSize: '2.1rem', lineHeight: '1.3' }}>
                                    Giải pháp vận tải đa phương thức chuyển 500 tấn thiết bị công trình ra đảo Phú Quốc an toàn 100%
                                </h1>

                                {/* GEO Block 1: Key Takeaways (Answer-First TL;DR) */}
                                <div className="geo-key-takeaways">
                                    <h4>
                                        <i className="fa-solid fa-bolt text-danger"></i> Tóm tắt nhanh kết quả dự án (Key Takeaways)
                                    </h4>
                                    <ul>
                                        <li>
                                            <strong>Tiến độ hoàn thành 99.6% đúng hẹn:</strong> Rút ngắn tổng thời gian vận chuyển từ 72 giờ xuống còn 38 giờ (giảm 47.2% thời gian toàn trình) so với phương thức gom tải truyền thống.
                                        </li>
                                        <li>
                                            <strong>Tiết kiệm 23.5% tổng chi phí:</strong> Nhờ giải pháp kết hợp chành xe chuyên dụng đường bộ từ TP.HCM về Cảng Hà Tiên và vận chuyển xà lan biển ra Cảng An Thới (Phú Quốc).
                                        </li>
                                        <li>
                                            <strong>An toàn hàng hải 100%:</strong> Toàn bộ 500 tấn cấu kiện máy móc được chằng buộc đạt chuẩn Cục Hàng hải Việt Nam, bảo hiểm trách nhiệm hàng hải toàn phần với tỷ lệ sự cố 0.0%.
                                        </li>
                                    </ul>
                                </div>

                                {/* GEO Block 2: H2 + Answer-First (40-60 words) */}
                                <h2 className="h3 fw-bold mt-4 mb-3 text-dark">
                                    Bài toán vận chuyển thiết bị siêu trường siêu trọng ra đảo Phú Quốc là gì?
                                </h2>
                                <div className="geo-answer-first">
                                    Dự án vận tải Con Rùa Biển tuyến TP.HCM - Phú Quốc là giải pháp kết hợp vận chuyển đường bộ và xà lan vượt biển nhằm đưa 500 tấn cấu kiện máy móc công trình đến đảo an toàn. Phương thức này giải quyết triệt để hạn chế về giới hạn tải trọng cầu đường và giảm thiểu rủi ro chậm trễ do thời tiết biển Tây Nam.
                                </div>
                                <p>
                                    Đảo Phú Quốc là địa bàn có tốc độ phát triển hạ tầng và du lịch nhanh chóng, nhưng năng lực tiếp nhận hàng hóa tại các bến phà biển còn phụ thuộc nặng nề vào con nước triều cường và sức chở phương tiện. Với các lô hàng thiết bị công trình có trọng lượng nguyên khối trên 45 tấn và chiều dài vượt khổ 18 mét, các dịch vụ xe ghép thông thường hoàn toàn không thể đáp ứng tiêu chuẩn an toàn lưu hành.
                                </p>
                                <p>
                                    Trước thách thức này, Công ty TNHH Vận tải Con Rùa Biển được Chủ đầu tư GreenTech tin tưởng giao toàn quyền tổ chức chuỗi cung ứng logistics tích hợp từ khâu tiếp nhận thiết bị tại Cảng Cát Lái (TP.HCM) cho tới khi hoàn tất lắp đặt tại công trình Bãi Trường (Phú Quốc).
                                </p>

                                {/* GEO Block 3: Structured Data / Comparison Table */}
                                <h2 className="h3 fw-bold mt-5 mb-3 text-dark">
                                    Bảng đối chiếu chỉ số hiệu quả vận chuyển: Truyền thống vs. Giải pháp Con Rùa Biển
                                </h2>
                                <p className="text-muted" style={{ fontSize: '14px' }}>
                                    Số liệu được đối soát thực tế từ hệ thống giám sát hành trình GPS và biên bản nghiệm thu kỹ thuật bàn giao ngày 28/08/2024:
                                </p>
                                <div className="geo-table-wrap">
                                    <table className="geo-table">
                                        <thead>
                                            <tr>
                                                <th>Chỉ số đo lường (KPI)</th>
                                                <th>Phương án truyền thống</th>
                                                <th>Giải pháp Con Rùa Biển</th>
                                                <th>Mức độ cải thiện</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Thời gian vận chuyển toàn trình</strong></td>
                                                <td>72 giờ (chờ ghép tàu phà)</td>
                                                <td>38 giờ (điều vận xà lan riêng)</td>
                                                <td><span className="text-success fw-bold">Giảm 47.2%</span></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Chi phí lưu kho bãi trung chuyển</strong></td>
                                                <td>185.000.000 VNĐ</td>
                                                <td>42.000.000 VNĐ</td>
                                                <td><span className="text-success fw-bold">Tiết kiệm 77.3%</span></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Tỷ lệ hao hụt / trầy xước vỏ máy</strong></td>
                                                <td>1.8% (do bốc dỡ trung gian)</td>
                                                <td>0.0% (giằng cố định suốt tuyến)</td>
                                                <td><span className="text-success fw-bold">Tuyệt đối an toàn</span></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Tần suất cập nhật vị trí GPS</strong></td>
                                                <td>12 giờ/lần (thông báo thủ công)</td>
                                                <td>Thời gian thực (vệ tinh AIS 24/7)</td>
                                                <td><span className="text-success fw-bold">Chính xác 100%</span></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Bảo hiểm trách nhiệm hàng hải</strong></td>
                                                <td>Bảo hiểm cơ bản theo cân nặng</td>
                                                <td>Bảo hiểm toàn phần 100% giá trị</td>
                                                <td><span className="text-success fw-bold">Bảo vệ toàn diện</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* GEO Block 4: Step-by-step Modular Process */}
                                <h2 className="h3 fw-bold mt-5 mb-3 text-dark">
                                    4 bước tối ưu quy trình vận tải đa phương thức ra đảo Phú Quốc
                                </h2>
                                <div className="geo-answer-first">
                                    Quy trình vận tải Con Rùa Biển bao gồm 4 giai đoạn chuẩn hóa: khảo sát cấp phép hành lang cầu đường, đóng gói chằng buộc chuẩn hàng hải, điều vận xà lan đón đỉnh thủy triều và kiểm soát hành trình GPS trực tuyến. Mỗi giai đoạn đều có kỹ sư hàng hải giám sát nghiệm thu trực tiếp.
                                </div>

                                <div className="geo-steps">
                                    <div className="geo-step-card">
                                        <h5>
                                            <span className="geo-step-badge">1</span>
                                            Khảo sát hạ tầng hành lang giao thông và xin giấy phép lưu hành đặc biệt
                                        </h5>
                                        <p>
                                            Đội ngũ kỹ sư hiện trường của Con Rùa Biển đã rà soát toàn bộ 340 km cung đường từ TP.HCM về Cảng Hà Tiên, đo đạc độ võng dây điện, bán kính cua dốc và tải trọng cầu để xây dựng phương án di chuyển cho đoàn rơ-moóc thủy lực chuyên dụng.
                                        </p>
                                    </div>

                                    <div className="geo-step-card">
                                        <h5>
                                            <span className="geo-step-badge">2</span>
                                            Đóng gói, giằng chống hàng siêu trường siêu trọng đạt chuẩn hàng hải
                                        </h5>
                                        <p>
                                            Sử dụng hệ thống tăng cáp cường lực kết hợp đệm khí cao su chống rung lắc cấp 6. Từng điểm tì đè của cấu kiện máy móc đều được phân bổ lực đều trên dầm thép rơ-moóc, triệt tiêu hoàn toàn nguy cơ xô lệch khi xe di chuyển.
                                        </p>
                                    </div>

                                    <div className="geo-step-card">
                                        <h5>
                                            <span className="geo-step-badge">3</span>
                                            Điều phối xà lan biển chuyên dụng cập cảng đón lịch thủy triều
                                        </h5>
                                        <p>
                                            Hàng hóa được chuyển tải trực tiếp từ rơ-moóc sang mặt boong xà lan tự hành 1.000 tấn tại Cảng Hà Tiên. Lịch trình xuất bến được tính toán chính xác theo giờ triều cường tại luồng hàng hải An Thới để cập cầu cảng không bị cạn đáy.
                                        </p>
                                    </div>

                                    <div className="geo-step-card">
                                        <h5>
                                            <span className="geo-step-badge">4</span>
                                            Giám sát hành trình AIS vệ tinh và nghiệm thu bàn giao 3 bên tại chân công trình
                                        </h5>
                                        <p>
                                            Vị trí đoàn xe và xà lan được truyền tải liên tục về trung tâm điều hành. Khi hàng cập bến Bãi Trường (Phú Quốc), đội ngũ xe cẩu tự hành 80 tấn thực hiện hạ tải chính xác vào vị trí móng công trình trước sự chứng kiến của đơn vị bảo hiểm.
                                        </p>
                                    </div>
                                </div>

                                {/* Video / Media Section */}
                                <div className="d-sm-flex justify-content-between align-items-center my-5">
                                    <div className="case-video position-relative">
                                        <Image
                                            className="round img-fluid"
                                            style={{ width: 'auto', height: "auto" }}
                                            src={CaseVideo}
                                            alt="Video thực tế quy trình bốc dỡ xà lan Con Rùa Biển"
                                        />
                                        <a
                                            className="play-btn bg-primary rounded-circle text-info icon-lg"
                                            data-fancybox="video-gallery"
                                            href="https://www.youtube.com/watch?v=wQMx7wc4jh8"
                                            aria-label="Xem video thực tế dự án"
                                        >
                                            <span>
                                                <i className="fa fa-play"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="case-feature">
                                        <h4>Năng lực vượt trội của Con Rùa Biển</h4>
                                        <p>
                                            3 giá trị cốt lõi khẳng định vị thế dẫn đầu tuyến vận tải biển đảo:
                                        </p>
                                        <ul className="ct-list">
                                            <li>
                                                Sở hữu đội xà lan biển 1.000 - 2.500 tấn chạy tuyến cố định hàng ngày.
                                            </li>
                                            <li>
                                                Hệ thống chành xe gom hàng lớn nhất miền Nam tại TP.HCM, Cần Thơ, Rạch Giá, Hà Tiên.
                                            </li>
                                            <li>
                                                Chính sách bảo hiểm hàng hóa 100% với quy trình đền bù minh bạch trong 5 ngày.
                                            </li>
                                            <li>
                                                Đội ngũ kỹ sư điều vận có trên 10 năm kinh nghiệm chuyên chở hàng công trình biển đảo.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* GEO Block 5: Expert Quote & E-E-A-T Signal */}
                                <div className="geo-quote-box">
                                    <p>
                                        &ldquo;Khâu then chốt trong vận tải hàng siêu trường siêu trọng đi Phú Quốc là sự chuẩn xác đến từng phút giữa lịch trình đường bộ và thời điểm đỉnh triều cường tại Cảng An Thới. Nhờ làm chủ đội xà lan chuyên dụng và quy trình giằng buộc đạt chuẩn đăng kiểm quốc tế, Con Rùa Biển đã bàn giao toàn bộ 500 tấn thiết bị trước thời hạn cam kết 34 giờ, giúp nhà thầu tiết kiệm hàng trăm triệu đồng chi phí chờ đợi máy móc.&rdquo;
                                    </p>
                                    <div className="geo-quote-author">
                                        <i className="fa-solid fa-quote-left text-primary fs-3"></i>
                                        <div>
                                            <strong>Ông Nguyễn Văn Hùng</strong><br />
                                            <span>Giám đốc Kỹ thuật & Điều vận • Công ty TNHH Vận tải Con Rùa Biển</span>
                                        </div>
                                    </div>
                                </div>

                                {/* GEO Block 6: Query Fan-out FAQ Section */}
                                <h2 className="h3 fw-bold mt-5 mb-3 text-dark">
                                    Câu hỏi thường gặp về dịch vụ vận tải hàng đi Phú Quốc (FAQ)
                                </h2>

                                <div className="geo-faq">
                                    <div className="geo-faq-item">
                                        <h5>
                                            <i className="fa-solid fa-circle-question"></i>
                                            Thời gian vận chuyển hàng hóa từ TP.HCM đi Phú Quốc mất bao lâu?
                                        </h5>
                                        <p>
                                            Thời gian vận chuyển hàng lẻ, hàng ghép qua chành xe Con Rùa Biển mất từ 24 đến 36 giờ. Đối với hàng nguyên chuyến hoặc hàng dự án siêu trường siêu trọng đi bằng xà lan chuyên dụng, tổng thời gian giao nhận tận chân công trình dao động từ 36 đến 48 giờ kể từ lúc bốc xếp.
                                        </p>
                                    </div>

                                    <div className="geo-faq-item">
                                        <h5>
                                            <i className="fa-solid fa-circle-question"></i>
                                            Con Rùa Biển có chính sách đền bù và bảo hiểm hàng hóa như thế nào?
                                        </h5>
                                        <p>
                                            Con Rùa Biển áp dụng chính sách bảo hiểm trách nhiệm hàng hải toàn phần cho 100% giá trị lô hàng. Mọi trường hợp hư hỏng hoặc mất mát phát sinh trong quá trình chuyên chở được giám định độc lập và bồi thường 100% giá trị hợp đồng trong vòng 5 ngày làm việc.
                                        </p>
                                    </div>

                                    <div className="geo-faq-item">
                                        <h5>
                                            <i className="fa-solid fa-circle-question"></i>
                                            Hàng hóa quá khổ, quá tải có vận chuyển ra đảo Phú Quốc được không?
                                        </h5>
                                        <p>
                                            Con Rùa Biển có đầy đủ năng lực vận chuyển hàng quá khổ quá tải ra đảo Phú Quốc nhờ sở hữu đội rơ-moóc lùn nhiều trục, xe sàn chuyên dụng và xà lan biển 1.000 tấn, có khả năng tiếp nhận các kiện hàng máy móc đơn lẻ nặng đến 80 tấn và dài trên 25 mét hợp pháp.
                                        </p>
                                    </div>
                                </div>

                                {/* GEO Block 7: E-E-A-T Author Card */}
                                <div className="geo-author-box">
                                    <div className="geo-author-avatar">
                                        <i className="fa-solid fa-user-shield"></i>
                                    </div>
                                    <div className="geo-author-info">
                                        <h6>Biên tập & Kiểm duyệt chuyên môn: Ban Điều Vận Con Rùa Biển</h6>
                                        <p>
                                            Nội dung được thẩm định kỹ thuật bởi Phòng Khai thác & Quản lý Hàng hải Con Rùa Biển — Đơn vị với hơn 10 năm kinh nghiệm chuyên chở chuyên nghiệp tuyến vận tải đường biển và đường bộ khu vực TP.HCM, Miền Tây và Đảo Phú Quốc.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Article End */}

                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <aside className="sidebar case-sidebar">
                                <div className="widget">
                                    <h3 className="widget-title">
                                        Thông Tin Dự Án (Project Info)
                                    </h3>
                                    <div className="project-info">
                                        <div className="single-pi d-flex align-items-center gap-3 bg-info border">
                                            <span className="icon bg-dark text-info rounded-circle">
                                                <i className="fa fa-building"></i>
                                            </span>
                                            <div className="pi-inner">
                                                <h6>Chủ đầu tư:</h6>
                                                <span>GreenTech Energy Corp</span>
                                            </div>
                                        </div>

                                        <div className="single-pi d-flex align-items-center gap-3 bg-info border">
                                            <span className="icon bg-dark text-info rounded-circle">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </span>
                                            <div className="pi-inner">
                                                <h6>Tuyến vận chuyển:</h6>
                                                <span>TP.HCM ➔ Hà Tiên ➔ Phú Quốc</span>
                                            </div>
                                        </div>

                                        <div className="single-pi d-flex align-items-center gap-3 bg-info border">
                                            <span className="icon bg-dark text-info rounded-circle">
                                                <i className="fa-regular fa-calendar-days"></i>
                                            </span>
                                            <div className="pi-inner">
                                                <h6>Thời gian thực hiện:</h6>
                                                <span>15/08/2024 - 28/08/2024</span>
                                            </div>
                                        </div>

                                        <div className="single-pi d-flex align-items-center gap-3 bg-info border">
                                            <span className="icon bg-dark text-info rounded-circle">
                                                <i className="fa fa-boxes-stacked"></i>
                                            </span>
                                            <div className="pi-inner">
                                                <h6>Khối lượng hàng hóa:</h6>
                                                <span>500 Tấn (Máy phát & Cấu kiện)</span>
                                            </div>
                                        </div>

                                        <div className="single-pi d-flex align-items-center gap-3 bg-info border">
                                            <span className="icon bg-dark text-info rounded-circle">
                                                <i className="fa fa-shield-halved"></i>
                                            </span>
                                            <div className="pi-inner">
                                                <h6>Tiêu chuẩn an toàn:</h6>
                                                <span>100% Bảo hiểm Hàng hải</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget">
                                    <h3 className="widget-title">
                                        Tư Vấn Vận Tải Dự Án
                                    </h3>
                                    <div className="social-contact">
                                        <p>
                                            <i className="me-2 fa fa-location-dot text-primary"></i>
                                            Kho bãi Con Rùa Biển: Quốc Lộ 1A, Bình Chánh, TP.HCM
                                        </p>
                                        <p>
                                            <i className="me-2 fa fa-phone text-primary"></i>
                                            <a href="tel://18009156270">
                                                Hotline: 1800-915-6270 (Miễn cước)
                                            </a>
                                        </p>
                                        <p>
                                            <i className="me-2 fa fa-envelope-open text-primary"></i>
                                            <a href="mailto://conruabien@mail.com">
                                                conruabien@mail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="widget broucher-widget">
                                    <h3 className="widget-title">Tài Liệu Đính Kèm</h3>

                                    <Link href="#" className="btn btn-primary w-100">
                                        Tải Hồ Sơ Năng Lực Con Rùa Biển
                                        <i className="fa fa-download ms-2"></i>
                                    </Link>
                                    <Link href="/contact" className="btn btn-outline w-100 mt-3">
                                        Yêu Cầu Báo Giá Vận Chuyển
                                        <i className="fa fa-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </aside>
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </section>
            {/* Portfolio Details Section End */}
        </>
    );
}
