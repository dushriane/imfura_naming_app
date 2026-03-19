import { Input, Button } from "@heroui/react";
import { useState } from "react";

interface SiblingInputProps {
  onAdd: (sibling: string) => void;
}

export default function SiblingInput({ onAdd }: SiblingInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={value}
        onValueChange={setValue}
        placeholder="Enter sibling name"
        className="flex-1"
        variant="flat"
        radius="lg"
        classNames={{
          input: "font-[var(--font-nunito-sans)] bg-default-100",
        }}
      />
      <Button
        type="submit"
        className="rounded-full px-6 text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(236,72,153,1) 100%)",
        }}
      >
        Add
      </Button>
    </form>
  );
}
