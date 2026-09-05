
import React from 'react';
import './Fleet.css';

export default function Fleet() {
  return (
    <section className="fleet">
      <div className="fleet__container">
        <div className="fleet__header">
          <div className="fleet__title-group">
            <span className="fleet__subtitle">ENGENHARIA AUTOMOBILÍSTICA DE PONTA</span>
            <h2 className="fleet__title">FROTA DE ALTA PERFORMANCE</h2>
          </div>
          <p className="fleet__desc">
            Chassis homologados internacionalmente, motores balanceados eletronicamente e pneus de composto macio com grip térmico profissional.
          </p>
        </div>
        
        <div className="fleet__grid">
          <div className="kart-card">
            <div className="kart-card__image-wrapper">
              <img className="kart-card__image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApqqwq_bh8nBXXUdG0esOpR78KugxEuiX9ycQ-SJBsMUTSBTIcXQAdIrNRfrqBL2dP5YzK3Opu1EqG-meAlsJwzNFbLjwMYFz3LjBnvGKJP3Ca8fUsClqzuVhSQJdwE22HpCTewy4EjCrmquZ0dEbRvVFY9Rfc9p02zvItG340jPAVdohLkDFr_7MlghGg6yPo-Z0_7NGQV3ShsSc4S6fdjgFy9OvFQTMMd73O1ETRd_jvSOYFfTp1" alt="Sprint 200cc" />
              <div className="kart-card__badge-top-left kart-card__badge--dark">INICIANTES & GRUPOS</div>
              <div className="kart-card__badge-bottom-right kart-card__badge--red">65 KM/H</div>
            </div>
            <div className="kart-card__content">
              <div className="kart-card__info">
                <h3 className="kart-card__title">SPRINT 200CC 4T</h3>
                <p className="kart-card__desc">O equilíbrio ideal entre dirigibilidade, segurança e diversão pura para estreantes e baterias de confraternização.</p>
              </div>
              <div className="kart-card__specs">
                <div className="kart-card__spec"><span className="kart-card__spec-label">POTÊNCIA</span><span className="kart-card__spec-value">6.5 HP HONDA GX</span></div>
                <div className="kart-card__spec"><span className="kart-card__spec-label">CHASSI</span><span className="kart-card__spec-value">AÇO TUBULAR FIA</span></div>
                <div className="kart-card__spec"><span className="kart-card__spec-label">FREIOS</span><span className="kart-card__spec-value">DISCO MECÂNICO</span></div>
                <div className="kart-card__spec"><span className="kart-card__spec-label">PNEUS</span><span className="kart-card__spec-value kart-card__spec-value--green">COMPOSTO MÉDIO</span></div>
              </div>
              <button className="kart-card__btn">
                <span>ESCOLHER ESTE KART</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          
          <div className="kart-card kart-card--featured">
            <div className="kart-card__accent-line"></div>
            <div className="kart-card__image-wrapper">
              <img className="kart-card__image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWX7oE6wRnGIG65mKWyFoY-1eO81dWc_2vbJcrY-WO7y9wUCx6rM5pFmhFWqzauy4hbbYgUCmPptEHmQ-_i4ZwSAsQws0L3WU0WZI9gWI6BDHSuv09uTkDITIyXr0GRQviGk94htu5JlhNNqsbn7MMgv01LqdB__MgHL7GsiDPhpdrZR5fuJxljetNXIJZfKbpxz1NC-3IOd2w0p8mYYT5lt_k5vmy0ZM7R8iznacpbPqfFgAJWhTT" alt="Apex Pro 390cc" />
              <div className="kart-card__badge-top-left kart-card__badge--red-solid">MAIS ESCOLHIDO // PRO</div>
              <div className="kart-card__badge-bottom-right kart-card__badge--dark-yellow">95 KM/H</div>
            </div>
            <div className="kart-card__content">
              <div className="kart-card__info">
                <div className="kart-card__status-dot-text"><span className="kart-card__dot--green"></span>TELEMETRIA INTEGRADA AO VOLANTE</div>
                <h3 className="kart-card__title">APEX PRO 390CC 4T</h3>
                <p className="kart-card__desc">Projetado para pilotos regulares que buscam ultrapassagens técnicas milimétricas, aceleração visceral e feedback de chassi cirúrgico.</p>
              </div>
              <div className="kart-card__specs">
                <div className="kart-card__spec"><span className="kart-card__spec-label">POTÊNCIA</span><span className="kart-card__spec-value">13.0 HP TUNED</span></div>
                <div className="kart-card__spec"><span className="kart-card__spec-label">PNEUS</span><span className="kart-card__spec-value kart-card__spec-value--yellow">SLICK ULTRA SOFT</span></div>
                <div className="kart-card__spec"><span className="kart-card__spec-label">FREIOS</span><span className="kart-card__spec-value">HIDRÁULICO VENTILADO</span></div>
                <div className="kart-card__spec"><span className="kart-card__spec-label">VOLANTE</span><span className="kart-card__spec-value">DISPLAY RPM O-LED</span></div>
              </div>
              <button className="kart-card__btn kart-card__btn--primary">
                <span>PILOTAR APEX PRO</span>
                <span className="material-symbols-outlined">bolt</span>
              </button>
            </div>
          </div>
          
          <div className="kart-card">
            <div className="kart-card__image-wrapper">
              <img className="kart-card__image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrO1A8VUDc-rGJdykxekcA7MtnU2vGTpr79ReUSpPIR1kVReTd22RyNyQsg5efl3-qnZjXylt2LJqMupvWhS2mWTC3tAXA5HZ8FgWKSua_pef6xXhsZ3Zoqtu2yZ3Z5KltGuzyH_0SMEoRcZis5rprkViHO5tKVgDKbt4eIsmzQqq5dC1JUkUwb-Q4mCtXa8ERDh_KaHD23lWiIt5tAvXFkCpQ14909rys_OXtUA2VyalaxkIKAdnX" alt="Rotax Max 125cc" />
              <div className="kart-card__badge-top-left kart-card__badge--grey-red">PILOTOS LICENCIADOS</div>
              <div className="kart-card__badge-bottom-right kart-card__badge--red">130 KM/H</div>
            </div>
            <div className="kart-card__content">
              <div className="kart-card__info">
                <h3 className="kart-card__title">SUPERKART ROTAX MAX 125CC 2T</h3>
                <p className="kart-card__desc">Pura ferocidade de 2 tempos. Giro de 14.000 RPM, frenagem brutal e relação peso-potência digna de monopostos de fórmula.</p>
              </div>
              <div className="kart-card__specs">
                <div className="kart-card__spec"><span className="kart-card__spec-label">POTÊNCIA</span><span className="kart-card__spec-value">28.5 HP @ 11.5K RPM</span></div>
                <div className="kart-card__spec"><span className="kart-card__spec-label">PESO / POTÊNCIA</span><span className="kart-card__spec-value kart-card__spec-value--red">2.8 KG/HP</span></div>
                <div className="kart-card__spec"><span className="kart-card__spec-label">FREIOS</span><span className="kart-card__spec-value">DUPLO DISCO FLUTUANTE</span></div>
                <div className="kart-card__spec"><span className="kart-card__spec-label">REQUISITO</span><span className="kart-card__spec-value kart-card__spec-value--yellow">EXPERIÊNCIA PRÉVIA</span></div>
              </div>
              <button className="kart-card__btn">
                <span>SOLICITAR AVALIAÇÃO</span>
                <span className="material-symbols-outlined">verified</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
