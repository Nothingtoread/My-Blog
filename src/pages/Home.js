import React, { useState, useEffect, useCallback } from 'react';
import './Home.css';

function Home() {
  // State để quản lý modal PDF
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Danh sách các chứng chỉ Cisco
  const certificates = [
    {
      id: 1,
      name: 'Cybersecurity Essentials',
      fileName: 'Cybersecurity_Cert.pdf',
      imageFileName: 'Cybersecurity_Cert_page-0001.jpg',
      description: 'Chứng chỉ về bảo mật mạng và an ninh mạng'
    },
    {
      id: 2,
      name: 'JavaScript Essentials 1',
      fileName: 'JavaScriptEssentials1_CERT.pdf',
      imageFileName: 'JavaScriptEssentials1_CERT_page-0001.jpg',
      description: 'Chứng chỉ về JavaScript cơ bản phần 1'
    },
    {
      id: 3,
      name: 'JavaScript Essentials 2',
      fileName: 'JavaScriptEssentials2_CERT.pdf',
      imageFileName: 'JavaScriptEssentials2_CERT_page-0001.jpg',
      description: 'Chứng chỉ về JavaScript cơ bản phần 2'
    },
    {
      id: 4,
      name: 'Networking Basics',
      fileName: 'NetworkingBasics_CERT.pdf',
      imageFileName: 'NetworkingBasics_CERT_page-0001.jpg',
      description: 'Chứng chỉ về mạng máy tính cơ bản'
    }
  ];

  // Hàm mở modal PDF
  const handleViewPdf = (fileName, imageFileName, certName) => {
    setSelectedPdf({ fileName, imageFileName, certName });
    document.body.style.overflow = 'hidden'; // Ngăn scroll khi modal mở
  };

  // Hàm đóng modal
  const handleCloseModal = useCallback(() => {
    setSelectedPdf(null);
    document.body.style.overflow = 'auto'; // Khôi phục scroll
  }, []);

  // Hàm download PDF
  const handleDownload = (fileName, event) => {
    event.stopPropagation(); // Ngăn event bubble lên card để không mở modal
    try {
      const link = document.createElement('a');
      link.href = `/certificates/${fileName}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Lỗi khi tải file:', error);
      alert('Có lỗi xảy ra khi tải file. Vui lòng thử lại.');
    }
  };

  // Đóng modal khi click vào backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Đóng modal khi nhấn phím ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedPdf) {
        handleCloseModal();
      }
    };

    if (selectedPdf) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedPdf, handleCloseModal]);

  return (
    <div className="home">
      <div className="home-container">
        <div className="profile-section">
          <div className="profile-image">
            <img
              src="/images/unnamed.jpg"
              alt="Lê Thành Nhơn"
            />
          </div>
          <div className="profile-content">
            <h1>Xin chào, tôi là Lê Thành Nhơn</h1>
            <p className="profile-title">Lập trình viên JavaScript & Java</p>
            <div className="profile-description">
              <p>
                Tôi là một lập trình viên đam mê với công nghệ web, đặc biệt là JavaScript và Java.
                Blog này là nơi tôi chia sẻ những kiến thức và kinh nghiệm mà tôi đã tích lũy được
                trong quá trình học tập và làm việc.
              </p>
              <p className="profile-quote">
                <em>"Không phải ai cũng thắng ngay từ đầu, nhưng kẻ lỳ đòn nhất thường là người về đích."</em>
              </p>
              <p>
                Tại đây, bạn sẽ tìm thấy các bài viết về:
              </p>
              <ul>
                <li>JavaScript ES6+ và các tính năng hiện đại</li>
                <li>Xử lý bất đồng bộ với Promises và Async/Await</li>
                <li>Functional Programming và Higher-Order Functions</li>
                <li>Java và các best practices</li>
                <li>Và nhiều chủ đề thú vị khác về lập trình</li>
              </ul>
            </div>
            <div className="profile-skills">
              <h3>Kỹ năng</h3>
              <div className="skills-list">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">ES6+</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">HTML/CSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phần hiển thị chứng chỉ */}
        <div className="certificates-section">
          <h2 className="certificates-title">Chứng chỉ Cisco</h2>
          <p className="certificates-subtitle">Các chứng chỉ mà tôi đã đạt được từ Cisco Networking Academy</p>
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="certificate-card"
                onClick={() => handleViewPdf(cert.fileName, cert.imageFileName, cert.name)}
              >
                <div className="certificate-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2V8H20" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 13H8" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 17H8" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 9H9H8" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="certificate-content">
                  <h3 className="certificate-name">{cert.name}</h3>
                  <p className="certificate-description">{cert.description}</p>
                </div>
                <button
                  className="download-btn"
                  onClick={(e) => handleDownload(cert.fileName, e)}
                  aria-label={`Tải xuống ${cert.name}`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Tải PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal hiển thị PDF */}
      {selectedPdf && (
        <div
          className="pdf-modal-overlay"
          onClick={handleBackdropClick}
        >
          <div className="pdf-modal-container">
            <div className="pdf-modal-header">
              <h2 className="pdf-modal-title">{selectedPdf.certName}</h2>
              <div className="pdf-modal-actions">
                <button
                  className="pdf-download-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(selectedPdf.fileName, e);
                  }}
                  aria-label="Tải xuống PDF"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Tải xuống
                </button>
                <button
                  className="pdf-close-btn"
                  onClick={handleCloseModal}
                  aria-label="Đóng"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="pdf-modal-content">
              <img
                src={`/certificates/${selectedPdf.imageFileName}`}
                alt={selectedPdf.certName}
                className="certificate-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

