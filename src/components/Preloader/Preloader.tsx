import { useEffect, useState } from 'react';
import { ECGContainer, ECGWrapper } from '../../styles/Preloader.style';
import { motion } from 'framer-motion';

const MAX_CYCLES = 3;
const ANIMATION_DURATION = 3000;

export default function ECGWaveRepeat() {
  const [cycles, setCycles] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (cycles >= MAX_CYCLES) {
      setIsAnimating(false);
      return;
    }

    if (!isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
        setCycles((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating, cycles]);

  if (cycles >= MAX_CYCLES) return null;

  return (
    <ECGContainer>
      <ECGWrapper>
        <svg viewBox="0 0 180 80" width="320" height="auto" style={{ display: 'block' }}>
          <motion.path
            d="M0,40 H20 L30,20 L40,60 L50,10 L60,40 L70,30 L80,40 H100"
            stroke="#F33F90"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isAnimating ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: ANIMATION_DURATION / 1000, ease: 'easeInOut' }}
          />
        </svg>
      </ECGWrapper>
    </ECGContainer>
  );
}
