import React from "react";

interface Props {
  data: {
    project_name: Record<string, string>;
  };
  displayLang: string;
  setDisplayLang: (lang: string) => void;
}

const LANGUAGE_LABELS: Record<string, string> = { vn: "Vietnamese", en: "English" };

const DisplayContent: React.FC<Props> = ({ data, displayLang, setDisplayLang }) => {
  return (
    <div style={{ marginTop: 40, padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h3>Submitted Data Display</h3>

      <div style={{ marginBottom: 20 }}>
        <label>
          Change Display Language:{" "}
          <select value={displayLang} onChange={(e) => setDisplayLang(e.target.value)}>
            {Object.entries(LANGUAGE_LABELS).map(([code, label]) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <strong>Project Name ({LANGUAGE_LABELS[displayLang]}):</strong>
        <p style={{ padding: 10, backgroundColor: "#f9f9f9", borderRadius: 4 }}>
          {data.project_name[displayLang] ?? "(No data)"}
        </p>
      </div>
    </div>
  );
};

export default DisplayContent;
