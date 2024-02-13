"use client";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import Divider from "@/components/ui/divider";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Title from "@/components/ui/title";
import { delay } from "@/lib/delay";
import { Calculator, Calendar, CreditCard, MessageSquareWarning, Settings, Smartphone, SearchX, User } from "lucide-react";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [loading, setLoading] = useState(true);

  const path = usePathname();

  useEffect(() => {
    delay(3000).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Title
        className="text-black"
        title="사용자"
        Icon={User}
      />
      <Command className="rounded-lg text-black">
        <CommandInput
          placeholder="메뉴를 검색해보세요."
          className="text-xl"
        />
        <CommandList className="mt-4 overflow-visible">
          <CommandEmpty className="flex justify-center items-center my-4 gap-x-2">
            <SearchX className="text-gray-400" />
            검색 결과가 없습니다.
          </CommandEmpty>

          <CommandSeparator />
          <CommandGroup heading="설정">
            <CommandItem>
              <User className="mr-2 h-6 w-6" />
              <span className="text-xl">사용자 정보</span>
            </CommandItem>

            <CommandItem
              className="active:bg-slate-100 transition-all duration-300 py-4"
              onClick={() => redirect(path + "/general")}
            >
              <Settings className="mr-2 h-6 w-6" />
              <span className="text-xl">일반</span>
            </CommandItem>
            <CommandItem className="active:bg-slate-100 transition-all duration-300 py-4">
              <Smartphone className="mr-2 h-6 w-6" />
              <span className="text-xl">앱 설정</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="문의">
            <CommandItem>
              <User className="mr-2 h-6 w-6" />
              <span className="text-xl">사용자 정보</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="공지사항">
            <CommandItem>
              <MessageSquareWarning className="mr-2 h-6 w-6" />
              <span className="text-xl">공지사항</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
};

export default UserPage;
