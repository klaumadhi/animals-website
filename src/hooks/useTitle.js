import { useEffect } from "react";

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | Pet Expo`
  }, [title]);

  return null;
}
