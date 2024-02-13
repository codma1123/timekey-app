import { AnimationDefinition, useAnimation } from "framer-motion";

export const useScale = () => {
  const controls = useAnimation();

  return {
    scale: (
      option: AnimationDefinition = {
        scale: [1.1, 1.2, 1.3],
        transition: { duration: 0.2 },
      }
    ) => controls.start(option),
  };
};
