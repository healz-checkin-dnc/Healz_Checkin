import { useEffect } from 'react';
import {
  PopupBackdrop,
  PopupContainer,
  PopupMessage,
  PopupButton,
} from '../../styles/Popup.styles';

type Props = {
  message: string;
  onClose: () => void;
};

export const Popup = ({ message, onClose }: Props) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <PopupBackdrop>
      <PopupContainer>
        <PopupMessage>{message}</PopupMessage>
        <PopupButton onClick={onClose}>OK</PopupButton>
      </PopupContainer>
    </PopupBackdrop>
  );
};
