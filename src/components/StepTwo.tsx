type userFormSecond = {
  country: string;
  phone: string;
};
type UserWithFunction = userFormSecond & {
  update: (fields: Partial<userFormSecond>) => void;
};
const StepTwo = ({ country, phone, update }: UserWithFunction) => {
  return (
    <div className="flex flex-col gap-20 w-full h-full rounded-lg px-8 py-4">
      <h1 className="font-semibold text-3xl mt-4">Details</h1>
      <div className="flex flex-col">
        <label className="text-xl">Country</label>
        <input
          onChange={(e) => update({ country: e.target.value })}
          value={country}
          autoFocus
          required
          type="text"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
        <label className="text-xl">Phone</label>
        <input
          onChange={(e) => update({ phone: e.target.value })}
          value={phone}
          autoFocus
          required
          type="number"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
      </div>
    </div>
  );
};

export default StepTwo;
