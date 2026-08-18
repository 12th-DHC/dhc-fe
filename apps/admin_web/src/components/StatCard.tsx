import type { StatCardProps } from "../types/StatCard.types";
import { CardWrapper, Label, Value } from "../styles/StatCard.style";

function StatCard({ label, value, highlight = false }: StatCardProps) {
  return (
    <CardWrapper>
      <Label>{label}</Label>
      <Value $highlight={highlight}>{value}</Value>
    </CardWrapper>
  );
}

export default StatCard;
