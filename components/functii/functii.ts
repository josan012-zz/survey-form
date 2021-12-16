import { useState } from "react";
import { useRecoilState, atom } from "recoil";

const step = atom({ default: 0, key: "step" });
export const useFormData = () => {
  const [formStep, setFormStep] = useRecoilState(step);
  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  return {
    formStep,
    setFormStep,
    completeFormStep,
  };
};
