export interface CardProps {
  title: string;
  subTitle: string;
  value?: string;
  availableLimit?: string;
  limit?: string;
  buttonActive?: boolean;
  activeLimit?: boolean;
  onPress?(): void;
}