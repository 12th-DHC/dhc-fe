import { useRef, useState } from "react";
import type { DropdownProps } from "../types/Dropdown.types";
import useClickOutside from "../hooks/useClickOutside";
import {
  DropdownWrapper,
  DropdownTrigger,
  Chevron,
  DropdownList,
  DropdownItem,
} from "../styles/Dropdown.style";

function Dropdown({ value, options, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, isOpen, () => setIsOpen(false));

  const selected = options.find((o) => o.value === value);

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownTrigger
        type="button"
        $open={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        {selected?.label}
        <Chevron $open={isOpen}>▾</Chevron>
      </DropdownTrigger>

      {isOpen && (
        <DropdownList>
          {options.map((o) => (
            <DropdownItem
              key={o.value}
              type="button"
              $selected={o.value === value}
              onClick={() => {
                onChange(o.value);
                setIsOpen(false);
              }}
            >
              {o.label}
              {o.value === value && <span></span>}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

export default Dropdown;
