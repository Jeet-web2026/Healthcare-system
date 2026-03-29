import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const baseTitle = "Happy Health | One Stop Medical Management System";

    const title =
      path === "/"
        ? baseTitle
        : path
            .replace("/", "")
            .replace("-", " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())
            ? `${path.replace("/", "").replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())} | ${baseTitle}`
            : baseTitle;

    document.title = title;
  }, [location]);
};

export default usePageTitle;
