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
        className="flex-1 px-4 py-2.5 border-2 border-pink-100 dark:border-gray-600 rounded-2xl focus:outline-none focus:border-pink-300 dark:focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-800 transition-all bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
      />
      <button
        type="submit"
        className="px-6 py-2.5 bg-gradient-to-r from-pink-200 to-blue-200 dark:from-pink-700 dark:to-blue-700 hover:from-pink-300 hover:to-blue-300 dark:hover:from-pink-600 dark:hover:to-blue-600 text-gray-800 dark:text-white font-semibold rounded-2xl transition-all shadow-sm hover:shadow-md"
      >
        Add
      </button>
    </form>
  );
}
