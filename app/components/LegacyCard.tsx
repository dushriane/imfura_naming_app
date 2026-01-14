"use client";

import { Card, CardBody, CardHeader, Divider, Link } from "@heroui/react";

interface SaintInfo {
  name?: string;
  feastDay?: string;
  patronage?: string;
  description?: string;
}

interface NotableInfo {
  name: string;
  description?: string;
  link?: string;
}

interface LegacyCardProps {
  name: string;
  meaning?: string;
  saint?: SaintInfo | null;
  notables?: NotableInfo[] | null;
}

export default function LegacyCard({ name, meaning, saint, notables }: LegacyCardProps) {
  return (
    <Card className="sticky top-4">
      <CardHeader className="flex-col items-start">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-xs text-default-400">Legacy Card</p>
      </CardHeader>
      <Divider />
      <CardBody className="gap-4">
        {meaning && (
          <div>
            <h3 className="text-sm font-bold uppercase mb-2">Meaning</h3>
            <p className="text-sm text-default-600">{meaning}</p>
          </div>
        )}

        {saint && (
          <div>
            <h3 className="text-sm font-bold uppercase mb-2">Patron Saint</h3>
            <div className="space-y-2">
              <p className="font-bold text-lg">{saint.name}</p>
              {saint.feastDay && (
                <p className="text-sm">
                  <span className="font-semibold">Feast Day:</span> {saint.feastDay}
                </p>
              )}
              {saint.patronage && (
                <p className="text-sm">
                  <span className="font-semibold">Patronage:</span> {saint.patronage}
                </p>
              )}
              {saint.description && (
                <p className="text-sm text-default-500">{saint.description}</p>
              )}
            </div>
          </div>
        )}

        {notables && notables.length > 0 && (
          <div>
            <h3 className="text-sm font-bold uppercase mb-2">Notable Figures</h3>
            <div className="space-y-3">
              {notables.map((n, idx) => (
                <Card key={idx} shadow="sm">
                  <CardBody className="gap-1">
                    <p className="font-bold">{n.name}</p>
                    {n.description && (
                      <p className="text-sm text-default-500">{n.description}</p>
                    )}
                    {n.link && (
                      <Link href={n.link} target="_blank" size="sm" isExternal>
                        Learn more
                      </Link>
                    )}
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
