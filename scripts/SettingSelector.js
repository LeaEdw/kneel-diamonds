import { setSetting } from "./TransientState.js";

const handleSettingChoice = (event) => {
  if (event.target.name === "setting") {
    let updatedSettingOption = parseInt(event.target.value);
    setSetting(updatedSettingOption);
    console.log(updatedSettingOption);
  }
};

export const SettingChoice = () => {

    document.addEventListener("change", handleSettingChoice)

    let html = `<h2>Setting</h2>
                    <div>
                        <div><input type="radio" name="setting" value="1"/> Ring</div>
                        <div><input type="radio" name="setting" value="2"/> Earring</div>
                        <div><input type="radio" name="setting" value="3"/> Necklace</div>

                    </div>
    
    `
    return html;
}