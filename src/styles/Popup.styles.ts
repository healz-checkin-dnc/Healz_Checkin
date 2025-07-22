import styled from 'styled-components';

export const PopupBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const PopupContainer = styled.div`
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  max-width: 400px;
  text-align: center;
`;

export const PopupMessage = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.blueDark || '#333'};
`;

export const PopupButton = styled.button`
  background-color: ${({ theme }) => theme.colors.healzPink};
  color: white;
  padding: 0.6rem 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
