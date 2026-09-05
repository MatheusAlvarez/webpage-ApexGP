
import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <a className="header__logo-link" href="#">
            <img alt="APEX KARTING GP Logo" className="header__logo" src="https://lh3.googleusercontent.com/aida/AEtjO1WfaxUcgFRdTqRxSmSnlqbjuu7RKIexW-8Zp9FoICBToLncA62pj5lY07q1LaMOYKv9c0XEqm7W-G7WmW2Sb_-yVeBVMjz7XcdxVsSiBEP4XvCwwx8pnYqZMrthrxeJQQbcW4K8ehNBe1h0-_0SZ86gSoX8DMfVDoO6LELhNbFm2XTtkVa-smKppxqBLGKp5ZGyx450A0VD8cPEKxx5be9cwl5IOW4YIw3zRDTzCtSEAR_iHte_BqUzpnI" />
            <div className="header__logo-text">
              <span className="header__logo-title">APEX<span className="header__logo-accent">GP</span></span>
              <span className="header__logo-subtitle">FIA CIK LICENSED</span>
            </div>
          </a>
        </div>
        <nav className="header__nav">
          <a className="header__nav-link" href="#">EXPERIÊNCIA</a>
          <a className="header__nav-link" href="#">KARTS</a>
          <a className="header__nav-link" href="#circuitos">CIRCUITOS</a>
          <a className="header__nav-link" href="#circuito-telemetria">TELEMETRIA</a>
          <a className="header__nav-link" href="#">CAMPEONATOS</a>
        </nav>
        <div className="header__right">
          <div className="header__status">
            <span className="header__status-dot-wrapper">
              <span className="header__status-dot-ping"></span>
              <span className="header__status-dot"></span>
            </span>
            <span className="header__status-text">PISTA ABERTA</span>
          </div>
          <a className="header__btn header__btn--primary" href="#calculadora-grid">
            <span className="material-symbols-outlined">sports_score</span> RESERVAR BATERIA
          </a>
          <a className="header__profile" href="#" aria-label="Perfil do Piloto">
            <span className="material-symbols-outlined">person</span>
          </a>
        </div>
      </div>
    </header>
  );
}
