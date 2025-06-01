// ProjectForm.tsx
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Lang = "vn" | "en";

interface LanguageBlock {
  name: string;
}

export interface FormData {
  multiLang: boolean;
  projectNumber: string;
  languages: Partial<Record<Lang, LanguageBlock>>;
}

const languageBlockSchema = z.object({
  name: z.string().min(1, "Project name is required"),
});

const formSchema = z.object({
  multiLang: z.boolean(),
  projectNumber: z.string().min(1, "Project number is required"),
  languages: z.record(languageBlockSchema).refine(
    (langs, ctx) => {
      const multiLang = ctx.parent?.multiLang;
      if (!multiLang) {
        // When multiLang is false, only one language block must be present
        const keys = Object.keys(langs);
        return keys.length === 1;
      }
      return true;
    },
    {
      message:
        "If multi-language is disabled, exactly one language block must be provided",
      path: ["languages"],
    }
  ),
});

const LANGUAGES: Lang[] = ["vn", "en"];

interface ProjectFormProps {
  onSubmit: (data: FormData) => void;
  defaultLang: Lang;
}

export function ProjectForm({ onSubmit, defaultLang }: ProjectFormProps) {
  const defaultValues: FormData = {
    multiLang: false,
    projectNumber: "",
    languages: {
      [defaultLang]: { name: "" },
    },
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const multiLang = watch("multiLang");
  const languages = watch("languages");

  const [inputLang, setInputLang] = useState<Lang>(defaultLang);

  // When multiLang is disabled, keep only the current inputLang block
  useEffect(() => {
    if (!multiLang) {
      const currentBlock = languages?.[inputLang];
      setValue("languages", {
        [inputLang]: currentBlock || { name: "" },
      });
    }
  }, [multiLang, inputLang, languages, setValue]);

  // When inputLang changes and multiLang is false, reset languages accordingly
  useEffect(() => {
    if (!multiLang) {
      const currentBlock = languages?.[inputLang];
      setValue("languages", {
        [inputLang]: currentBlock || { name: "" },
      });
    }
  }, [inputLang, multiLang, languages, setValue]);

  const submitHandler: SubmitHandler<FormData> = (data) => {
    onSubmit(data);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>Project Input Form</h2>

      <label>
        <input type="checkbox" {...register("multiLang")} />
        Enable multi-language input
      </label>

      {multiLang && (
        <div style={{ marginTop: 10 }}>
          <label>
            Select input language:{" "}
            <select
              value={inputLang}
              onChange={(e) => setInputLang(e.target.value as Lang)}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      <form onSubmit={handleSubmit(submitHandler)} style={{ marginTop: 20 }}>
        <div style={{ marginBottom: 10 }}>
          <label>
            Project Number:{" "}
            <input
              {...register("projectNumber")}
              placeholder="Enter project number"
            />
          </label>
          <div style={{ color: "red", fontSize: 12 }}>
            {errors.projectNumber?.message}
          </div>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>
            Project Name ({inputLang.toUpperCase()}):{" "}
            <input
              {...register(`languages.${inputLang}.name` as const)}
              placeholder={`Enter project name in ${inputLang.toUpperCase()}`}
            />
          </label>
          <div style={{ color: "red", fontSize: 12 }}>
            {errors.languages?.[inputLang]?.name?.message}
          </div>
        </div>

        <button type="submit" style={{ marginTop: 10 }}>
          Submit
        </button>
      </form>
    </div>
  );
}
