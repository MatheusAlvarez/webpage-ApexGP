
import React from 'react';
import './Circuit.css';

export default function Circuit() {
  return (
    <section className="circuit" id="circuito-telemetria">
      <div className="circuit__container">
        <div className="circuit__header">
          <span className="circuit__subtitle">TRAÇADO INTERNACIONAL CIK-FIA GRAU A</span>
          <h2 className="circuit__title">CIRCUITO APEX RING & TELEMETRIA EM TEMPO REAL</h2>
        </div>
        
        <div className="circuit__grid">
          {/* Interactive Track Map */}
          <div className="circuit__map-card">
            <div className="circuit__card-header">
              <div className="circuit__card-title-group">
                <span className="material-symbols-outlined text-race-red">alt_route</span>
                <span className="circuit__card-title">TRAÇADO OFICIAL (1.280M)</span>
              </div>
              <span className="circuit__card-badge">12 CURVAS // 3 SETORES</span>
            </div>
            
            <div className="circuit__map-wrapper">
              <svg className="circuit__map-svg" fill="none" stroke="currentColor" viewBox="0 0 500 320">
                <defs>
                  <pattern height="20" id="circuit-grid" patternUnits="userSpaceOnUse" width="20">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"></path>
                  </pattern>
                </defs>
                <rect fill="url(#circuit-grid)" height="100%" width="100%"></rect>
                <path d="M 70,240 L 220,240 C 270,240 310,210 320,170 C 330,130 380,100 420,100 C 455,100 465,130 450,165 C 430,210 390,260 320,260 L 150,260 C 100,260 60,210 60,160 C 60,110 110,60 170,60 L 280,60 C 320,60 350,85 340,115 C 330,140 290,150 250,150 L 130,150 C 90,150 70,200 70,240 Z" stroke="rgba(225,6,0,0.2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22"></path>
                {/* Sector 1: Red */}
                <path d="M 70,240 L 220,240 C 270,240 310,210 320,170" stroke="#E10600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
                {/* Sector 2: Yellow */}
                <path d="M 320,170 C 330,130 380,100 420,100 C 455,100 465,130 450,165 C 430,210 390,260 320,260 L 230,260" stroke="#FFDE00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
                {/* Sector 3: Green */}
                <path d="M 230,260 L 150,260 C 100,260 60,210 60,160 C 60,110 110,60 170,60 L 280,60 C 320,60 350,85 340,115 C 330,140 290,150 250,150 L 130,150 C 90,150 70,200 70,240 Z" stroke="#00F076" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
                <line stroke="#FFFFFF" strokeDasharray="3 3" strokeWidth="4" x1="140" x2="140" y1="230" y2="250"></line>
                
                <circle cx="140" cy="240" fill="#FFFFFF" r="4"></circle>
                <text fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" x="145" y="235">LARGADA / FINISH</text>
                <text fill="#E10600" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" x="210" y="230">RETA DOS BOXES (180M)</text>
                <text fill="#FFDE00" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" x="350" y="140">CURVA SENNA (T4)</text>
                <text fill="#00F076" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" x="150" y="80">PARABOLICA ALTA VELOCIDADE</text>
                
                <circle className="circuit__map-blip-ping" cx="320" cy="170" fill="#FFFFFF" r="5"></circle>
                <circle cx="320" cy="170" fill="#E10600" r="4"></circle>
              </svg>
            </div>
            
            <div className="circuit__sectors">
              <div className="circuit__sector"><span className="circuit__sector-dot circuit__sector-dot--red"></span>SETOR 1 (VELOCIDADE)</div>
              <div className="circuit__sector"><span className="circuit__sector-dot circuit__sector-dot--yellow"></span>SETOR 2 (TÉCNICO)</div>
              <div className="circuit__sector"><span className="circuit__sector-dot circuit__sector-dot--green"></span>SETOR 3 (CHICANE)</div>
            </div>
          </div>
          
          {/* Live Leaderboard */}
          <div className="circuit__leaderboard-card">
            <div className="circuit__card-header">
              <div className="circuit__card-title-group">
                <span className="circuit__live-dot"></span>
                <span className="circuit__card-title">LEADERBOARD AO VIVO // HOJE</span>
              </div>
              <span className="circuit__card-desc">MYLAPS TRANSPONDER V5</span>
            </div>
            
            <div className="circuit__table-wrapper">
              <table className="circuit__table">
                <thead>
                  <tr>
                    <th>POS</th>
                    <th>PILOTO</th>
                    <th>KART</th>
                    <th className="text-right">S1</th>
                    <th className="text-right">S2</th>
                    <th className="text-right">S3</th>
                    <th className="text-right">MELHOR VOLTA</th>
                    <th className="text-right">GAP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="circuit__row--highlight">
                    <td className="circuit__td--pos text-speed-yellow">P1</td>
                    <td className="circuit__td--driver text-pure-white">Lucas "Apex" V. <span className="material-symbols-outlined text-[14px] text-speed-yellow">star</span></td>
                    <td className="circuit__td--kart">PRO #09</td>
                    <td className="circuit__td--val text-tertiary-fixed">14.102</td>
                    <td className="circuit__td--val text-tertiary-fixed">15.420</td>
                    <td className="circuit__td--val text-sector-green">13.290</td>
                    <td className="circuit__td--val text-sector-green font-black">42.812</td>
                    <td className="circuit__td--gap">LEADER</td>
                  </tr>
                  <tr>
                    <td className="circuit__td--pos text-pure-white">P2</td>
                    <td className="circuit__td--driver text-pure-white">Matheus Barrichello</td>
                    <td className="circuit__td--kart">PRO #14</td>
                    <td className="circuit__td--val text-sector-green">14.180</td>
                    <td className="circuit__td--val text-speed-yellow">15.495</td>
                    <td className="circuit__td--val text-sector-green">13.261</td>
                    <td className="circuit__td--val text-pure-white font-black">42.936</td>
                    <td className="circuit__td--gap text-race-red">+0.124</td>
                  </tr>
                  <tr className="circuit__row--highlight">
                    <td className="circuit__td--pos text-pure-white">P3</td>
                    <td className="circuit__td--driver text-pure-white">Carolina Rossi</td>
                    <td className="circuit__td--kart">PRO #04</td>
                    <td className="circuit__td--val text-sector-green">14.215</td>
                    <td className="circuit__td--val text-sector-green">15.510</td>
                    <td className="circuit__td--val">13.340</td>
                    <td className="circuit__td--val text-pure-white font-black">43.065</td>
                    <td className="circuit__td--gap text-race-red">+0.253</td>
                  </tr>
                  <tr>
                    <td className="circuit__td--pos">P4</td>
                    <td className="circuit__td--driver text-pure-white">Gabriel 'Senninha' T.</td>
                    <td className="circuit__td--kart">ROTAX #01</td>
                    <td className="circuit__td--val">14.310</td>
                    <td className="circuit__td--val text-sector-green">15.480</td>
                    <td className="circuit__td--val">13.390</td>
                    <td className="circuit__td--val text-pure-white font-black">43.180</td>
                    <td className="circuit__td--gap text-race-red">+0.368</td>
                  </tr>
                  <tr className="circuit__row--highlight">
                    <td className="circuit__td--pos">P5</td>
                    <td className="circuit__td--driver text-pure-white">Rodrigo 'Turbo' Lima</td>
                    <td className="circuit__td--kart">SPRINT #22</td>
                    <td className="circuit__td--val">14.520</td>
                    <td className="circuit__td--val">15.710</td>
                    <td className="circuit__td--val text-sector-green">13.412</td>
                    <td className="circuit__td--val text-pure-white font-black">43.642</td>
                    <td className="circuit__td--gap text-race-red">+0.830</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="circuit__footer">
              <span>ROXO = MELHOR DO DIA // VERDE = RECORDE PESSOAL</span>
              <a href="#" className="circuit__link">
                VER RANKING COMPLETO DO MÊS <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
