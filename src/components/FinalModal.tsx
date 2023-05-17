import { useState } from "react";
const FinalModal = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  function close() {
    setShowModal(false);
    window.location.reload();
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative my-6 mx-auto max-w-3xl w-[30rem] h-44">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start place-content-end ">
                  <button
                    className="text-black background-transparent h-10 w-10 text-3xl outline-none focus:outline-none rounded-lg"
                    onClick={close}
                  >
                    ×
                  </button>
                </div>
                <div className="relative p-4 flex-auto flex flex-row  text-center">
                  <p className="text-black text-2xl font-normal">
                    Thank you for registering! Your information has been
                    successfully submitted.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default FinalModal;
