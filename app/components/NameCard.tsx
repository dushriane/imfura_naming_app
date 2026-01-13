interface NameCardProps {
  name: string;
  meaning?: string;
  saint?: string;
}

export default function NameCard({ name, meaning, saint }: NameCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      {meaning && (
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Meaning:</span> {meaning}
        </p>
      )}
      {saint && (
        <p className="text-gray-600">
          <span className="font-semibold">Saint:</span> {saint}
        </p>
      )}
    </div>
  );
}
