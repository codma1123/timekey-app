import { getVacations } from "@/api/get-vacations";
import VacationItem from "@/app/(main)/(routes)/[userId]/vacation/vacation-item";

import React from "react";

const VacationList = async ({ id }: { id: any }) => {
  const vacations = await getVacations();

  return (
    <>
      <div className="text-xl w-full text-white font-bold mt-4">연차 내역</div>

      {vacations.map((vacation) => (
        <VacationItem
          vacation={vacation}
          key={vacation.id}
        />
      ))}
    </>
  );
};

export default React.memo(VacationList);
