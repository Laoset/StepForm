type userFormSecond = {
  country: string;
  phone: string;
};
type UserWithFunction = userFormSecond & {
  update: (fields: Partial<userFormSecond>) => void;
};
const StepTwo = ({ country, phone, update }: UserWithFunction) => {
  return (
    <div className="flex flex-col gap-20 w-full h-full rounded-lg px-8 py-4 text-[#080713]">
      <h1 className="font-semibold lg:text-3xl text-2xl mt-4">Details</h1>
      <div className="flex flex-col">
        <label className="text-xl">Country</label>
        <input
          onChange={(e) => update({ country: e.target.value })}
          value={country}
          autoFocus
          required
          type="text"
          pattern="[A-Za-zÀ-ÖØ-öø-ÿ-]+"
          title="Please enter a valid Country"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
        <label className="text-xl">Phone</label>
        <input
          onChange={(e) => update({ phone: e.target.value })}
          value={phone}
          autoFocus
          required
          type="number"
          pattern="/^\d{1,20}$/"
          title="Please enter a number with the max of 20"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
      </div>
    </div>
  );
};

export default StepTwo;
