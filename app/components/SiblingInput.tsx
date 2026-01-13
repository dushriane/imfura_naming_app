interface SiblingInputProps {
  onAdd: (sibling: string) => void;
}

export default function SiblingInput({ onAdd }: SiblingInputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const sibling = formData.get('sibling') as string;
    if (sibling) {
      onAdd(sibling);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        name="sibling"
        placeholder="Enter sibling name"
        className="flex-1 px-4 py-2 border-2 border-[#ffc8dd]/30 rounded-xl focus:outline-none focus:border-[#bde0fe] focus:ring-2 focus:ring-[#bde0fe]/30 transition-all bg-white/50"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-gradient-to-r from-[#ffc8dd] to-[#bde0fe] hover:from-[#ffafcc] hover:to-[#a2d2ff] text-gray-800 font-semibold rounded-xl transition-all shadow-sm hover:shadow-md"
      >
        Add
      </button>
    </form>
  );
}
