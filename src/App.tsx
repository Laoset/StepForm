import { useState } from "react";
import HomeForm from "./components/HomeForm";
import StepTwo from "./components/StepTwo";
import StepFinal from "./components/StepFinal";
import StepThree from "./components/StepThree";
import ModalFinal from "./components/FinalModal";

import { useMultipleSteps } from "./utils/Hook";

type FormDataso = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  phone: string;
  birthdate: string;
  instagram: string;
  linkedin: string;
};
const start_data: FormDataso = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  phone: "",
  birthdate: "",
  instagram: "",
  linkedin: "",
};

function App() {
  const [data, setData] = useState(start_data);
  const [openModal, setOpenModal] = useState<boolean>(false);

  //funcion que se encarga de modificar el estado Y se lo paso como prop
  function update(fields: Partial<FormDataso>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, indexStep, step, next, back, isLastStep } = useMultipleSteps([
    <HomeForm {...data} update={update} />,
    <StepTwo {...data} update={update} />,
    <StepThree {...data} update={update} />,
    <StepFinal {...data} update={update} />,
  ]);
  const finalStep = <ModalFinal />;
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    //si es distinto a la ultima seccion, seguimos
    if (!isLastStep) return next();
    setOpenModal(true);
    return finalStep;
  }
  return (
    <main className="flex flex-col h-screen w-screen justify-center items-center">
      <section className="bg-white flex justify-around flex-col w-[32rem] h-[35rem] rounded-xl shadow-2xl ">
        <header className="flex flex-row justify-start px-8 py-1">
          <p className="text-lg font-normal">
            Step {indexStep + 1} of {steps.length}
          </p>
        </header>
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center items-center w-full h-full"
        >
          {step}
          {openModal ? <ModalFinal /> : null}
          <div className="w-full h-[20%] flex flex-row justify-end align-middle text-center items-center gap-4 p-6">
            {indexStep !== 0 && (
              <button
                type="button"
                onClick={back}
                className="bg-[#6247b8] px-14 h-10  rounded-xl text-white"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="bg-[#6247b8] px-20 h-12 rounded-xl text-white"
            >
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </section>
      <footer className="flex flex-col gap-1 mb-4 absolute bottom-0">
        <p>Made with ❣️ by Kevin Corman </p>
        <div className="flex flex-row gap-6 items-center justify-center ">
          <a
            href="https://github.com/Laoset"
            target="_blank"
            className="w-8 h-8"
          >
            <img src="https://icongr.am/devicon/github-original.svg?size=128&color=currentColor" />
          </a>
          <a
            href="https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/"
            target="_blank"
            className="w-8 h-8"
          >
            <img src="https://icongr.am/feather/linkedin.svg?size=128&color=currentColor" />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
