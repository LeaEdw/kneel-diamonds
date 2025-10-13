import { saveCustomSelections } from "./TransientState.js";

const handleSelectionSubmission = (clickEvent) => {
  if (clickEvent.target.id === "submit-button") {
    saveCustomSelections();
    console.log("Button clicked!");
  }
};

export const SubmissionButton = () => {
  document.addEventListener("click", handleSelectionSubmission);
  
  return `<button id='submit-button'>Save Choices</button>`;
};
