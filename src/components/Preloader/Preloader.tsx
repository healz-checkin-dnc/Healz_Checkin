import { ECGContainer, StyledSvg, AnimatedPath } from '../../styles/Preloader.style';

export default function Preloader() {
  return (
    <ECGContainer>
      <StyledSvg viewBox="0 0 180 80" preserveAspectRatio="xMidYMid meet">
        <AnimatedPath d="M0,40 H20 L30,20 L40,60 L50,10 L60,40 L70,30 L80,40 H100" />
      </StyledSvg>
    </ECGContainer>
  );
}
