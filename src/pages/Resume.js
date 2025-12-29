import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div className="resume-page">
            <div className="resume-container">
                {/* Header Section */}
                <div className="resume-header">
                    <h1 className="resume-name">Lê Thành Nhơn</h1>
                    <p className="resume-title">Full Stack Developer</p>
                    <div className="resume-contact">
                        <div className="contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" />
                                <polyline points="22,6 12,13 2,6" strokeWidth="2" />
                            </svg>
                            <span>Email liên hệ</span>
                        </div>
                        <div className="contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeWidth="2" />
                                <circle cx="12" cy="9" r="2.5" strokeWidth="2" />
                            </svg>
                            <span>TP. Hồ Chí Minh</span>
                        </div>
                        <div className="contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <a href="https://github.com/Nothingtoread" target="_blank" rel="noopener noreferrer">
                                github.com/Nothingtoread
                            </a>
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <section className="resume-section">
                    <h2 className="section-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="12" cy="7" r="4" strokeWidth="2" />
                        </svg>
                        Tóm tắt
                    </h2>
                    <p className="summary-text">
                        Sinh viên năm cuối chuyên ngành Công nghệ Thông tin tại Đại học Công nghệ TP.HCM (HUTECH).
                        Đam mê phát triển phần mềm với kinh nghiệm thực tế về JavaScript và .NET. Có kiến thức nền tảng
                        về Cloud Computing và AWS. Luôn tìm kiếm cơ hội để học hỏi và phát triển kỹ năng lập trình.
                    </p>
                </section>

                {/* Education Section */}
                <section className="resume-section">
                    <h2 className="section-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Học vấn
                    </h2>
                    <div className="education-item">
                        <div className="education-header">
                            <div>
                                <h3>Đại học Công nghệ TP.HCM (HUTECH)</h3>
                                <p className="education-degree">Cử nhân Công nghệ Thông tin</p>
                            </div>
                            <span className="education-period">2021 - 2025 (Dự kiến)</span>
                        </div>
                        <ul className="education-highlights">
                            <li>Chuyên ngành: Phát triển phần mềm</li>
                            <li>Tham gia các dự án nhóm về Web Development</li>
                            <li>Học tập và nghiên cứu về Cloud Computing và DevOps</li>
                        </ul>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="resume-section">
                    <h2 className="section-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Kỹ năng
                    </h2>

                    <div className="skills-category">
                        <h3 className="skills-category-title">Ngôn ngữ lập trình (Thành thạo)</h3>
                        <div className="skills-grid">
                            <div className="skill-item expert">
                                <div className="skill-name">JavaScript</div>
                                <div className="skill-level">
                                    <div className="skill-bar" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item expert">
                                <div className="skill-name">.NET (C#)</div>
                                <div className="skill-level">
                                    <div className="skill-bar" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3 className="skills-category-title">Frontend Development</h3>
                        <div className="skills-tags">
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">HTML5</span>
                            <span className="skill-tag">CSS3</span>
                            <span className="skill-tag">Responsive Design</span>
                            <span className="skill-tag">ES6+</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3 className="skills-category-title">Backend Development</h3>
                        <div className="skills-tags">
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">ASP.NET Core</span>
                            <span className="skill-tag">REST API</span>
                            <span className="skill-tag">SQL</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3 className="skills-category-title">Cloud & DevOps</h3>
                        <div className="skills-tags">
                            <span className="skill-tag">AWS (EC2, S3, RDS)</span>
                            <span className="skill-tag">Cloud Computing</span>
                            <span className="skill-tag">Git/GitHub</span>
                            <span className="skill-tag">Docker (Basic)</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3 className="skills-category-title">Soft Skills</h3>
                        <div className="skills-tags">
                            <span className="skill-tag">Làm việc nhóm</span>
                            <span className="skill-tag">Problem Solving</span>
                            <span className="skill-tag">Tự học</span>
                            <span className="skill-tag">Quản lý thời gian</span>
                        </div>
                    </div>
                </section>

                {/* Experience/Activities Section */}
                <section className="resume-section">
                    <h2 className="section-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M20 7h-9M14 17H5M17 3v18M10 6l-7 7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Hoạt động & Thành tích
                    </h2>

                    <div className="experience-item">
                        <div className="experience-header">
                            <div>
                                <h3>IT Got Talent</h3>
                                <p className="experience-company">Đại học HUTECH</p>
                            </div>
                            <span className="experience-period">2024</span>
                        </div>
                        <ul className="experience-details">
                            <li>Tham gia cuộc thi IT Got Talent do Đại học HUTECH tổ chức</li>
                            <li>Trình bày và demo dự án công nghệ sáng tạo</li>
                            <li>Làm việc nhóm để phát triển giải pháp công nghệ</li>
                            <li>Học hỏi kinh nghiệm từ các đội thi và mentor</li>
                        </ul>
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="resume-section">
                    <h2 className="section-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" />
                            <polyline points="14 2 14 8 20 8" strokeWidth="2" />
                            <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" />
                            <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" />
                        </svg>
                        Chứng chỉ
                    </h2>

                    <div className="certifications-grid">
                        <div className="cert-item">
                            <div className="cert-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" strokeWidth="2" />
                                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="cert-content">
                                <h4>Cisco Cybersecurity Essentials</h4>
                                <p>Cisco Networking Academy</p>
                            </div>
                        </div>

                        <div className="cert-item">
                            <div className="cert-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" strokeWidth="2" />
                                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="cert-content">
                                <h4>JavaScript Essentials 1 & 2</h4>
                                <p>Cisco Networking Academy</p>
                            </div>
                        </div>

                        <div className="cert-item">
                            <div className="cert-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" strokeWidth="2" />
                                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="cert-content">
                                <h4>Networking Basics</h4>
                                <p>Cisco Networking Academy</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Languages Section */}
                <section className="resume-section">
                    <h2 className="section-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeWidth="2" />
                        </svg>
                        Ngôn ngữ
                    </h2>
                    <div className="languages-grid">
                        <div className="language-item">
                            <span className="language-name">Tiếng Việt</span>
                            <span className="language-level">Bản ngữ</span>
                        </div>
                        <div className="language-item">
                            <span className="language-name">Tiếng Anh</span>
                            <span className="language-level">Trung cấp (Đọc hiểu tài liệu kỹ thuật)</span>
                        </div>
                    </div>
                </section>

                {/* Download Button */}
                <div className="resume-download">
                    <button className="download-resume-btn" onClick={() => window.print()}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" />
                            <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" />
                            <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Tải xuống / In Resume
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Resume;
