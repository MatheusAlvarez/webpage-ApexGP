
import React from 'react';
import './RaceStatus.css';

export default function RaceStatus() {
  return (
    <section className="race-status">
      <div className="race-status__container">
        <div className="race-status__left">
          <div className="race-status__lights">
            <span className="race-status__light race-status__light--red"></span>
            <span className="race-status__light race-status__light--red"></span>
            <span className="race-status__light race-status__light--off"></span>
            <span className="race-status__light race-status__light--off"></span>
            <span className="race-status__light race-status__light--off"></span>
          </div>
          <div className="race-status__info">
            <span className="race-status__text race-status__text--green">PISTA HOMOLOGADA FIA // CONDIÇÃO: SECA</span>
            <span className="race-status__dot">•</span>
            <span className="race-status__text race-status__text--yellow">TEMP. ASFALTO: 34.2°C</span>
          </div>
        </div>
        <div className="race-status__right">
          <div className="race-status__timer-box">
            <span className="race-status__timer-label">PRÓXIMA BATERIA:</span>
            <span className="race-status__timer-value">11:07</span>
          </div>
          <div className="race-status__slots">
            <span className="race-status__slot-dot"></span>
            <span className="race-status__slot-text">VAGAS NO GRID: 06 LIVRES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
