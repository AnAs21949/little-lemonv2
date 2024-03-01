import { useState } from "react";

export const MultiStepForm = (components) => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const next = () => {
    setCurrentComponentIndex((i) => {
      if (i >= components.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentComponentIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  return {
    currentComponentIndex,
    next,
    back,
    components,
    component: components[currentComponentIndex],
  };
};
