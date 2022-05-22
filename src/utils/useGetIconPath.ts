import { useEffect, useRef } from "react";

export const useIcon = (value: string) => {
  const suffix = value.split(".").pop();

  let pathName = "";

  switch (suffix) {
    case "tsx":
      pathName = "../../public/assets/icons/reactts.svg";
      break;
    case "html":
      pathName = "../../public/assets/icons/html.svg";
      break;
    case "scss":
      pathName = "../../public/assets/icons/scss.svg";
      break;
    case "md":
      pathName = "../../public/assets/icons/text.svg";
      break;
    case "test":
      pathName = "../../public/assets/icons/test.svg";
      break;
    case "json":
      pathName = "../../public/assets/icons/json.svg";
      break;
    default:
      pathName = "../../public/assets/icons/git.svg";
  }
  return pathName;
};
