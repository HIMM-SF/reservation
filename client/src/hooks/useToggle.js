import { useState, useCallback } from "react";
import { useGlobalMouseClick } from "./useWindowEvent";

const Toggle = (componentRef, elementRef, initialValue) => {
  const [open, setOpen] = useState(initialValue);

  const callback = useCallback((e) => {
    if (open
        && componentRef.current
        && !componentRef.current.contains(e.target)
        && elementRef.current
        && !elementRef.current.contains(e.target)
    ) {
      setOpen((bool) => !bool);
    }
  }, [open]);

  useGlobalMouseClick(callback);
  return [open, setOpen];
};

export default Toggle;
