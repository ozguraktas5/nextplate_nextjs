import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import avatarSmall from "../public/images/avatar-sm.png";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-gray-100 dark:bg-black">
                <CardContent className="flex flex-col aspect-square gap-6 items-center justify-center p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                  </svg>
                  <blockquote>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam assumenda tempora omnis voluptatibus ex? Fuga sunt
                    corporis ipsam suscipit inventore.
                  </blockquote>
                  <div className="flex gap-2">
                    <Image src={avatarSmall} width={50} height={30} alt="avatarSmall" />
                    <div>
                        <h3 className="text-md lg:text-lg font-bold">Marvin McKinney</h3>
                        <p>Web Designer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
