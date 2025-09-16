import { saveCustomSelections } from "./TransientState.js";

const handleSelectionSubmission = (clickEvent) => {
  if (clickEvent.target.id === "submission-button") {
    saveCustomSelections();
    console.log("Button clicked!");
  }
};

export const SubmissionButton = () => {
  document.addEventListener("click", handleSelectionSubmission);
  
  return `<button id='submission-button'>Save Choices</button>`;
};
