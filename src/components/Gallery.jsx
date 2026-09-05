
import React from 'react';
import './Gallery.css';

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__header">
          <div>
            <span className="gallery__subtitle">GALERIA PIT LANE</span>
            <h2 className="gallery__title">NO CALOR DA DISPUTA</h2>
          </div>
          <span className="gallery__desc">FOTOGRAFIA PROFISSIONAL EM ALTA VELOCIDADE</span>
        </div>
        
        <div className="gallery__grid">
          <div className="gallery__item">
            <img className="gallery__image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTch7cy-7qmA1rvNi0bxy-eNGHdcU1dhfeJzjaRKmKDn--Hxi_nZehdYhajkaZjRowSQx5Og0IwGExsZzOP6Fg0OQxXuAZ5szy4mEa3CuphGKeAAF3BctYRgRdiWw1SOyGR0xy9weh4gaCCfEpF_VSkrxCfj8QtbN-yUHnfnDPGBQ5_qeXxJVpekJIVxNMkzC_RozoPolCOR8cVPNY5neVpdF7DLdFBbQ9TMar_rGQGLVnI3N6v1_n" alt="Foco absoluto" />
            <div className="gallery__overlay">
              <span className="gallery__overlay-text">FOCO ABSOLUTO NO GRID</span>
            </div>
          </div>
          
          <div className="gallery__item">
            <img className="gallery__image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzSfCH64fYA37GoSY2lYMn_HKyj8jKBBEJ8Iefe_2UrCuzmEnUrz5tlcE34CcyFJypq8-olzVPU4Vikappo02iTxheXoC9SY3ji-KcTFhfhN2cSH7fSPZKtQhALVdxI9f2svG7y56Jtmccm9f6M17GidbB3_xjoPZJ6W-4GS4d6NWyBbOtaevDPcNkXAGxvYuwSiLju0UtTN1nIYM7QkpqQL1epWdeSv5PuD7fPPP5cxtvt6USdiA1" alt="Disputas roda a roda" />
            <div className="gallery__overlay">
              <span className="gallery__overlay-text">DISPUTAS RODA A RODA</span>
            </div>
          </div>
          
          <div className="gallery__item">
            <img className="gallery__image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEtIgRqthSoDfDY20rzRg1mivLM9s-6A-EHz0mfdu0tThb3SQGV-2VlhvhWJgw8HNGYMfebiImNj5zHu_aHfN2YLH59yXdkLbqp_fGKj3FNn81nB8WSTEHsuRQA31toootMVOqW6yjNiRZ8L1L1CqmgtQQtJq_5NUmPoBg9fgN9duB1iWyTTDnoPUdWijcE92v4hyyprMZk1fNqCNI-_1Jl_VglmKA0j2yXms_kyEyCBOxFFShX32I" alt="Glória do pódio" />
            <div className="gallery__overlay">
              <span className="gallery__overlay-text">A GLÓRIA DO PÓDIO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
