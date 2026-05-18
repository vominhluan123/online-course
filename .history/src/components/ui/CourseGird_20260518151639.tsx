import React from "react";

const CourseGird = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-5">
      <div className="course grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
};

export default CourseGird;
