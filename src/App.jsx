import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioProvider, useAudio } from './context/AudioContext';
import { useMouseParallax } from './hooks/useMouseParallax';
import { Background } from './components/Background';
import { CasinoTable } from './components/CasinoTable';
import { DealerTray } from './components/DealerTray';
import { PlayerPosition } from './components/PlayerPosition';
import { CardFan } from './components/CardFan';
import { DiaryModal } from './components/DiaryModal';
import { Header } from './components/Header';
import { GuideOverlay } from './components/GuideOverlay';
import { OverviewModal } from './components/OverviewModal';
import { DealingCardAnimation } from './components/DealingCardAnimation';
import { weeks } from './data/diaryData';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const MainCasinoApp = () => {
  const mouseCoords = useMouseParallax(1);
  const { playZoom, playFlip } = useAudio();

  // Application Flow States
  const [isIntroDealing, setIsIntroDealing] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState(null); // 1 | 2 | 3 | 4 | null
  const [selectedCard, setSelectedCard] = useState(null); // Card object | null
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [mobileActiveWeek, setMobileActiveWeek] = useState(1);

  // Global ESC Key Listener to navigate back to table view seamlessly
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedCard) {
          playFlip();
          setSelectedCard(null); // Close modal first if open
        } else if (selectedWeek) {
          playZoom();
          setSelectedWeek(null); // Return to full 4-player table view if week is selected
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCard, selectedWeek, playFlip, playZoom]);

  // Initial Deal Trigger
  const handleSkipDealing = () => {
    setIsIntroDealing(false);
  };

  const handleReplayDealing = () => {
    setIsIntroDealing(true);
    setSelectedWeek(null);
    setSelectedCard(null);
  };

  const handleDealingComplete = () => {
    setIsIntroDealing(false);
  };

  // Player selection (Week selection)
  const handleSelectPlayer = (weekNumber) => {
    setSelectedWeek(weekNumber);
    setSelectedCard(null);
    setMobileActiveWeek(weekNumber);
  };

  const handleResetView = () => {
    playZoom();
    setSelectedWeek(null);
    setSelectedCard(null);
  };

  // Card selection
  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };

  const handleCloseCardModal = () => {
    playFlip();
    setSelectedCard(null);
  };

  // Active week data object
  const activeWeekData = weeks.find(
    (w) => w.week === (selectedWeek || mobileActiveWeek)
  );

  const currentCardIndex = activeWeekData?.cards.findIndex(
    (c) => c.day === selectedCard?.day
  );

  const hasPrevDay = currentCardIndex > 0;
  const hasNextDay =
    activeWeekData && currentCardIndex < activeWeekData.cards.length - 1;

  const handlePrevDay = () => {
    if (hasPrevDay) {
      playFlip();
      setSelectedCard(activeWeekData.cards[currentCardIndex - 1]);
    }
  };

  const handleNextDay = () => {
    if (hasNextDay) {
      playFlip();
      setSelectedCard(activeWeekData.cards[currentCardIndex + 1]);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#030605] flex flex-col justify-between select-none">
      {/* Background Lighting & Particles */}
      <Background mouseCoords={mouseCoords} />

      {/* Header Bar */}
      <Header
        selectedWeek={selectedWeek}
        onResetView={handleResetView}
        onOpenOverview={() => setIsOverviewOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Dealer Tray (Center top mechanical shoe) */}
      <DealerTray
        isDealing={isIntroDealing}
        onSkipDealing={handleSkipDealing}
        onReplayDealing={handleReplayDealing}
      />

      {/* DESKTOP & TABLET 3D CASINO POKER TABLE VIEW */}
      <main className="relative flex-1 w-full h-full flex items-center justify-center  md:flex">
        <CasinoTable
          mouseCoords={mouseCoords}
          zoomLevel={selectedWeek ? 1.18 : 1}
        >
          {/* Mechanical Flying Dealing Card Animation */}
          <DealingCardAnimation
            isDealing={isIntroDealing}
            onDealingComplete={handleDealingComplete}
          />

          {/* 4 Player Position Tags around the Table Perimeter */}
          {weeks.map((weekItem) => {
            const posMap = { 1: 'top', 2: 'right', 3: 'bottom', 4: 'left' };
            const isThisSelected = selectedWeek === weekItem.week;
            const isThisDimmed = selectedWeek !== null && !isThisSelected;

            return (
              <PlayerPosition
                key={weekItem.week}
                weekData={weekItem}
                position={posMap[weekItem.week]}
                isSelected={isThisSelected}
                isDimmed={isThisDimmed}
                isIntroDealing={isIntroDealing}
                onSelectPlayer={handleSelectPlayer}
              />
            );
          })}

          {/* CENTER STAGE: Renders the active Week's 6 cards in the EXACT CENTER of the table */}
          <AnimatePresence>
            {selectedWeek && activeWeekData && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-auto"
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 40 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Active Week Center Stage Banner */}
                <div className="mb-2 px-5 py-2 rounded-2xl bg-stone-950/95 border border-amber-400/80 shadow-[0_0_30px_rgba(234,179,8,0.4)] backdrop-blur-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center font-cinzel font-black text-amber-300 text-sm">
                    W{selectedWeek}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xs font-bold tracking-widest text-amber-200 uppercase">
                      {activeWeekData.title}
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-400 block font-semibold">
                      SELECT A CARD TO FLIP • PRESS ESC TO RETURN
                    </span>
                  </div>

                  <button
                    onClick={handleResetView}
                    className="ml-2 px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-300 text-[10px] font-mono font-semibold flex items-center gap-1 cursor-pointer transition-all active:scale-95"
                  >
                    <RotateCcw className="w-3 h-3 text-amber-400" />
                    BACK TO TABLE
                  </button>
                </div>

                {/* Centered 3D Card Fan facing the user directly */}
                <CardFan
                  cards={activeWeekData.cards}
                  selectedCardId={selectedCard?.day}
                  onCardSelect={handleSelectCard}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </CasinoTable>
      </main>

      {/* MOBILE RESPONSIVE CASINO VIEW (<768px) */}
      <main className="relative flex-1 w-full h-full flex flex-col items-center justify-center p-4 md:hidden z-20 pt-20 pb-16">
        <div className="w-full max-w-sm rounded-3xl poker-felt border border-emerald-500/40 p-4 shadow-2xl flex flex-col items-center justify-between min-h-120">
          
          {/* Mobile Week Selector Tabs */}
          <div className="flex items-center justify-between w-full mb-3 bg-stone-950/80 p-1.5 rounded-2xl border border-amber-500/30">
            <button
              disabled={mobileActiveWeek <= 1}
              onClick={() => setMobileActiveWeek((prev) => Math.max(1, prev - 1))}
              className="p-2 rounded-xl bg-stone-900 text-amber-300 disabled:opacity-30 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="text-center">
              <span className="font-cinzel text-xs font-bold text-amber-300 block">
                WEEK {mobileActiveWeek} HAND
              </span>
              <span className="text-[9px] font-mono text-emerald-400 font-semibold">
                SWIPE OR TAP TO SELECT CARDS
              </span>
            </div>

            <button
              disabled={mobileActiveWeek >= 4}
              onClick={() => setMobileActiveWeek((prev) => Math.min(4, prev + 1))}
              className="p-2 rounded-xl bg-stone-900 text-amber-300 disabled:opacity-30 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Centered Mobile Card Fan */}
          {activeWeekData && (
            <div className="w-full flex flex-col items-center my-auto">
              <CardFan
                cards={activeWeekData.cards}
                selectedCardId={selectedCard?.day}
                onCardSelect={handleSelectCard}
              />
            </div>
          )}

          <p className="text-[10px] font-mono text-amber-300/70 text-center mt-2 font-semibold">
            TAP CARDS TO FLIP & REVEAL DAY DIARY
          </p>
        </div>
      </main>

      {/* Diary Card Flip Modal */}
      <DiaryModal
        card={selectedCard}
        isOpen={Boolean(selectedCard)}
        onClose={handleCloseCardModal}
        onPrevDay={handlePrevDay}
        onNextDay={handleNextDay}
        hasPrev={hasPrevDay}
        hasNext={hasNextDay}
      />

      {/* Guide / How to Play Overlay */}
      <GuideOverlay
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* High Stakes Stats Dashboard Modal */}
      <OverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        onSelectWeek={handleSelectPlayer}
      />
    </div>
  );
};

export default function App() {
  return (
    <AudioProvider>
      <MainCasinoApp />
    </AudioProvider>
  );
}
