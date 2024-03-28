import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ progress }) => {
  // Define the major stages you want to filter
  const majorStages = [
    "law-making process",
    "introduced",
    "first reading in the Senate",
    "second reading in the Senate",
    "consideration in committee in the Senate",
    "report stage in the Senate",
    "third reading in the Senate",
    "first reading in the House of Commons",
    "second reading in the House of Commons",
    "consideration in committee in the House of Commons",
    "report stage in the House of Commons",
    "third reading in the House of Commons",
    "Royal Assent",
  ];

  // Convert progress string to lowercase
  const lowercaseProgress = progress.toLowerCase();

  // Use regular expression to find matches in the lowercase progress string
  const matches = majorStages.filter((stage) =>
    lowercaseProgress.includes(stage.toLowerCase())
  );

  // Find the index of the current stage in the majorStages array
  const currentIndex =
    matches.length > 0 ? majorStages.indexOf(matches[0]) : -1;

  // Calculate the percentage completion
  const percentage =
    currentIndex >= 0 ? (currentIndex / (majorStages.length - 1)) * 100 : 0;

  // Define CSS styles for the progress bar
  const progressBarStyles = {
    width: `${percentage}%`,
  };

  return (
    <div className="progress">
      {matches.length > 0 ? (
        <>
          <ul className="progress__text">
            {matches.map((stage, index) => (
              <li key={index}>
                <p>{stage}</p>
              </li>
            ))}
          </ul>
          <div className="progress__bar">
            <div
              className="progress__current-progress"
              style={progressBarStyles}
            ></div>
          </div>
        </>
      ) : (
        <p className="progress__text--not-found">Voting status not found.</p>
      )}
    </div>
  );
};

export default ProgressBar;
