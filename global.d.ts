import { v4 as uuidv4 } from "uuid";

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare global {
  type UUID = ReturnType<typeof uuidv4>;
}
