import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './ProjectDetail.css';

function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="project-detail-page">
                <div className="project-detail-container">
                    <h1>Dự án không tồn tại</h1>
                    <Link to="/projects" className="back-btn">← Quay lại Projects</Link>
                </div>
            </div>
        );
    }

    const handleDownload = (documentPath, documentName) => {
        try {
            const link = document.createElement('a');
            link.href = documentPath;
            link.download = documentName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Lỗi khi tải file:', error);
            alert('Có lỗi xảy ra khi tải file. Vui lòng thử lại.');
        }
    };

    return (
        <div className="project-detail-page">
            <div className="project-detail-container">
                <button onClick={() => navigate('/projects')} className="back-btn">
                    ← Quay lại Projects
                </button>

                <div className="project-detail-header">
                    <img src={project.image} alt={project.title} className="project-detail-image" />
                    <div className="project-detail-header-content">
                        <div className="project-category-badge">{project.category}</div>
                        <h1>{project.title}</h1>
                        <p className="project-date">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {new Date(project.date).toLocaleDateString('vi-VN', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                </div>

                <div className="project-detail-content">
                    <div
                        className="project-description-content"
                        dangerouslySetInnerHTML={{ __html: project.description }}
                    />

                    <div className="project-features-section">
                        <h2>Tính năng chính</h2>
                        <ul className="features-list">
                            {project.features.map((feature, index) => (
                                <li key={index}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="project-tech-section">
                        <h2>Công nghệ sử dụng</h2>
                        <div className="tech-badges">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="project-actions-section">
                        {project.repository && (
                            <a
                                href={project.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-btn github-action-btn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View Repository on GitHub
                            </a>
                        )}

                        {project.documentPath && (
                            <button
                                className="action-btn download-action-btn"
                                onClick={() => handleDownload(project.documentPath, project.documentName)}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Tải Document dự án
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
