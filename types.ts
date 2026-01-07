import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PrizeItem {
  rank: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface SubTheme {
  title: string;
  description: string;
}
