import styled from 'styled-components';
import PALETTE from '../../../constants/palette';
import { mdSize } from '../../shared/CreditCard/styles';

export const CardButton = styled.button`
  ${mdSize}
  background-color: ${PALETTE.GRAY_100};
  font-size: 3rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.15s ease-in;

  &:hover {
    background-color: ${PALETTE.GRAY_200};
  }
`;
