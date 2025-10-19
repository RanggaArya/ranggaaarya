'use client'; // <-- Tambahkan ini di baris paling atas

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaPlay, FaBookOpen } from 'react-icons/fa';
import styles from './ProjectsSection.module.css';
import { useInView } from 'react-intersection-observer'; // <-- Import

const projectsData = [
  {
    title: 'Klasifikasi Ekspresi Wajah Majemuk (Skripsi)',
    description: 'Aplikasi untuk mengklasifikasikan ekspresi wajah majemuk menggunakan arsitektur Vision Transformer pada dataset RAF-DB.',
    image: '/ViT.png',
    tags: ['#Python', '#PyTorch', '#Vision Transformer', '#TensorFlow', '#Pillow', '#Computer Vision'],
    liveUrl: 'https://huggingface.co/spaces/RanggaArya/ViT-Compound-Expression',
    githubUrl: 'https://github.com/RanggaArya/ViT-Compound-Expression',
    DocUrl: null,
  },
  {
    title: 'One Stop Solution (OSS) PT. Telkom Akses Yogyakarta',
    description: 'Website untuk manajemen karyawan internal maupun eksternal perusahan dalam meningkatkan efisiensi operasional.',
    image: '/Telkom.png',
    tags: ['#Laravel', '#PHP', '#JavaScript', '#MySql', '#HTML+CSS'],
    liveUrl: null,
    githubUrl: 'https://github.com/RanggaArya/projects',
    DocUrl: 'https://www.canva.com/design/DAGMmD-v7EM/fTilYjSCEb4cSY71HWQjgA/edit',
  },
  {
    title: 'AI Job Application Screener',
    description: 'Website untuk menyaring pelamar kerja secara otomatis menggunakan model AI berdasarkan CV yang diunggah sesuai dengan deskripsi pekerjaan dan studycase dari perusahaan.',
    image: '/ai-cv.png',
    tags: ['#Python', '#JavaScript', '#React', '#Vite', '#Git', '#RAG', '#Google Api', '#FastApi'],
    liveUrl: 'https://frontend-ai-screening-cv-service.vercel.app/',
    githubUrl: 'https://github.com/RanggaArya/ai-screening-cv-v2',
    DocUrl: null,
  },
  
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className={`${styles.projectsSection} ${inView ? 'fade-in-up' : ''}`}>
      <div className="container">
        <h2 className={styles.title}>Portofolio</h2>
        <div className={styles.grid}>
          {projectsData.map((project) => (
            <div key={project.title} className={styles.card}>
              <Image src={project.image} alt={project.title} width={500} height={300} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <div className={styles.links}>
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" className={styles.link}>
                      <span><FaPlay /></span> Live Demo
                    </Link>
                  )}
                  <Link href={project.githubUrl} target="_blank" className={styles.link}>
                    <span><FaGithub /></span> Kode Sumber
                  </Link>
                  {project.DocUrl && (
                    <Link href={project.DocUrl} target="_blank" className={styles.link}>
                      <span><FaBookOpen /></span> Doc
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;