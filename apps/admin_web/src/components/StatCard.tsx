import { CardWrapper, Label, Value } from "../styles/StatCard.style";

interface StatCardProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

function StatCard({ label, value, highlight = false }: StatCardProps) {
  return (
    <CardWrapper>
      <Label>{label}</Label>
      <Value $highlight={highlight}>{value}</Value>
    </CardWrapper>
  );
}

export default StatCard;
