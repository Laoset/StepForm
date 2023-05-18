type UserData = {
  name: string;
  lastName: string;
  birthdate: string;
};
type UserWithFunction = UserData & {
  update: (fields: Partial<UserData>) => void;
};
const HomeForm = ({ name, lastName, birthdate, update }: UserWithFunction) => {
  return (
    <div className="flex flex-col gap-20 w-full h-full rounded-lg px-8 py-4 text-[#080713]">
      <h1 className="font-semibold lg:text-3xl text-2xl mt-4">
        Create your account
      </h1>
      <div className="flex flex-col">
        <label className="text-xl">Name</label>
        <input
          onChange={(e) => update({ name: e.target.value })}
          value={name}
          required
          autoFocus
          type="text"
          pattern="[A-Za-z]+"
          title="Please enter a valid name"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
        <label className="text-xl">Last Name</label>
        <input
          onChange={(e) => update({ lastName: e.target.value })}
          value={lastName}
          required
          type="text"
          pattern="[A-Za-z]+"
          title="Please enter a valid last name"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
        <label className="text-xl">Date of birth</label>
        <input
          onChange={(e) => update({ birthdate: e.target.value })}
          value={birthdate}
          required
          type="date"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
      </div>
    </div>
  );
};

export default HomeForm;
