"use client";

import Content from "@/components/ui/content";
import Title from "@/components/ui/title";
import { MoonIcon } from "@radix-ui/react-icons";
import FullSheet from "@/components/ui/full-sheet";
import SlideDownWrapper from "@/app/components/motions/SlideDownWrapper";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const OvertimePage = () => {
  return (
    <>
      <Title
        title="야근"
        Icon={MoonIcon}
      />

      <SlideDownWrapper className="w-full">
        <Content>
          이번주 <span className="font-bold">3시간</span>이나 근무했어요.
        </Content>
      </SlideDownWrapper>

      <SlideDownWrapper className="w-full">
        <Content>{/* 아직 정산하지 않은 야근 수당이 <span className="font-bold">1건</span> 남아있어요. */}</Content>
      </SlideDownWrapper>

      <Drawer>
        <DrawerTrigger>진자?</DrawerTrigger>
        <DrawerContent className="border-none outline-none bg-white">
          <DrawerHeader>
            <DrawerTitle>진짜루 ?</DrawerTitle>
            <DrawerDescription>이거 못돌린다 ?</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button className="bg-light">Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <FullSheet
        beforeSlideContent={<div>전</div>}
        afterSlideContent={<div>후</div>}
      />
    </>
  );
};

export default OvertimePage;
