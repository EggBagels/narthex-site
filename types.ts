import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export enum ButtonVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  OUTLINE = 'OUTLINE',
}

export interface BenefitItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}