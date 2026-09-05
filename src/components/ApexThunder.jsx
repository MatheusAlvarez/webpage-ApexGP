import React, { useRef, useEffect } from "react";
import videoKart from "../assets/videoKart_scrub.mp4";

export default function ApexThunder() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let targetTime = 0;

    const renderLoop = () => {
      if (videoRef.current && videoRef.current.duration) {
        const lerpFactor = 0.08;
        let current = videoRef.current.currentTime;
        let newTime = current + (targetTime - current) * lerpFactor;
        
        if (Math.abs(targetTime - current) > 0.005) {
          videoRef.current.currentTime = newTime;
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;
      
      const container = containerRef.current;
      const video = videoRef.current;
      
      const rect = container.getBoundingClientRect();
      const scrollEnd = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      
      if (scrolled >= 0 && scrolled <= scrollEnd) {
        const progress = scrolled / scrollEnd;
        if (video.duration) {
          targetTime = progress * video.duration;
        }
      } else if (scrolled < 0) {
        targetTime = 0;
      } else if (scrolled > scrollEnd) {
        if (video.duration) {
          targetTime = video.duration;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    renderLoop();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh]">
      <section
        className="sticky top-0 w-full h-screen bg-carbon-base px-margin-mobile lg:px-margin-desktop border-b border-surface-container-highest/40 overflow-hidden flex flex-col justify-center"
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl lg:gap-space-2xl relative z-10 w-full">
          <div className="flex flex-col items-center text-center gap-space-2xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-race-red uppercase font-bold tracking-widest bg-race-red/10 px-space-sm py-1 rounded border border-race-red/20">
              ENGENHARIA DE PISTA // CHASSI HOMOLOGADO FIA-CIK
            </span>
            <h2 className="font-headline-xl text-headline-xl text-pure-white uppercase italic font-black mt-space-2xs">
              APEX THUNDER GT // O KART DEFINITIVO
            </h2>
            <p className="font-body-md text-body-md text-silver-telemetry hidden sm:block">
              Construído sobre chassi de cromo-molibdênio com carenagem em fibra
              de carbono, radiador superdimensionado e distribuição de peso
              milimétrica para máxima tração em curvas rápidas.
            </p>
          </div>
          <div
            className="relative w-full bg-carbon-surface/90 border border-white/10 rounded-2xl p-space-md lg:p-space-xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: "rgb(0, 0, 0)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-base/90 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">
              <div className="lg:col-span-3 flex-col gap-space-lg hidden lg:flex">
                <div className="flex flex-col gap-space-2xs bg-carbon-base/80 backdrop-blur-md p-space-md rounded-xl border border-white/10 hover:border-race-red/40 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-race-red animate-pulse"></span>
                    <span className="font-label-caps text-label-caps text-race-red uppercase font-bold">
                      AERODINÂMICA &amp; BICO DIANTEIRO
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-silver-telemetry">
                    Carenagem frontal em fibra de carbono com duto NACA de
                    arrefecimento e downforce otimizado.
                  </p>
                </div>
                <div className="flex flex-col gap-space-2xs bg-carbon-base/80 backdrop-blur-md p-space-md rounded-xl border border-white/10 hover:border-race-red/40 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-speed-yellow"></span>
                    <span className="font-label-caps text-label-caps text-speed-yellow uppercase font-bold">
                      TANQUE &amp; CENTRO DE GRAVIDADE
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-silver-telemetry">
                    Tanque translúcido de 8.5L montado centralmente para baixo
                    centro de massa e equilíbrio dinâmico constante.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
                <div className="absolute w-72 h-72 rounded-full bg-race-red/10 blur-3xl pointer-events-none"></div>
                <div className="absolute w-96 h-96 rounded-full bg-speed-yellow/5 blur-3xl pointer-events-none"></div>
                <video
                  ref={videoRef}
                  className="w-full max-w-2xl h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] relative z-10"
                  src={videoKart}
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
              <div className="lg:col-span-3 flex-col gap-space-lg hidden lg:flex">
                <div className="flex flex-col gap-space-2xs bg-carbon-base/80 backdrop-blur-md p-space-md rounded-xl border border-white/10 hover:border-race-red/40 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sector-green"></span>
                    <span className="font-label-caps text-label-caps text-sector-green uppercase font-bold">
                      SISTEMA DE ARREFECIMENTO
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-silver-telemetry">
                    Radiador de alumínio de alta vazão com tomada de ar direta
                    para estabilidade térmica extrema em provas de endurance.
                  </p>
                </div>
                <div className="flex flex-col gap-space-2xs bg-carbon-base/80 backdrop-blur-md p-space-md rounded-xl border border-white/10 hover:border-race-red/40 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pure-white"></span>
                    <span className="font-label-caps text-label-caps text-pure-white uppercase font-bold">
                      BANCO ANATÔMICO &amp; ERGONOMIA
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-silver-telemetry">
                    Assento em concha de resina leve com absorção de impacto e
                    volante esportivo revestido em alcantara com empunhadura
                    ergonômica.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-lg mt-space-lg border-t border-white/10">
              <div className="flex flex-col bg-carbon-base/60 p-space-sm rounded-lg border border-white/5">
                <span className="font-label-caps text-label-caps text-silver-telemetry uppercase text-[10px]">
                  POTÊNCIA MÁXIMA
                </span>
                <span className="font-headline-sm text-headline-sm text-pure-white font-black italic mt-1">
                  28.5 CV
                </span>
                <span className="font-body-sm text-body-sm text-sector-green text-[12px]">
                  @ 11.500 RPM
                </span>
              </div>
              <div className="flex flex-col bg-carbon-base/60 p-space-sm rounded-lg border border-white/5">
                <span className="font-label-caps text-label-caps text-silver-telemetry uppercase text-[10px]">
                  RELAÇÃO PESO/POTÊNCIA
                </span>
                <span className="font-headline-sm text-headline-sm text-pure-white font-black italic mt-1">
                  2.8 KG / CV
                </span>
                <span className="font-body-sm text-body-sm text-speed-yellow text-[12px]">
                  Chassi cromo-molibdênio
                </span>
              </div>
              <div className="flex flex-col bg-carbon-base/60 p-space-sm rounded-lg border border-white/5">
                <span className="font-label-caps text-label-caps text-silver-telemetry uppercase text-[10px]">
                  FREIOS
                </span>
                <span className="font-headline-sm text-headline-sm text-pure-white font-black italic mt-1">
                  HIDRÁULICO
                </span>
                <span className="font-body-sm text-body-sm text-silver-telemetry text-[12px]">
                  Disco Ventilado Flutuante
                </span>
              </div>
              <div className="flex flex-col bg-carbon-base/60 p-space-sm rounded-lg border border-white/5">
                <span className="font-label-caps text-label-caps text-silver-telemetry uppercase text-[10px]">
                  VELOCIDADE FINAL
                </span>
                <span className="font-headline-sm text-headline-sm text-race-red font-black italic mt-1">
                  130+ KM/H
                </span>
                <span className="font-body-sm text-body-sm text-sector-green text-[12px]">
                  Pista CIK-FIA Grau A
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
