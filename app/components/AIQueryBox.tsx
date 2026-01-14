"use client";

import { Card, CardBody, CardHeader, Textarea, Button, Chip } from "@heroui/react";
import SiblingInput from "./SiblingInput";

interface AIQueryBoxProps {
  prompt: string;
  onPromptChange: (p: string) => void;
  siblings: string[];
  onAddSibling: (s: string) => void;
  onRemoveSibling: (s: string) => void;
  onGenerate: () => void;
  loading?: boolean;
}

export default function AIQueryBox({ prompt, onPromptChange, siblings, onAddSibling, onRemoveSibling, onGenerate, loading }: AIQueryBoxProps) {
  return (
    <Card className="max-w-4xl">
      <CardHeader>
        <h3>Ask the Naming Consultant</h3>
      </CardHeader>
      <CardBody className="gap-4">
        <Textarea
          value={prompt}
          onValueChange={onPromptChange}
          placeholder="Describe the themes: gratitude, faith, nature; or add prefixes/suffixes..."
          minRows={4}
        />

        <div>
          <p className="text-sm font-semibold mb-2">Siblings / Family Names</p>
          <SiblingInput onAdd={onAddSibling} />
          {siblings.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {siblings.map(s => (
                <Chip
                  key={s}
                  onClose={() => onRemoveSibling(s)}
                  variant="flat"
                  color="secondary"
                >
                  {s}
                </Chip>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            color="secondary"
            size="lg"
            onClick={onGenerate}
            isLoading={loading}
          >
            Generate Name Ideas
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
