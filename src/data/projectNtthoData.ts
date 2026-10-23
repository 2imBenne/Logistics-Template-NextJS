import Port1 from "@/assets/images/port1.jpg";
import Port2 from "@/assets/images/port2.jpg";
import Port3 from "@/assets/images/port3.jpg";
import Port4 from "@/assets/images/port4.jpg";
import Port5 from "@/assets/images/port5.jpg";
import Port6 from "@/assets/images/port6.jpg";
import Port7 from "@/assets/images/port7.jpg";
import Port8 from "@/assets/images/port8.jpg";
import { StaticImageData } from "next/image";

/**
 * Interface chuẩn khớp 100% với PostDto / PostWithContentDto của Backend Service (Spring Boot)
 * Table: post (category_id = 3, topic_id = 14: "Dự án đã vận chuyển")
 */
export interface ProjectServicePost {
    id: number;
    categoryId: number;       // 3: "Dự án đã vận chuyển"
    topicId: number;          // 14: "Dự án đã vận chuyển"
    name: string;             // Tên bài viết/dự án chuẩn từ Backend
    description: string;      // Tóm tắt từ Backend
    titleImage: string;       // URL ảnh online từ backend uploads
    fallbackImage: StaticImageData; // Ảnh local dự phòng khi offline
    urlName: string;          // Slug URL chuẩn backend: /du-an-da-van-chuyen/...
    author: string;           // Tác giả ("Con Rùa Biển")
    datePost: string;
    categoryGroup: string;    // Nhóm lọc: noi-that, vat-lieu, thiet-bi, xe-co
    categoryGroupLabel: string;
    route: string;            // Tuyến đường thực tế
}

export const projectNtthoCategories = [
    { key: "all", label: "Tất Cả Dự Án" },
    { key: "noi-that", label: "Nội Thất & Gốm Sứ" },
    { key: "vat-lieu", label: "Vật Liệu Xây Dựng" },
    { key: "thiet-bi", label: "Máy Móc & Thiết Bị" },
    { key: "xe-co", label: "Phương Tiện & Xe Điện" },
];

/**
 * Danh sách Dự án lấy chính xác từ Database Table `post` (topic_id = 14, category_id = 3)
 */
export const projectNtthoData: ProjectServicePost[] = [
    {
        id: 214,
        categoryId: 3,
        topicId: 14,
        name: "Dự Án Vận chuyển hàng Nội thất đi Phú Quốc",
        description: "Dự án vận chuyển hàng Nội thất đi Phú Quốc chuyên nghiệp. Con Rùa Biển nhận ghép hàng nội thất bàn ghế, tủ giường cao cấp từ các xưởng sản xuất tại Sài Gòn, Bình Dương ra đảo Phú Quốc an toàn, bọc lót chống trầy xước kỹ lưỡng.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2021/09/Du-an-Van-chuyen-noi-that-di-Phu-Quoc-54.jpg",
        fallbackImage: Port1,
        urlName: "/du-an-da-van-chuyen/du-an-van-chuyen-hang-noi-that-di-phu-quoc-0945000006",
        author: "Con Rùa Biển",
        datePost: "2024-06-15",
        categoryGroup: "noi-that",
        categoryGroupLabel: "Nội Thất & Gốm Sứ",
        route: "Sài Gòn / Bình Dương ➔ Phú Quốc",
    },
    {
        id: 211,
        categoryId: 3,
        topicId: 14,
        name: "Vận chuyển hàng Gốm Sứ cao cấp đi Phú Quốc",
        description: "Chành xe cung cấp dịch vụ vận chuyển hàng Gốm sứ đi Phú Quốc chuyên nghiệp. Quy trình đóng thùng xốp chống sốc, đóng kiện gỗ bảo vệ tuyệt đối chén đĩa, bình hoa và vật phẩm trang trí cho các resort cao cấp.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2023/07/Van-chuyen-gom-su-di-Phu-Quoc-27.jpg",
        fallbackImage: Port2,
        urlName: "/du-an-da-van-chuyen/van-chuyen-hang-gom-su-di-phu-quoc-0945000006",
        author: "Con Rùa Biển",
        datePost: "2024-05-20",
        categoryGroup: "noi-that",
        categoryGroupLabel: "Nội Thất & Gốm Sứ",
        route: "Kho tổng HCM ➔ Dương Đông (Phú Quốc)",
    },
    {
        id: 213,
        categoryId: 3,
        topicId: 14,
        name: "Vận chuyển Xi Măng – Bột Trét Tường – Keo Dán Gạch đi Phú Quốc",
        description: "Dịch vụ vận chuyển vật liệu xây dựng số lượng lớn ra đảo Phú Quốc bằng xe tải bạt và phà chuyên tuyến. Hỗ trợ bốc xếp, nâng hạ bằng xe cẩu tận công trình xây dựng.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2022/09/Van-chuyen-hang-Xi-Mang-%E2%80%93-Bot-tret-tuong-%E2%80%93-Keo-dan-gach-di-Phu-Quoc-29.jpg",
        fallbackImage: Port3,
        urlName: "/du-an-da-van-chuyen/van-chuyen-hang-xi-mang-bot-tret-tuong-keo-dan-gach-di-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2024-04-18",
        categoryGroup: "vat-lieu",
        categoryGroupLabel: "Vật Liệu Xây Dựng",
        route: "Nhà máy Đồng Nai ➔ Bãi Trường (Phú Quốc)",
    },
    {
        id: 217,
        categoryId: 3,
        topicId: 14,
        name: "Dự Án Vận Chuyển Hàng Đá Hoa Cương Đi Phú Quốc",
        description: "Vận chuyển đá hoa cương cao cấp dạng tấm khổ lớn, đá ốp lát công trình khách sạn resort. Có giá đỡ chữ A chuyên dụng và chằng buộc dây cảo an toàn không nứt vỡ.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2021/10/Van-chuyen-da-hoa-cuong-di-Phu-Quoc-1.jpg",
        fallbackImage: Port4,
        urlName: "/du-an-da-van-chuyen/du-an-van-chuyen-hang-da-hoa-cuong-di-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2024-03-12",
        categoryGroup: "vat-lieu",
        categoryGroupLabel: "Vật Liệu Xây Dựng",
        route: "Kho đá Sài Gòn ➔ Quần thể Nam Đảo Phú Quốc",
    },
    {
        id: 218,
        categoryId: 3,
        topicId: 14,
        name: "Dự án Vận chuyển hàng Thang Máy đi Phú Quốc | CON RÙA BIỂN",
        description: "Vận chuyển linh kiện, ray dẫn hướng, động cơ thang máy cho dự án khách sạn Marriott Phú Quốc. Đội ngũ kỹ thuật bốc xếp kinh nghiệm, đảm bảo tuyệt đối không xô lệch cơ khí chính xác.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2021/09/Du-an-Van-chuyen-thang-may-di-Phu-Quoc-cua-Mariot-6.jpg",
        fallbackImage: Port5,
        urlName: "/du-an-da-van-chuyen/du-an-van-chuyen-hang-thang-may-di-phu-quoc-con-rua-bien",
        author: "Con Rùa Biển",
        datePost: "2024-02-28",
        categoryGroup: "thiet-bi",
        categoryGroupLabel: "Máy Móc & Thiết Bị",
        route: "Cảng Cát Lái ➔ Công trình Marriott (Phú Quốc)",
    },
    {
        id: 219,
        categoryId: 3,
        topicId: 14,
        name: "Dự án Vận chuyển Máy Bơm & Thiết Bị Cứu Hỏa đi Phú Quốc",
        description: "Vận chuyển máy bơm công nghiệp, máy phát điện dự phòng và hệ thống ống van cứu hỏa ra đảo. Hợp đồng vận chuyển rõ ràng, biên bản giao nhận chi tiết theo từng số seri máy móc.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2021/09/Van-chuyen-may-bom-di-Phu-Quoc-theo-hinh-thuc-ghep-hang-nho-le-10-2048x1536.jpg",
        fallbackImage: Port6,
        urlName: "/du-an-da-van-chuyen/du-an-van-chuyen-may-bom-di-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2024-01-15",
        categoryGroup: "thiet-bi",
        categoryGroupLabel: "Máy Móc & Thiết Bị",
        route: "KCN Tân Bình ➔ Trung tâm Phú Quốc",
    },
    {
        id: 216,
        categoryId: 3,
        topicId: 14,
        name: "Vận chuyển Xe Điện du lịch & Ô Tô Điện đi Phú Quốc",
        description: "Nhận vận chuyển xe điện chở khách tham quan resort, xe ô tô điện nguyên chiếc từ đất liền ra đảo Phú Quốc. Sử dụng xe lồng chuyên dụng và cầu dắt an toàn, không trầy xước.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2022/06/Du-an-van-chuyen-hang-xe-dien-di-Phu-Quoc-33.jpg",
        fallbackImage: Port7,
        urlName: "/du-an-da-van-chuyen/van-chuyen-hang-xe-dien-di-phu-quoc-0945000006",
        author: "Con Rùa Biển",
        datePost: "2023-12-10",
        categoryGroup: "xe-co",
        categoryGroupLabel: "Phương Tiện & Xe Điện",
        route: "Bãi xe Bình Tân ➔ Khu du lịch Phú Quốc",
    },
    {
        id: 220,
        categoryId: 3,
        topicId: 14,
        name: "Dự Án Vận chuyển Máy Giặt Sấy Công Nghiệp đi Phú Quốc",
        description: "Vận chuyển hệ thống máy giặt sấy công nghiệp khối lượng lớn phục vụ chuỗi giặt ủi resort và khách sạn. Bốc xếp bằng xe cẩu bánh lốp và bàn nâng thủy lực.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2021/09/Van-chuyen-may-giat-say-cong-nghiep-di-Phu-Quoc-1.jpg",
        fallbackImage: Port8,
        urlName: "/du-an-da-van-chuyen/du-an-van-chuyen-hang-may-giat-say-cong-nghiep-di-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2023-11-05",
        categoryGroup: "thiet-bi",
        categoryGroupLabel: "Máy Móc & Thiết Bị",
        route: "Tổng kho HCM ➔ Gành Dầu (Phú Quốc)",
    },
];

export const projectStats = [
    { number: "15+", label: "Năm Kinh Nghiệm Logistics" },
    { number: "35+", label: "Đại Dự Án Vận Tải Đã Thực Hiện" },
    { number: "100%", label: "Cam Kết Bảo Hiểm An Toàn" },
    { number: "500+", label: "Đối Tác Doanh Nghiệp & Nhà Thầu" },
];
