import React from "react";

const typeAlerts = {
  danger: "bg-red-500",
  warning: "bg-yellow-600",
  success: "bg-blue-800",
};

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-10 right-0 flex justify-center items-center">
      <div
        className={`${typeAlerts[type]} p-2 text-indigo-100 leading-none lg:rounded-full lg:inline-flex`}
        role="alert"
      >
        <p
          className={`${typeAlerts[type]} rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "success" ? "Success" : "Failed"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
