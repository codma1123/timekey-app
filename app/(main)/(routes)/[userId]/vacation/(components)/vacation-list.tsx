import { getVacations } from "@/api/get-vacations";
import VacationItem from "@/app/(main)/(routes)/[userId]/vacation/(components)/vacation-item";

const VacationList = async ({ userId }: { userId: number }) => {
  const vacations = await getVacations(userId);

  return vacations.map((vacation, i) => (
    <VacationItem
      vacation={vacation}
      key={i}
    />
  ));
};

export default VacationList;
