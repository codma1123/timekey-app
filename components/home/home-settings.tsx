"use client";

import { MapPin, Settings, User2, Bell } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useMemo, useState } from "react";

interface HomeSettingsProps {
  user?: any;
}

const HomeSettings = ({ user }: HomeSettingsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const settingControls = useAnimation();

  const id = useMemo(() => pathname.split("/")[1], [pathname]);

  const onTouchStart = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });

    await settingControls.start({
      rotate: [0, 45],
      transition: { duration: 0.2 },
    });
  };

  return (
    <div className="absolute right-6  flex items-center gap-x-2">
      <motion.button className="group bg-primary-dark p-2 rounded-full">
        <MapPin className="w-8 h-8 text-secondary group-active:text-main group-active:scale-110 transition" />
      </motion.button>

      <DropdownMenu modal>
        <DropdownMenuTrigger asChild>
          <motion.button
            className="bg-primary-dark p-2 rounded-full"
            onTouchStart={onTouchStart}
            animate={settingControls}
            transition={{ delay: 1.2, duration: 0.3 }}
          >
            <Settings className="w-8 h-8 text-secondary" />
          </motion.button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-primary-dark text-white rounded-3xl ring-0 border-0 mr-3 mt-3">
          <DropdownMenuItem
            className="text-xl"
            onClick={() => router.push(`/${id}/user`)}
          >
            <User2 className="mr-2 h-6 w-6" />
            사용자
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HomeSettings;
