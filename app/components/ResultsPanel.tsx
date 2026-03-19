"use client";

import { Card, CardBody, CardHeader, Button, Chip } from "@heroui/react";

interface ResultItem {
  name: string;
  meaning?: string;
  origin?: string;
  score?: number;
  gender?: 'male' | 'female' | 'unisex';
}

interface ResultsPanelProps {
  suggestions: ResultItem[];
  onSelectName: (name: string) => void;
}

export default function ResultsPanel({ suggestions, onSelectName }: ResultsPanelProps) {
  if (!suggestions || suggestions.length === 0) {
    return (
      <Card className="max-w-4xl">
        <CardBody>
          <p className="text-center text-default-500">
            No suggestions yet. Add a prompt and generate.
          </p>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl">
      <CardHeader>
        <h3>Suggested Names</h3>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suggestions.map((s) => (
            <Card key={s.name} isPressable onPress={() => onSelectName(s.name)} shadow="sm">
              <CardBody>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg">{s.name}</span>
                  {typeof s.score === "number" && (
                    <Chip size="sm" color="warning" variant="flat">
                      {Math.round(s.score * 100)}%
                    </Chip>
                  )}
                </div>
                {s.meaning && (
                  <p className="text-sm text-default-500 mb-2">{s.meaning}</p>
                )}
                <div className="flex items-center justify-between">
                  {s.origin && (
                    <p className="text-xs text-default-400">{s.origin}</p>
                  )}
                  {s.gender && (
                    <Chip size="sm" variant="flat" color={s.gender === 'female' ? 'secondary' : s.gender === 'male' ? 'primary' : 'default'}>
                      {s.gender}
                    </Chip>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
