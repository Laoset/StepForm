type userFormThree = {
  password: string;
  email: string;
};
type UserWithFunction = userFormThree & {
  update: (fields: Partial<userFormThree>) => void;
};
const StepThree = ({ password, email, update }: UserWithFunction) => {
  return (
    <div className="flex flex-col gap-20 w-full h-full rounded-lg px-8 py-4">
      <h1 className="font-semibold lg:text-3xl text-2xl mt-4">
        Secure your account
      </h1>
      <div className="flex flex-col">
        <label className="text-xl">Password</label>
        <input
          onChange={(e) => update({ password: e.target.value })}
          value={password}
          autoFocus
          required
          type="password"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
        <label className="text-xl">Email</label>
        <input
          onChange={(e) => update({ email: e.target.value })}
          value={email}
          required
          type="email"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
      </div>
    </div>
  );
};

export default StepThree;
