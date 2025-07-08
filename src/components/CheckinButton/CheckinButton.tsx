import styled from 'styled-components';

export const CheckinButton = styled.button`
  background-color: ${({ theme }) => theme.colors.healzPink};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 999px;
  padding: 16px 40px;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0 10px 16px ${({ theme }) => theme.colors.pinkShadow};
  max-width: 18.75rem; // 300px
  margin: 0 auto;
`;
