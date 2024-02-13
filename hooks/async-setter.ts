import { useState } from "react";

const useAsyncState = (delay: number = 2000): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(false);

  const setAsyncState = () => {
    setState(true);
    setTimeout(() => setState(false), delay);
  };

  return [state, setAsyncState];
};

export default useAsyncState;
