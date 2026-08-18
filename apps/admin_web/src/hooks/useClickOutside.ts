import { useEffect, type RefObject } from "react";

function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  isActive: boolean,
  onOutsideClick: () => void,
) {
  useEffect(() => {
    if (!isActive) return;

    function handleClickOutside(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, isActive, onOutsideClick]);
}

export default useClickOutside;
