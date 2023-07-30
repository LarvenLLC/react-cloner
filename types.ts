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
  shouldRemoveDeleteWrapper?: boolean;
  addButtonPosition?: string;
  labelClassName?: string;
  onDelete?: () => void;
  shouldHideLabel?: boolean;
}

export interface ComponentWrapperProps {
  title: string;
  component: ReactElement;
  increment: number;
  componentWrapperStyle?: CSSProperties;
  componentWrapperClassName?: string;
  deleteButtonClassName?: string;
  deleteButtonWrapperClassName?: string;
  shouldRemoveDeleteWrapper?: boolean;
  labelClassName?: string;
  shouldHideLabel: boolean;
  onDelete: () => void;
}
