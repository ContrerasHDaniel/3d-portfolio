import React from "react";

const typeAlerts = {
  danger: "bg-red-800",
  warning: "bg-yellow-800",
  success: "bg-blue-800",
};

const badgeTypes = {
  danger: "bg-red-500",
  warning: "bg-red-500",
  success: "bg-blue-500",
};

const Alert = ({ type, text }) => {
  return (
    <div className="absolute lg:top-10 top-14 lg:left-10 left-5 right-0 flex justify-center items-center">
      <div
        className={`${typeAlerts[type]} p-2 text-indigo-100 leading-none lg:rounded-full lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${badgeTypes[type]} rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "success" ? "Success" : "Failed"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
