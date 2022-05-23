import React from "react";

export const useLastContributed = (date: Date) => {
  const today = new Date();

  const calcDateDiff = () => {
    const diff = Math.floor(today.getTime() - date.getTime());
    const day = 1000 * 60 * 60 * 24;

    const days = Math.floor(diff / day);
    const months = Math.floor(days / 31);
    const years = Math.floor(months / 12);

    return years > 1
      ? `${years} year${years > 1 ? "s" : ""}`
      : months > 1
      ? `${months} month${months > 1 ? "s" : ""}`
      : `${days} day${days > 1 ? "s" : ""}`;
  };

  return `${calcDateDiff()} ago`;
};
