"use client";

import { HeroUIProvider as Provider } from "@heroui/react";

export default function HeroUIProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
