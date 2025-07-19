import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;  /* Garante que o contêiner ocupe a largura total */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.blueDark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

export const FormBox = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;  /* Garante que o formulário ocupe a largura total */
  max-width: 1100px;  /* Define um limite máximo de largura */
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(243, 63, 144, 0.15);
  margin: 0 auto;  /* Centraliza o formulário horizontalmente */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};  /* Reduz o padding em telas pequenas */
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;  /* Muda para coluna única em telas menores */
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.blueDark};
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;  /* Garante que o input ocupe 100% da largura disponível */
  padding: 12px 16px;
  border: none;
  box-shadow: 0 6px 12px -2px ${({ theme }) => theme.colors.pinkShadow}80;
  background-color: ${({ theme }) => theme.colors.grayLight};
  border-radius: 100px;
  font-size: 1rem;
  outline-color: ${({ theme }) => theme.colors.healzPink};

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.healzPink}88;
  }
`;

export const ErrorMessage = styled.span`
  color: #f35ca2;
  font-size: 0.875rem;
  margin-top: 4px;
  display: block; /* Faz a mensagem ocupar uma linha inteira */
  margin-bottom: 10px;
`;
