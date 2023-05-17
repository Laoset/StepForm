type userFormFour = {
  instagram: string;
  linkedin: string;
};
type UserWithFunction = userFormFour & {
  update: (fields: Partial<userFormFour>) => void;
};
const StepFour = ({ instagram, linkedin, update }: UserWithFunction) => {
  return (
    <div className="flex flex-col gap-20 w-full h-full rounded-lg px-8 py-4">
      <h1 className="font-semibold lg:text-3xl text-2xl mt-4">Social medias</h1>
      <div className="flex flex-col">
        <label className="text-xl">Instagram</label>
        <input
          onChange={(e) => update({ instagram: e.target.value })}
          value={instagram}
          required
          type="url"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
        <label className="text-xl">LinkedIn</label>
        <input
          onChange={(e) => update({ linkedin: e.target.value })}
          value={linkedin}
          required
          type="url"
          className="rounded-md border-2 border-solid border-slate-400 mb-4 h-10"
        />
      </div>
    </div>
  );
};

export default StepFour;
