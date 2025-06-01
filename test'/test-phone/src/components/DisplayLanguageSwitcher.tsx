import React from "react";

interface Props {
  displayLang: string;
  setDisplayLang: (lang: string) => void;
}

const LANGUAGE_LABELS: Record<string, string> = { vn: "Vietnamese", en: "English" };

const DisplayLanguageSwitcher: React.FC<Props> = ({ displayLang, setDisplayLang }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <label>
        Display Language:{" "}
        <select value={displayLang} onChange={(e) => setDisplayLang(e.target.value)}>
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

export default DisplayLanguageSwitcher;
