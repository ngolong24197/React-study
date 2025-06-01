import React from "react";

interface Props {
  inputLang: string;
  setInputLang: (lang: string) => void;
}

const LANGUAGE_LABELS: Record<string, string> = { vn: "Vietnamese", en: "English" };

const InputLanguageSwitcher: React.FC<Props> = ({ inputLang, setInputLang }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <label>
        Input Data Language:{" "}
        <select value={inputLang} onChange={(e) => setInputLang(e.target.value)}>
          {Object.entries(LANGUAGE_LABELS).map(([code, label]) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default InputLanguageSwitcher;
