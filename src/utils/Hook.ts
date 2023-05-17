import { ReactElement, useState } from "react";

//funcion que como parametro tiene steps que son componentes react, hay que especificar el 'use'
export function useMultipleSteps(steps: ReactElement[]) {
  //estado que almacena mi indice de step osea la posicion
  const [indexStep, setIndexStep] = useState(0);
  //funcion de siguiente
  function next() {
    setIndexStep((i) => {
      if (i >= steps.length) return i;
      return i + 1;
    });
  }
  //funcion de retroceso
  function back() {
    setIndexStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  //funcion que setea direccion
  function goTo(index: number) {
    setIndexStep(index);
  }
  return {
    indexStep,
    setIndexStep,
    step: steps[indexStep],
    goTo,
    steps,
    isLastStep: indexStep === steps.length - 1,
    next,
    back,
  };
}
