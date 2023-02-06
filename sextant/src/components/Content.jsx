import React, { useState } from "react";

const Content = (props) => {
  //   console.log(props);
  //   console.log(props.children);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {props.children.map((item, i) => {
            return (
              <li className="mr-2">
                <button
                  onClick={() => handleTabs(i)}
                  className={`inline-block p-4 ${
                    activeTab === i
                      ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }`}
                >
                  {item.props.request.toUpperCase()}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {props.children.map((item, i) => {
        return (
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === i ? "" : "hidden"
            }`}
            aria-labelledby="profile-tab"
          >
            <h3 className="font-medium text-gray-800 dark:text-white">
              {`This is the requested ${item.props.request.toUpperCase()}:`}
            </h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
