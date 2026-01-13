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
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Add
      </button>
    </form>
  );
}
