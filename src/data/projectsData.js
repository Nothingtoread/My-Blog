// Dữ liệu các dự án
export const projectsData = [
    {
        id: 1,
        title: "UI Designer 2",
        shortDescription: "Ứng dụng thiết kế giao diện người dùng hiện đại với nhiều tính năng mạnh mẽ",
        description: `
      <h2>UI Designer 2</h2>
      <p>UI Designer 2 là một ứng dụng thiết kế giao diện người dùng được xây dựng với mục tiêu tạo ra một công cụ mạnh mẽ và dễ sử dụng cho các nhà thiết kế và lập trình viên.</p>
      
      <h3>Những gì tôi đã hoàn thành</h3>
      <p>Trong dự án này, tôi đã:</p>
      <ul>
        <li>Phát triển giao diện người dùng trực quan và dễ sử dụng</li>
        <li>Xây dựng hệ thống component có thể tái sử dụng</li>
        <li>Tích hợp các công cụ thiết kế hiện đại</li>
        <li>Tối ưu hóa hiệu suất và trải nghiệm người dùng</li>
        <li>Triển khai responsive design cho nhiều thiết bị</li>
      </ul>
    `,
        features: [
            "Giao diện trực quan và thân thiện với người dùng",
            "Hệ thống component module hóa cao",
            "Hỗ trợ đa nền tảng và responsive design",
            "Công cụ thiết kế linh hoạt và mạnh mẽ",
            "Tối ưu hóa hiệu suất tải trang",
            "Tích hợp với các framework phổ biến"
        ],
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Responsive Design",
            "UI/UX Design"
        ],
        repository: "https://github.com/Nothingtoread/UI-Designer-2",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
        date: "2024-12-01",
        category: "Web Development"
    },
    {
        id: 2,
        title: "Xây dựng Web Server an toàn trên AWS với HTTPS, Security Group & WAF",
        shortDescription: "Hệ thống web server bảo mật cao trên AWS sử dụng HTTPS, Security Groups và WAF",
        description: `
      <h2>Xây dựng Web Server an toàn trên AWS</h2>
      <p>Dự án này tập trung vào việc xây dựng một hệ thống web server có tính bảo mật cao trên nền tảng Amazon Web Services (AWS), đảm bảo an toàn dữ liệu và chống lại các cuộc tấn công mạng.</p>
      
      <h3>Những gì tôi đã hoàn thành</h3>
      <p>Trong dự án này, tôi đã thực hiện:</p>
      <ul>
        <li>Thiết lập và cấu hình EC2 instances trên AWS</li>
        <li>Triển khai chứng chỉ SSL/TLS cho HTTPS</li>
        <li>Cấu hình Security Groups để kiểm soát traffic</li>
        <li>Tích hợp AWS WAF (Web Application Firewall) để bảo vệ khỏi các cuộc tấn công web phổ biến</li>
        <li>Thiết lập monitoring và logging để theo dõi hoạt động hệ thống</li>
        <li>Tối ưu hóa cấu hình bảo mật và performance</li>
      </ul>
      
      <h3>Chi tiết kỹ thuật</h3>
      <p>Hệ thống được xây dựng với các lớp bảo mật sau:</p>
      <ul>
        <li><strong>Network Layer:</strong> VPC với public và private subnets</li>
        <li><strong>Transport Layer:</strong> HTTPS với TLS 1.2+</li>
        <li><strong>Application Layer:</strong> WAF rules để chống SQL injection, XSS, và các tấn công khác</li>
        <li><strong>Access Control:</strong> Security Groups và Network ACLs</li>
      </ul>
    `,
        features: [
            "HTTPS với chứng chỉ SSL/TLS được quản lý tự động",
            "AWS Security Groups cấu hình chặt chẽ",
            "WAF rules bảo vệ khỏi OWASP Top 10",
            "Monitoring và alerting với CloudWatch",
            "Auto-scaling để xử lý traffic cao",
            "Backup và disaster recovery plan",
            "DDoS protection với AWS Shield",
            "Rate limiting và IP blocking"
        ],
        technologies: [
            "Amazon EC2",
            "AWS WAF",
            "AWS Security Groups",
            "SSL/TLS",
            "AWS CloudWatch",
            "AWS VPC",
            "AWS Shield",
            "Linux Server Administration"
        ],
        documentPath: "/DOC/BaoCao.docx",
        documentName: "BaoCao.docx",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        date: "2024-11-15",
        category: "Cloud Infrastructure"
    }
];
