
import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <div className="experience__title-group">
            <span className="experience__subtitle">PADRÃO DE AUTÓDROMO INTERNACIONAL</span>
            <h2 className="experience__title">A EXPERIÊNCIA DE UM FÓRMULA 1</h2>
          </div>
          <p className="experience__desc">
            Não é apenas uma bateria de kart: é um fim de semana de corrida completo para você, seu grupo de amigos ou evento corporativo de liderança.
          </p>
        </div>
        
        <div className="experience__grid">
          <div className="exp-card">
            <div className="exp-card__icon exp-card__icon--red"><span className="material-symbols-outlined text-[28px]">sports</span></div>
            <h3 className="exp-card__title">BRIEFING COM INSTRUTORES PRO</h3>
            <p className="exp-card__desc">Aulas de traçado ideal, pontos de frenagem tardia, técnicas de tangência e regras de bandeiras FIA ministradas por pilotos federados.</p>
          </div>
          
          <div className="exp-card">
            <div className="exp-card__icon exp-card__icon--green"><span className="material-symbols-outlined text-[28px]">timer</span></div>
            <h3 className="exp-card__title">CRONOMETRAGEM MYLAPS X2</h3>
            <p className="exp-card__desc">Chips RFID individuais com precisão de milésimos de segundo instalados em cada chassi com envio imediato para o seu smartphone.</p>
          </div>
          
          <div className="exp-card">
            <div className="exp-card__icon exp-card__icon--yellow"><span className="material-symbols-outlined text-[28px]">security</span></div>
            <h3 className="exp-card__title">EQUIPAMENTOS HOMOLOGADOS</h3>
            <p className="exp-card__desc">Macacões profissionais, sapatilhas, luvas e capacetes fechados com viseira anti-embaçante esterilizados em autoclave após cada bateria.</p>
          </div>
          
          <div className="exp-card">
            <div className="exp-card__icon exp-card__icon--white"><span className="material-symbols-outlined text-[28px]">emoji_events</span></div>
            <h3 className="exp-card__title">PÓDIO & CHAMPANHE OFICIAL</h3>
            <p className="exp-card__desc">Cerimônia de premiação completa no pódio com hinos nacionais, troféus metálicos personalizados e estouro de espumante para os 3 primeiros.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
