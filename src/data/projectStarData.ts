import Pt1 from "@/assets/images/pt1.jpg";
import Pt2 from "@/assets/images/pt2.jpg";
import Pt3 from "@/assets/images/pt3.jpg";
import Pt4 from "@/assets/images/pt4.jpg";
import Pt5 from "@/assets/images/pt5.jpg";
import Port1 from "@/assets/images/port1.jpg";
import Port2 from "@/assets/images/port2.jpg";
import Port3 from "@/assets/images/port3.jpg";
import { StaticImageData } from "next/image";

/**
 * Interface chuẩn khớp 100% với PostDto / PostWithContentDto của Backend Service
 * Table: post (category_id = 3, topic_id = 14: "Dự án đã vận chuyển")
 */
export interface ProjectServicePost {
    id: number;
    categoryId: number;       // 3: "Dự án"
    topicId: number;          // 14: "Dự án đã vận chuyển"
    name: string;             // Tiêu đề dự án thực tế từ Backend
    description: string;      // Tóm tắt dự án từ Backend
    titleImage: string;       // URL ảnh online từ backend
    fallbackImage: StaticImageData; // Ảnh local dự phòng khi offline
    urlName: string;          // Slug URL chuẩn backend: /du-an/...
    author: string;           // "Con Rùa Biển"
    datePost: string;
    route: string;            // Tuyến đường vận chuyển
    categoryGroup: string;    // Nhóm lọc: noi-that, may-moc, vat-lieu, gom-su
    categoryGroupLabel: string;
}

export const projectStarCategories = [
    { key: "all", label: "Tất Cả Dự Án" },
    { key: "noi-that", label: "Hàng Nội Thất & Gỗ" },
    { key: "may-moc", label: "Máy Móc & Thiết Bị" },
    { key: "vat-lieu", label: "Vật Liệu Xây Dựng & Đá" },
    { key: "gom-su", label: "Gốm Sứ & Hàng Dễ Vỡ" },
];

/**
 * Danh sách dự án lấy trực tiếp từ Database Table `post` (topic_id = 14, category_id = 3)
 */
export const projectStarData: ProjectServicePost[] = [
    {
        id: 110,
        categoryId: 3,
        topicId: 14,
        name: "Dự Án Vận chuyển hàng Nội thất đi Phú Quốc",
        description: "Dự án vận chuyển hàng Nội thất đi Phú Quốc chuyên nghiệp. Con Rùa Biển nhận ghép hàng nội thất bàn ghế, tủ giường cao cấp từ các xưởng sản xuất tại Sài Gòn, Bình Dương ra đảo Phú Quốc an toàn, bọc lót chống trầy xước kỹ lưỡng.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2023/02/Van-chuyen-noi-that-di-Phu-Quoc-gia-re-4-2048x1536.jpg",
        fallbackImage: Pt1,
        urlName: "/du-an/du-an-van-chuyen-hang-noi-that-di-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2024-01-15",
        route: "Sài Gòn / Bình Dương → Đảo Phú Quốc",
        categoryGroup: "noi-that",
        categoryGroupLabel: "Nội Thất & Gỗ",
    },
    {
        id: 111,
        categoryId: 3,
        topicId: 14,
        name: "Vận chuyển hàng Gốm Sứ cao cấp đi Phú Quốc",
        description: "Chành xe cung cấp dịch vụ vận chuyển hàng Gốm sứ đi Phú Quốc chuyên nghiệp. Quy trình đóng thùng xốp chống sốc, đóng kiện gỗ bảo vệ tuyệt đối chén đĩa, bình hoa và vật phẩm trang trí cho các resort cao cấp.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2023/02/chuyen-hang-gom-su-di-Phu-Quoc-gia-re-1-2048x1536.jpg",
        fallbackImage: Pt2,
        urlName: "/du-an/van-chuyen-hang-gom-su-cao-cap-di-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2024-01-20",
        route: "TP.HCM → Phú Quốc (Giao tận nơi Resort)",
        categoryGroup: "gom-su",
        categoryGroupLabel: "Gốm Sứ & Dễ Vỡ",
    },
    {
        id: 112,
        categoryId: 3,
        topicId: 14,
        name: "Vận chuyển Xi Măng – Bột Trét Tường – Keo Dán Gạch đi Phú Quốc",
        description: "Dịch vụ vận chuyển vật liệu xây dựng số lượng lớn ra đảo Phú Quốc bằng xe tải bạt và phà chuyên tuyến. Hỗ trợ bốc xếp, nâng hạ bằng xe cẩu tận công trình xây dựng.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2023/02/Van-chuyen-xi-mang-di-Phu-Quoc-nhanh-chong-2-2048x1536.jpg",
        fallbackImage: Pt3,
        urlName: "/du-an/van-chuyen-xi-mang-bot-tret-tuong-keo-dan-gach-di-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2024-02-05",
        route: "Hà Tiên / Rạch Giá → Phú Quốc",
        categoryGroup: "vat-lieu",
        categoryGroupLabel: "Vật Liệu Xây Dựng",
    },
    {
        id: 113,
        categoryId: 3,
        topicId: 14,
        name: "Dự Án Vận Chuyển Hàng Đá Hoa Cương Đi Phú Quốc",
        description: "Vận chuyển đá hoa cương cao cấp dạng tấm khổ lớn, đá ốp lát công trình khách sạn resort. Có giá đỡ chữ A chuyên dụng và chằng buộc dây cảo an toàn không nứt vỡ.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2023/02/Van-chuyen-da-hoa-cuong-di-Phu-Quoc-an-toan-tiet-kiem-4-2048x1536.jpg",
        fallbackImage: Pt4,
        urlName: "/du-an/du-an-van-chuyen-hang-da-hoa-cuong-di-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2024-02-18",
        route: "Đồng Nai / TP.HCM → Đảo Phú Quốc",
        categoryGroup: "vat-lieu",
        categoryGroupLabel: "Vật Liệu Xây Dựng",
    },
    {
        id: 114,
        categoryId: 3,
        topicId: 14,
        name: "Dự án Vận chuyển hàng Thang Máy đi Phú Quốc | CON RÙA BIỂN",
        description: "Vận chuyển linh kiện, ray dẫn hướng, động cơ thang máy cho dự án khách sạn Marriott Phú Quốc. Đội ngũ kỹ thuật bốc xếp kinh nghiệm, đảm bảo tuyệt đối không xô lệch cơ khí chính xác.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2023/02/Van-chuyen-thang-may-di-Phu-Quoc-uy-tin-an-toan-6-2048x1536.jpg",
        fallbackImage: Pt5,
        urlName: "/du-an/du-an-van-chuyen-hang-thang-may-di-phu-quoc-con-rua-bien",
        author: "Con Rùa Biển",
        datePost: "2024-02-28",
        route: "KCN Sóng Thần → Vinpearl / Bãi Trường Phú Quốc",
        categoryGroup: "may-moc",
        categoryGroupLabel: "Máy Móc Công Nghiệp",
    },
    {
        id: 115,
        categoryId: 3,
        topicId: 14,
        name: "Dự án Vận chuyển Máy Bơm & Thiết Bị Cứu Hỏa đi Phú Quốc",
        description: "Vận chuyển máy bơm công nghiệp, máy phát điện dự phòng và hệ thống ống van cứu hỏa ra đảo. Hợp đồng vận chuyển rõ ràng, biên bản giao nhận chi tiết theo từng số seri máy móc.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2023/02/van-chuyen-may-bom-di-phu-quoc-gia-re-1-2048x1536.jpg",
        fallbackImage: Port1,
        urlName: "/du-an/du-an-van-chuyen-may-bom-thiet-bi-cuu-hoa-di-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2024-03-02",
        route: "TP.HCM → Phú Quốc",
        categoryGroup: "may-moc",
        categoryGroupLabel: "Máy Móc Công Nghiệp",
    },
    {
        id: 116,
        categoryId: 3,
        topicId: 14,
        name: "Vận chuyển Gạch Ốp Lát Granite Cho Khu Đô Thị Nam Phú Quốc",
        description: "Vận chuyển hơn 1.200 pallet gạch granite nguyên seal từ nhà máy Bình Dương ra đảo Phú Quốc bằng đội xe đầu kéo sàn kết hợp sà lan biển chuyên dụng.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2023/02/Van-chuyen-da-lat-nen-di-Phu-Quoc-sieu-nhanh-5-2048x1536.jpg",
        fallbackImage: Port2,
        urlName: "/du-an/van-chuyen-gach-op-lat-granite-cho-khu-do-thi-nam-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2024-03-12",
        route: "Bình Dương → An Thới (Phú Quốc)",
        categoryGroup: "vat-lieu",
        categoryGroupLabel: "Vật Liệu Xây Dựng",
    },
    {
        id: 117,
        categoryId: 3,
        topicId: 14,
        name: "Vận chuyển Kết Cấu Thép & Nhà Tiền Chế Vượt Biển Đi Phú Quốc",
        description: "Vận chuyển hàng siêu trường siêu trọng, dầm thép dài 16m và cột kèo nhà xưởng ra đảo. Có xe dẫn đường và giấy phép lưu hành đặc biệt của Sở GTVT.",
        titleImage: "https://conruabien.vn/wp-content/uploads/2023/02/van-chuyen-ton-cach-nhiet-di-Phu-quoc-ghep-nhanh-5-2048x1536.jpg",
        fallbackImage: Port3,
        urlName: "/du-an/van-chuyen-ket-cau-thep-nha-tien-che-vuot-bien-di-phu-quoc",
        author: "Con Rùa Biển",
        datePost: "2024-03-18",
        route: "Cảng Cát Lái → Cảng Bãi Vòng (Phú Quốc)",
        categoryGroup: "may-moc",
        categoryGroupLabel: "Máy Móc Công Nghiệp",
    },
];

export const projectStats = [
    { number: "1.250+", label: "Chuyến Hàng Ra Đảo An Toàn" },
    { number: "98.8%", label: "Hài Lòng Từ Chủ Đầu Tư & Resort" },
    { number: "45+", label: "Đầu Xe Tải & Sà Lan Chuyên Tuyến" },
    { number: "24/7", label: "Giám Sát Định Vị GPS Trực Tuyến" },
];
