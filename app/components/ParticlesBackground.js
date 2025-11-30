'use client';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Transparan agar menyatu dengan CSS background
        },
      },
      fpsLimit: 120, // Lebih halus di layar high refresh rate
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Efek klik menambah partikel/mendorong
          },
          onHover: {
            enable: true,
            mode: "grab", // Efek jaring laba-laba saat hover
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 140,
            links: {
              opacity: 0.5, // Garis penghubung cursor lebih transparan
              color: "#ffffff"
            },
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // Tetap putih (nanti diinver di Light Mode via CSS)
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2, // Garis antar partikel sangat tipis (subtle)
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.8, // GERAKAN LAMBAT = MODERN & ELEGAN
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200, // Jumlah partikel pas, tidak terlalu ramai
        },
        opacity: {
          value: 0.3, // Transparansi dasar
          random: true, // Random agar ada efek kedalaman (jauh/dekat)
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        shape: {
          type: "circle", // Lingkaran lebih timeless daripada segitiga
        },
        size: {
          value: { min: 1, max: 5 }, // Variasi ukuran kecil
          random: true,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        // Style zIndex -1 agar selalu di belakang konten
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;