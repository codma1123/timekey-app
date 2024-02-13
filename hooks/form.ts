import { ChangeEvent, useState } from "react";

export default function useForm<T>(initial: T): [T, (e: ChangeEvent<HTMLInputElement>) => void] {
  const [state, setState] = useState<T>(initial);

  const setForm = (e: ChangeEvent<HTMLInputElement>) => {
    setState((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  return [state, setForm];
}
