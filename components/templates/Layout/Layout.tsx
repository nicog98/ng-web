import React, { ReactElement } from 'react';
import { Menu, IMenu } from '@molecules';
import { Header, IHeader } from '@organisms';
import styled from 'styled-components';

export interface ILayout extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for header shown in layout
   */
  headerProps: IHeader,

  /**
   * Props for the menu shown alongside the content
   */
  menuProps: IMenu,

  /**
   * Content of page
   */
  children: ReactElement,
}

export const Layout: React.FC<ILayout> = (
  {
    headerProps,
    menuProps,
    children,
    ...props
  },
): ReactElement => (
  <SLayoutContainer {...props}>
    <SHeader {...headerProps} headerURL="/" />
    <SMenu {...menuProps} />
    <SContentContainer>{children}</SContentContainer>
  </SLayoutContainer>
);

const SLayoutContainer = styled.div`
  display: grid;
  min-height: 100vh;
  // Layout specific to mobile screen
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.webMin}) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto auto ${({ theme }) => theme.Spacing.wide};
    row-gap: ${({ theme }) => theme.Spacing.regular};
    padding: ${({ theme }) => theme.Spacing.regular};
  }

  // Layout specific to desktop screen
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    grid-template-columns: 135px auto 135px;
    grid-template-rows: 40px auto ${({ theme }) => theme.Spacing.wide};
    row-gap: ${({ theme }) => theme.Spacing.extraWide};
    padding: ${({ theme }) => theme.Spacing.wide};
  }

  background-color: ${({ theme }) => theme.Colors.background};
`;

const SHeader = styled(Header)`
  // Keep in grid on mobile
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.webMin}) {
    grid-row: 1;
    grid-column: 1;
  }

  // Fix on web
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    position: fixed;
    top: ${({ theme }) => theme.Spacing.wide};
    left: ${({ theme }) => theme.Spacing.wide};
    right: ${({ theme }) => theme.Spacing.wide};
  }
`;

const SMenu = styled(Menu)`
  // Keep in grid on mobile
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.webMin}) {
    grid-row: 2;
    grid-column: 1;
  }

  // Fix on web
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    position: fixed;
    top: 132px;
    width: ${({ theme }) => theme.Spacing.extraWide};
    left: ${({ theme }) => theme.Spacing.wide};
    right: ${({ theme }) => theme.Spacing.wide};
  }
`;

const SContentContainer = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    grid-column: 2;
    grid-row: 2;
  }

  @media only screen and (max-width: ${({ theme }) => theme.Spacing.webMin}) {
    grid-column: 1;
    grid-row: 3;
  }

  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;
