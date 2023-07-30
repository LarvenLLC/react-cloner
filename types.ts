import { ReactElement, CSSProperties } from 'react';

export interface ClonerProps {
  title: string;
  initialItems?: number;
  addButtonClassName?: string;
  component: ReactElement;
  componentWrapperStyle?: CSSProperties;
  componentWrapperClassName?: string;
  deleteButtonClassName?: string;
  deleteButtonWrapperClassName?: string;
  addButtonPosition?: string;
  labelClassName?: string;
  onDelete?: () => void;
  showLabel?: boolean;
}

export interface ComponentWrapperProps {
  title: string;
  component: ReactElement;
  increment: number;
  componentWrapperStyle?: CSSProperties;
  componentWrapperClassName?: string;
  deleteButtonClassName?: string;
  deleteButtonWrapperClassName?: string;
  labelClassName?: string;
  showLabel: boolean;
  onDelete: () => void;
}
