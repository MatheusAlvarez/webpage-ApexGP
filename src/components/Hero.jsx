
import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__tags">
              <span className="hero__tag hero__tag--red">TEMPORADA 2025 ABERTA</span>
              <span className="hero__tag hero__tag--dark-yellow">CIRCUITO INTERNACIONAL // 1.280M</span>
              <span className="hero__tag hero__tag--dark-green">TRANSPONDER MYLAPS X2 INCLUSO</span>
            </div>
            <h1 className="hero__title">
              SINTA A ADRENALINA DA <span className="text-race-red">VELOCIDADE</span> PURA
            </h1>
            <p className="hero__desc">
              Viva a emoção das pistas profissionais com telemetria digital F1 em tempo real, karts de 390cc calibrados a laser e circuitos homologados para pilotos e entusiastas de alta octanagem.
            </p>
            <div className="hero__features">
              <span className="hero__feature"><span className="hero__feature-dot hero__feature-dot--green"></span>F1 STYLE TIMING</span>
              <span className="hero__feature"><span className="hero__feature-dot hero__feature-dot--yellow"></span>390CC LASER BALANCED</span>
              <span className="hero__feature"><span className="hero__feature-dot hero__feature-dot--red"></span>HOMOLOGAÇÃO FIA-CIK</span>
            </div>
            <div className="hero__actions">
              <a className="hero__btn hero__btn--primary" href="#calculadora-grid">
                <span className="material-symbols-outlined">sports_score</span>AGENDAR BATERIA AGORA
              </a>
              <a className="hero__btn hero__btn--ghost" href="#circuito-telemetria">
                <span className="material-symbols-outlined">map</span>VER CIRCUITO INTERATIVO
              </a>
            </div>
          </div>
          <div className="hero__image-section">
            <div className="hero__image-wrapper">
              <img className="hero__image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMPceSbjSfR77veOqrUvpqTTfBUW8bslb_iEo7crg_YSRyU69YUstS6HvJTQoYwFp4q4bCoc-HISB2BmQlx1V9pmj8IZU3-DA9dmJm6P6wRD90HIR_Dsjd1OAzc0apRRp_fS-vu7OriI2b4ymCMD3xmKovGA_MXFlrfZSJbTauJsPrNdxT72awLxRV81xGruWbcOoJfdKpomr1mma9WLExW42BZCEJWkm121utSTCwlYR8jR2Eo_np" alt="Racing" />
              <div className="hero__image-overlay"></div>
              <div className="hero__image-top-left">
                <div className="hero__live-badge">
                  <span className="hero__live-dot"></span> LIVE TRACK // SESSÃO EM ANDAMENTO
                </div>
                <span className="hero__live-subtitle">CIRCUITO NOTURNO // ILUMINAÇÃO LED FIA</span>
              </div>
              <div className="hero__image-top-right">
                <span className="material-symbols-outlined text-race-red">videocam</span> ON-BOARD 4K HDR
              </div>
              <div className="hero__stats">
                <div className="hero__stat">
                  <span className="hero__stat-label">TOP SPEED</span>
                  <div className="hero__stat-value">130<span className="hero__stat-unit hero__stat-unit--yellow">KM/H</span></div>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-label">LATERAL G</span>
                  <div className="hero__stat-value">2.4<span className="hero__stat-unit hero__stat-unit--green">G</span></div>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-label">0-100 KM/H</span>
                  <div className="hero__stat-value">3.8<span className="hero__stat-unit">SEG</span></div>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-label">PIT LANE</span>
                  <div className="hero__stat-value-alt"><span className="hero__stat-dot--green"></span> ABERTO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero__metrics">
          <div className="hero__metric">
            <span className="hero__metric-label">EXTENSÃO DO CIRCUITO</span>
            <div className="hero__metric-value">1.280<span className="hero__metric-unit hero__metric-unit--yellow">METROS</span></div>
            <span className="hero__metric-desc">Asfalto CIK-FIA Grau A</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-label">CONFIGURAÇÃO TÉCNICA</span>
            <div className="hero__metric-value">12<span className="hero__metric-unit hero__metric-unit--green">CURVAS</span></div>
            <span className="hero__metric-desc">Chicanes & parabólica de alta</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-label">PRECISÃO TELEMETRIA</span>
            <div className="hero__metric-value">0.001<span className="hero__metric-unit hero__metric-unit--red">SEG</span></div>
            <span className="hero__metric-desc">Transponders MyLaps X2</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-label">CAPACIDADE DO GRID</span>
            <div className="hero__metric-value">24<span className="hero__metric-unit">KARTS</span></div>
            <span className="hero__metric-desc">Largada simultânea tipo F1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
