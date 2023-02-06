import React, { useState } from "react";

// This component will later on take in data and display tabs and information from children components

const Content = () => {
  // set up to switch between 2 tabs - for additional tabs, logic can be reworked into a function to set the selected one and hide the others
  const [showTab1, setShowTab1] = useState(true);
  const [showTab2, setShowTab2] = useState(false);

  const handleTabs = (tab) => {
    if (tab === "tab1") {
      setShowTab1(true);
      setShowTab2(false);
    }

    if (tab === "tab2") {
      setShowTab1(false);
      setShowTab2(true);
    }
  };

  return (
    <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <button
              onClick={() => handleTabs("tab1")}
              className={`inline-block p-4 ${
                showTab1
                  ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
            >
              Profile
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => handleTabs("tab2")}
              className={`inline-block p-4 ${
                showTab2
                  ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              aria-current="page"
            >
              Dashboard
            </button>
          </li>
        </ul>
      </div>
      <div
        className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
          showTab1 ? "" : "hidden"
        }`}
        aria-labelledby="profile-tab"
      >
        <h3 className="font-medium text-gray-800 dark:text-white">
          First Tab's Heading
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the{" "}
          <strong className="font-medium text-gray-800 dark:text-white">
            First tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next.
        </p>
      </div>
      <div
        className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
          showTab2 ? "" : "hidden"
        }`}
        aria-labelledby="profile-tab"
      >
        <h3 className="font-medium text-gray-800 dark:text-white">
          Second Tab's Heading
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the{" "}
          <strong className="font-medium text-gray-800 dark:text-white">
            Second tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next.
        </p>
      </div>
    </div>
  );
};

export default Content;
