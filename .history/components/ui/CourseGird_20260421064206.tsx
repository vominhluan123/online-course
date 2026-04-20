import React from "react";

const CourseGird = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="course grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
};

export default CourseGird;
