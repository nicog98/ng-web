import React, { ReactElement } from 'react';
import { Image } from '@atoms';
import { TextEntry, ITextEntry } from '@organisms';
import styled from 'styled-components';

export interface IWorkDetail extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Main image displayed at top of work detail
   */
  mainImage: string;

  /**
   * Props for text entry
   */
  textEntryProps: ITextEntry

  /**
   * Images displayed in feed
   */
  images: string[];
}

export const WorkDetail: React.FC<IWorkDetail> = (
  {
    mainImage,
    textEntryProps,
    images,
    ...props
  },
): ReactElement => (
  <SWorkDetailContainer {...props}>
    <SMainImage src={mainImage} />
    <STextEntry {...textEntryProps} />
    {images.map((imageSrc, idx) => <SImage src={imageSrc} key={idx} />)}
  </SWorkDetailContainer>
);

const SWorkDetailContainer = styled.div`
  padding: 0 ${({ theme }) => theme.Spacing.extraWide};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SMainImage = styled(Image)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.Spacing.wide};
`;

const SImage = styled(Image)`
  width: 50%;
  margin: ${({ theme }) => theme.Spacing.wide} 0;
`;

const STextEntry = styled(TextEntry)`
  margin: ${({ theme }) => theme.Spacing.wide} 0;
  width: 100%;
`;
