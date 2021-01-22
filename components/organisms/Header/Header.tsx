import React, { ReactElement } from 'react';
import { Text, IText } from '@atoms';
import { Dates, IDates } from '@organisms/Dates';
import styled from 'styled-components';

export interface IHeader extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for the dates component nested in the header
   */
  datesProps: IDates;

  /**
   * Props for the text in the header
   */
  textProps: IText;
}

export const Header: React.FC<IHeader> = (
  {
    datesProps,
    textProps,
    ...props
  },
): ReactElement => (
  <SHeaderContainer {...props}>
    <SDates {...datesProps} />
    <STitle styleType="header" {...textProps} />
  </SHeaderContainer>
);

const SHeaderContainer = styled.div`
  display: flex;
  // Stacked header on mobile
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.webMin}) {
    flex-direction: column;
    justify-content: flex-start;
  }
  // Lengthwise row on web
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  align-items: flex-start;
`;

const STitle = styled(Text)`
  color: ${({ theme }) => theme.Colors.text};
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.webMin}) {
    margin-top: ${({ theme }) => theme.Spacing.tight};
  }
`;

const SDates = styled(Dates)``;
