
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__logo-group">
              <img alt="Apex Karting Logo" className="footer__logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhRb75XqUCELi-di-3rDIQshVvDGMF4f3BblS1as4eUDiURRH4r9OHqGdoh8qABH5RzcXx8hgphRbCslRHFAh_crevaGYq1Q7fchzFB6p-bNoPmw2cuxBSzCCTZj-GG_atod3VEO_qc9D7XfXHCYTJhK5mJtS3eSUFubiF0mGv9OXtiNCsiHMgY3DltyWIVBAG6KGJXw6Lk77ixwm-3bT8v1I64FJpxa0wqdermXlxdwlfemSp-Fl4" />
              <span className="footer__logo-text">APEX<span className="footer__logo-accent">GP</span></span>
            </div>
            <p className="footer__desc">Complexo automobilístico com telemetria F1 real-time, karts de 390cc calibrados por telemetria laser e cronometragem oficial MyLaps.</p>
            <div className="footer__badge">
              <span className="footer__badge-dot"></span> Pista Homologada CIK-FIA Grau A
            </div>
          </div>
          
          <div className="footer__col">
            <h4 className="footer__col-title">Sessões & Horários</h4>
            <ul className="footer__list">
              <li className="footer__list-item"><span>Terça a Sexta:</span> <span className="footer__list-val">14:00 - 23:30</span></li>
              <li className="footer__list-item"><span>Sábados e Feriados:</span> <span className="footer__list-val">09:00 - 00:00</span></li>
              <li className="footer__list-item"><span>Domingos (Campeonatos):</span> <span className="footer__list-val">08:00 - 21:00</span></li>
              <li className="footer__list-item footer__list-item--red"><span>Segundas:</span> <span className="footer__list-val--caps">Fechado p/ Manutenção</span></li>
            </ul>
          </div>
          
          <div className="footer__col">
            <h4 className="footer__col-title">Race Control & Bandeiras</h4>
            <div className="footer__flags">
              <div className="footer__flag"><span className="footer__flag-dot footer__flag-dot--green"></span> Verde: Corrida liberada em pista</div>
              <div className="footer__flag"><span className="footer__flag-dot footer__flag-dot--yellow"></span> Amarela: Perigo no setor. Reduzir</div>
              <div className="footer__flag"><span className="footer__flag-dot footer__flag-dot--red"></span> Vermelha: Parada imediata nos boxes</div>
            </div>
          </div>
          
          <div className="footer__col">
            <h4 className="footer__col-title">Pit Wall Dispatch</h4>
            <p className="footer__desc">Receba convites de grids exclusivos, cronogramas de etapas e atualizações de telemetria.</p>
            <div className="footer__form">
              <div className="footer__input-group">
                <input type="email" placeholder="SEU E-MAIL MOTORSPORT" className="footer__input" />
                <button className="footer__submit"><span className="material-symbols-outlined">send</span></button>
              </div>
              <span className="footer__form-note">DADOS CRIPTOGRAFADOS PADRÃO FIA</span>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <div className="footer__partners">
            <span className="footer__partner footer__partner--active">TELEMETRIA OFICIAL</span>
            <span className="footer__partner">MYLAPS X2</span>
            <span className="footer__partner">SPARCO RACING</span>
            <span className="footer__partner">PIRELLI MOTORSPORT</span>
            <span className="footer__partner">ROTAX MAX</span>
          </div>
          <div className="footer__copyright">
            © 2025 APEX KARTING GP. ALL RIGHTS RESERVED. HIGH PERFORMANCE MOTORSPORT.
          </div>
        </div>
      </div>
    </footer>
  );
}
