import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-black tracking-tight text-white">
        {title}
      </h1>

      <p className="mt-2 text-base text-slate-400">
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeader;