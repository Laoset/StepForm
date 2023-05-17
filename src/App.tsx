import { useState } from "react";
import HomeForm from "./components/HomeForm";
import StepTwo from "./components/StepTwo";
import StepFinal from "./components/StepFinal";
import StepThree from "./components/StepThree";
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
  //funcion que se encarga de modificar el estado Y se lo paso como prop
  function update(fields: Partial<FormDataso>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, indexStep, step, next, back } = useMultipleSteps([
    <HomeForm {...data} update={update} />,
    <StepTwo {...data} update={update} />,
    <StepThree {...data} update={update} />,
    <StepFinal {...data} update={update} />,
  ]);
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    next();
  }
  return (
    <main className="bg-white flex justify-around flex-col w-[32rem] h-[35rem] rounded-xl ">
      <header className="flex flex-row justify-start px-8 py-1">
        <p className="text-lg font-normal">
          Paso {indexStep + 1} de {steps.length}
        </p>
      </header>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center w-full h-full "
      >
        {step}
        <div className="w-full h-[20%] flex flex-row justify-evenly p-6">
          {indexStep !== 0 && (
            <button
              onClick={back}
              className="bg-blue-700 px-20  rounded-xl text-white"
            >
              Back
            </button>
          )}
          {indexStep !== 3 && (
            <button
              type="submit"
              className="bg-blue-700 px-20  rounded-xl text-white"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </main>
  );
}

export default App;
