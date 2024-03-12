import { getVacations } from "@/api/get-vacations";
import VacationItem from "@/app/(main)/(routes)/[userId]/vacation/(component)/vacation-item";

const VacationListRequest = async ({ id }: { id: number }) => {
  const vacations = await getVacations(id);

  return vacations.map((vacation, i) => (
    <VacationItem
      vacation={vacation}
      key={i}
    />
  ));
};

export default VacationListRequest;
