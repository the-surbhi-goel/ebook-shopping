import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `eBook: ${title}`;
  });

  return null;
};
