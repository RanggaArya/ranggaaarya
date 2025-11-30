'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaPlay, FaBookOpen } from 'react-icons/fa';
import styles from './ProjectsSection.module.css';
import { useInView } from 'react-intersection-observer';
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiMysql,
  SiPython,
  SiFlutter,
  SiPhp,
  SiCss3,
  SiFilament,
  SiHtml5,
} from "react-icons/si";
import { useRef, useState, useEffect } from "react";


const techStackIcons = {
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Laravel: SiLaravel,
  MySQL: SiMysql,
  Python: SiPython,
  Flutter: SiFlutter,
  Dart: SiFlutter,
  PHP: SiPhp,
  React: SiReact,
  PyTorch: SiPython,
  FastAPI: SiPython,
  RAG: SiPython,
  CSS: SiCss3,
  Filament: SiFilament,
  HTML: SiHtml5,
}

// Data projects (sama seperti sebelumnya, saya persingkat di sini)
const projectsData = [
  // ... Paste data project kamu di sini ...
  {
    title: 'Klasifikasi Ekspresi Wajah Majemuk (Skripsi)',
    description: 'Aplikasi untuk mengklasifikasikan ekspresi wajah majemuk menggunakan arsitektur Vision Transformer pada dataset RAF-DB.',
    image: '/ViT.png',
    techStack: ["Python"],
    tags: ['Python', 'PyTorch', 'Vision Transformer', 'Jupyter Notebook', 'Google Colab'],
    liveUrl: 'https://huggingface.co/spaces/RanggaArya/ViT-Compound-Expression',
    githubUrl: 'https://github.com/RanggaArya/ViT-Compound-Expression',
    docUrl: null,
  },
  {
    title: 'One Stop Solution (OSS) PT. Telkom Akses Yogyakarta',
    description: 'Website untuk manajemen karyawan internal maupun eksternal perusahan dalam meningkatkan efisiensi operasional.',
    image: '/Telkom.png',
    techStack: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    tags: ['Laravel', 'PHP', 'JavaScript', 'MySql'],
    liveUrl: null,
    githubUrl: 'https://github.com/RanggaArya/projects',
    docUrl: 'https://www.canva.com/design/DAGMmD-v7EM/fTilYjSCEb4cSY71HWQjgA/edit',
  },
  {
    title: 'Inventaris Barang IT RSUMP',
    description: 'Website untuk manajemen barang IT dengan 3 Role utama(Super admin, Admin, User). Terdapat beberapa fitur utama : Manajemen barang, mastering perangkat, resume perangkat, peminjaman user, penarikan alat, mutasi, dll.',
    image: '/inven-it.png',
    techStack: ["Laravel", "Filament", "PHP", "JavaScript", "MySQL"],
    tags: ['Laravel', 'Filament', 'PHP', 'JavaScript', 'MySql'],
    liveUrl: null,
    githubUrl: null,
    docUrl: null,
  },
  {
    title: 'AI Job Application Screener',
    description: 'Website untuk menyaring pelamar kerja secara otomatis menggunakan model AI berdasarkan CV yang diunggah.',
    image: '/ai-cv.png',
    techStack: ["Python", "React.js", "Node.js"],
    tags: ['Python', 'React.js', 'Node.js', 'RAG', 'Google Api'],
    liveUrl: 'https://frontend-ai-screening-cv-service.vercel.app/',
    githubUrl: 'https://github.com/RanggaArya/ai-screening-cv-v2',
    docUrl: null,
  },
  {
    title: 'Game Ular HP Nokia',
    description: 'Website game untuk hiburan mengisi waktu senggang dan bernostalgia dengan game lama.',
    image: '/snake-nokia.png',
    techStack: ["JavaScript", "TypeScript", "CSS"],
    tags: ['Java Script', 'TypeScript', 'CSS'],
    liveUrl: 'https://snake-game-eight-indol.vercel.app/',
    githubUrl: 'https://github.com/RanggaArya/snake-game',
    docUrl: null,
  },
  {
    title: 'Game Ular Tangga',
    description: 'Website game ular tangga untuk hiburan bersama teman - teman.',
    image: '/snake-ladder.png',
    techStack: ["JavaScript", "TypeScript", "CSS"],
    tags: ['Java Script', 'TypeScript', 'CSS'],
    liveUrl: 'https://snakes-and-ladders-nine.vercel.app/',
    githubUrl: 'https://github.com/RanggaArya/snakes-and-ladders',
    docUrl: null,
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className={`${styles.projectsSection} ${inView ? styles.inView : ""}`}>
      <div className="container">
        <h2 className={styles.title}>Portofolio</h2>

        {/* Tambahkan class global 'hide-scrollbar' di sini */}
        <div className={`${styles.scrollContainer} hide-scrollbar`}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.techStackContainer}>
                  {project.techStack.map((tech) => {
                    const IconComponent = techStackIcons[tech]
                    return IconComponent ? (
                      <div key={tech} className={styles.techIconWrapper} title={tech}>
                        <IconComponent size={24} className={styles.techIcon} />
                      </div>
                    ) : null
                  })}
                </div>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" className={styles.link}>
                      <FaPlay size={14} /> Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" className={styles.link}>
                      <FaGithub size={14} /> Code
                    </Link>
                  )}
                  {project.docUrl && (
                    <Link href={project.docUrl} target="_blank" className={styles.link}>
                      <FaBookOpen size={14} /> Doc
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indikator visual sederhana */}
        <p className={styles.swipeHint}>Geser ke samping untuk melihat lainnya &rarr;</p>
      </div>
    </section>
  );
};

export default ProjectsSection;