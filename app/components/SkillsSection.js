'use client';

import {
    FaReact, FaNodeJs, FaJs, FaLaravel, FaPython, FaPhp
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiMysql, SiFlutter, SiDart
} from 'react-icons/si';
import styles from './SkillsSection.module.css';

// Tambahkan properti 'color' dengan warna brand asli
const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    // Next.js biarkan null agar mengikuti warna text tema (hitam/putih)
    { name: 'Next.js', icon: <SiNextdotjs />, color: null },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
    { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
];

const SkillsSection = () => {
    return (
        <section id="skills" className={styles.skillsSection}>
            <h2 className={styles.label}>Skills</h2>
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    {/* Loop 2x untuk efek infinite scroll tanpa putus */}
                    {[...skills, ...skills].map((skill, index) => (
                        <div className={styles.slide} key={index}>
                            {/* Terapkan inline style color jika ada */}
                            <span
                                className={styles.icon}
                                style={skill.color ? { color: skill.color } : {}}
                            >
                                {skill.icon}
                            </span>
                            <span className={styles.name}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;