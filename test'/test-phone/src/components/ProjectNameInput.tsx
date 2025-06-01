import React from "react";

interface Props {
  projectName: Record<string, string>;
  inputLang: string;
  displayLang: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LANGUAGE_LABELS: Record<string, string> = { vn: "Vietnamese", en: "English" };

const ProjectNameInput: React.FC<Props> = ({ projectName, inputLang, displayLang, onChange }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <label>
        Project Name ({LANGUAGE_LABELS[displayLang]} display):{" "}
        <input
          type="text"
          value={projectName[inputLang]}
          onChange={onChange}
          style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
        />
      </label>
    </div>
  );
};

export default ProjectNameInput;
