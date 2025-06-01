
// ProjectDisplay.tsx
import React, { useState } from "react";
import type { FormData } from "./ProjectForm";

type Lang = "vn" | "en";

const LANGUAGES: Lang[] = ["vn", "en"];

interface ProjectDisplayProps {
  data: FormData | null;
}

export function ProjectDisplay({ data }: ProjectDisplayProps) {
  const [displayLang, setDisplayLang] = useState<Lang>("vn");

  if (!data) {
    return <p>No data submitted yet.</p>;
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h3>Display Submitted Data</h3>

      <label>
        Select display language:{" "}
        <select
          value={displayLang}
          onChange={(e) => setDisplayLang(e.target.value as Lang)}
        >
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
      </label>

      <div style={{ marginTop: 20, border: "1px solid #ccc", padding: 10 }}>
        <p>
          <strong>Project Number:</strong> {data.projectNumber}
        </p>
        <p>
          <strong>Project Name ({displayLang.toUpperCase()}):</strong>{" "}
          {data.languages?.[displayLang]?.name || (
            <em>No data in this language</em>
          )}
        </p>
      </div>
    </div>
  );
}
