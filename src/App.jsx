
import React from 'react';
import Header from './components/Header';
import RaceStatus from './components/RaceStatus';
import Hero from './components/Hero';
import ApexThunder from './components/ApexThunder';
import Fleet from './components/Fleet';
import Circuit from './components/Circuit';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import DomeGallery from './components/dome';
import './index.css';

const galleryImages = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8w8raEDCp8sM20kowIZxjuov7oU1ALuleLLKKCU3R5Aw433g91p04WYov&s=10',
    alt: 'Karting action'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOQEv6W5ZbikmiJ2yATDIPTY-r8rI581jZWxqqzv1qW8Qo1i_aqs_pgG-&s=10',
    alt: 'Kart driver'
  },
  {
    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/01/b8/5e/se-voce-deseja-reunir.jpg?w=900&h=500&s=1',
    alt: 'Racing helmet'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURdaDSM7Km9X4EY30ef6ZJ0Q0Ze9n2aXDcGX0UhdQaHH98sokL3v3WDmE&s=10',
    alt: 'Go kart track'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBxBEPoQWYcupcj5KJsML6UOOf1THG_wUIS4SbcU3s00P5cD-pRnaRgU&s=10',
    alt: 'Motorsport'
  },
  {
    src: 'https://i.ytimg.com/vi/hbBAjwonszA/maxresdefault.jpg',
    alt: 'Karting competition'
  },
  {
    src: 'https://i.ytimg.com/vi/z7V7PDNrkSI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBi2OnVYSduiKL7-lN41gSk7xYMfw',
    alt: 'Karting competition'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKZYcrn2Tp5PS25D1C5n0VuxC-YnWoecTs8ktzVLUThBhqclxUzSUHduM&s=10',
    alt: 'Karting competition'
  },
  {
    src: 'https://loremflickr.com/800/800/karting,race?lock=66',
    alt: 'Karting competition'
  },
  {
    src: 'https://loremflickr.com/800/800/karting,race?lock=66',
    alt: 'Karting competition'
  }
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <RaceStatus />
        <Hero />
        <ApexThunder />
        <Fleet />
        <Circuit />
        <Experience />

        <section className="w-full min-h-screen flex items-center justify-center bg-carbon-base relative overflow-hidden py-space-xl lg:py-space-3xl border-b border-surface-container-highest/40">
          <div className="w-[95vw] md:w-[85vw] h-[70vh] md:h-[85vh]">
            <DomeGallery
              images={galleryImages}
              fit={0.8}
              minRadius={600}
              maxVerticalRotationDeg={0}
              segments={34}
              dragDampening={2}
              grayscale={false}
              overlayBlurColor="#101014"
            />
          </div>
        </section>

        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
