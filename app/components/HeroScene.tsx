import { Card, CardBody } from "@heroui/react";
import Logo from "./Logo";

export default function HeroScene() {
  return (
    <Card className="w-full">
      <CardBody className="items-center justify-center text-center p-12">
        <Logo />
        <p className="text-xl mt-4">
          Discover the perfect Rwandan name
        </p>
        <p className="text-sm text-default-500 mt-2">
          ✨ Blending Faith, Culture & Family
        </p>
      </CardBody>
    </Card>
  );
}
