// Type definitions
export interface FaqItemType {
    id: number;
    question: string;
    answer: string;
    isOpen?: boolean;
}

export interface FreightOptionType {
    id: number;
    value: string;
    label: string;
}

// FAQ items data
export const faqData: FaqItemType[] = [
    {
        id: 1,
        question: "Làm thế nào để tôi có thể theo dõi lô hàng của mình?",
        answer: "Bạn có thể dễ dàng theo dõi lô hàng của mình bằng cách nhập Mã theo dõi (Tracking ID) vào công cụ theo dõi trực tuyến của chúng tôi. Sau khi gửi thông tin, bạn sẽ nhận được các cập nhật theo thời gian thực về vị trí và tình trạng giao hàng của lô hàng.",
        isOpen: true // First item open by default
    },
    {
        id: 2,
        question: "Làm thế nào để tôi liên hệ với bộ phận hỗ trợ khách hàng?",
        answer: "Bạn có thể gọi đến số hotline, gửi email, chat trực tuyến hoặc điền vào biểu mẫu liên hệ trên trang web. Đội ngũ của chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
        isOpen: false
    },
    {
        id: 3,
        question: "Điều gì xảy ra nếu lô hàng của tôi bị chậm trễ hoặc thất lạc?",
        answer: "Chúng tôi có chính sách bồi thường rõ ràng. Đối với lô hàng chậm trễ, chúng tôi sẽ áp dụng chính sách đền bù theo thỏa thuận. Trong trường hợp lô hàng bị thất lạc, chúng tôi cam kết bồi thường 100% giá trị hàng hóa.",
        isOpen: false
    },
    {
        id: 4,
        question: "Tôi có thể lên lịch gửi hàng định kỳ không?",
        answer: "Có, chúng tôi cung cấp dịch vụ vận chuyển theo hợp đồng định kỳ cho các doanh nghiệp. Vui lòng liên hệ với bộ phận kinh doanh để được tư vấn về các gói dịch vụ phù hợp.",
        isOpen: false
    },
    {
        id: 5,
        question: "Phương thức tính giá của công ty là gì?",
        answer: "Giá cước được tính toán dựa trên khối lượng, kích thước, loại hàng hóa và tuyến đường vận chuyển. Chúng tôi cung cấp bảng giá chi tiết trên trang web và luôn cập nhật theo thị trường.",
        isOpen: false
    }
];

// Freight options for the appointment form
export const freightOptions: FreightOptionType[] = [
    {
        id: 1,
        value: "sky",
        label: "Freight Sky"
    },
    {
        id: 2,
        value: "ship",
        label: "Freight Ship"
    },
    {
        id: 3,
        value: "road",
        label: "Freight Road"
    },
    {
        id: 4,
        value: "rail",
        label: "Freight Rail"
    }
];