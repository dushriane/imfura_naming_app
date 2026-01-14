"use client";

import { Card, CardBody, CardHeader, Slider } from "@heroui/react";

interface FilterControlsProps {
  weights: { christian: number; traditional: number; modern: number };
  onChange: (w: { christian: number; traditional: number; modern: number }) => void;
}

export default function FilterControls({ weights, onChange }: FilterControlsProps) {
  const set = (key: keyof typeof weights, value: number) => {
    const v = Math.max(0, Math.min(1, value));
    const remain = 1 - v;
    const otherKeys = (Object.keys(weights) as (keyof typeof weights)[]).filter(k => k !== key);
    const even = remain / otherKeys.length;
    const next = { ...weights };
    next[key] = v;
    otherKeys.forEach(k => (next[k] = even));
    onChange(next);
  };

  return (
    <Card className="max-w-4xl">
      <CardHeader>
        <h3>Name Style Weights</h3>
      </CardHeader>
      <CardBody className="gap-6">
        <Slider
          label="Christian"
          color="secondary"
          step={0.01}
          minValue={0}
          maxValue={1}
          value={weights.christian}
          onChange={(value) => set("christian", value as number)}
          getValue={(value) => `${Math.round((value as number) * 100)}%`}
        />
        <Slider
          label="Traditional / Kinyarwanda"
          color="primary"
          step={0.01}
          minValue={0}
          maxValue={1}
          value={weights.traditional}
          onChange={(value) => set("traditional", value as number)}
          getValue={(value) => `${Math.round((value as number) * 100)}%`}
        />
        <Slider
          label="Modern"
          color="warning"
          step={0.01}
          minValue={0}
          maxValue={1}
          value={weights.modern}
          onChange={(value) => set("modern", value as number)}
          getValue={(value) => `${Math.round((value as number) * 100)}%`}
        />
      </CardBody>
    </Card>
  );
}
