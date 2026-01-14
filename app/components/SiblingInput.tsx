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
      />
      <Button type="submit" color="secondary">
        Add
      </Button>
    </form>
  );
}
