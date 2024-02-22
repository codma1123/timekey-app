import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ListItemProps {
  children?: ReactNode;
  className?: string;
  title?: string | ReactNode;
  content?: string | ReactNode;
}

const ListItem = ({ children, className, title, content }: ListItemProps) => {
  return (
    <div className={cn("flex items-center flex-wrap h-6 py-6", className)}>
      {children ? (
        children
      ) : (
        <>
          <div className="text-xl">{title}</div>
          <div className="text-lg ml-auto">{content}</div>
        </>
      )}
    </div>
  );
};

export default ListItem;
