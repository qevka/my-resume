import { FC, memo } from "react";

import { TimelineItem } from "../../../data/dataDef";

const TimelineItem: FC<{ item: TimelineItem }> = memo(({ item }) => {
  const { title, date, location, content } = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center md:justify-start">
          <span className="text-sm font-medium italic sm:flex-none">WGU</span>
          <span className="mx-2">•</span>
          <span className="text-sm sm:flex-none">July 2019</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";
export default TimelineItem;
