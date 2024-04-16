import React from "react";

export const EducationCard = ({ education }: any) => {
  return (
    <div className="mb-5">
      <div className="space-y-2">
        <p className="text-xl text-gray-700 dark:text-rose-100 md:text-2xl font-bold">
          {education.title}
        </p>
        <h3 className="dark:text-pink-200 light-mode-text-color text-md md:text-xl font-bold">
          {education.company_name}
        </h3>
        <p className="text-md text-gray-500">{education.location}</p>
        <h4 className="text-md ">{education.date}</h4>
      </div>

      <div className="h-[1px] bg-gray-500 mt-4" />
    </div>
  );
};
