import { useState } from "react";
import { Check, X, Clapperboard } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();
const EMPTY_FORM = { title: "", genre: "", year: "", posterUrl: "" };

function isValidUrl(value) {
  if (!value) return true; // poster is optional, but if given must be a valid url
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export default function AddMovieForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!form.title.trim()) next.title = "Title is required.";
    if (!form.genre.trim()) next.genre = "Genre is required.";

    const yearNum = Number(form.year);
    if (!form.year.trim()) {
      next.year = "Release year is required.";
    } else if (!Number.isInteger(yearNum) || yearNum < 1888 || yearNum > CURRENT_YEAR + 2) {
      next.year = `Enter a year between 1888 and ${CURRENT_YEAR + 2}.`;
    }

    if (!isValidUrl(form.posterUrl.trim())) {
      next.posterUrl = "Poster URL must be a valid link (or left blank).";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      title: form.title.trim(),
      genre: form.genre.trim(),
      year: Number(form.year),
      posterUrl:
        form.posterUrl.trim() ||
        `https://placehold.co/342x513/1b1b1f/e3b23c?text=${encodeURIComponent(
          form.title.trim()
        )}`,
    });

    setForm(EMPTY_FORM);
    setErrors({});
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-4 rounded-lg border border-cine-surface-2 bg-cine-surface p-5 sm:grid-cols-2"
    >
      <div className="flex items-center gap-2 sm:col-span-2">
        <Clapperboard size={20} className="text-cine-gold" strokeWidth={1.5} />
        <h2 className="font-display text-2xl tracking-wide text-cine-gold">
          Add a new entry
        </h2>
      </div>

      <Field label="Title" error={errors.title}>
        <input
          type="text"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="e.g. Interstellar"
          className={inputClass(errors.title)}
        />
      </Field>

      <Field label="Genre" error={errors.genre}>
        <input
          type="text"
          value={form.genre}
          onChange={(e) => handleChange("genre", e.target.value)}
          placeholder="e.g. Sci-Fi"
          className={inputClass(errors.genre)}
        />
      </Field>

      <Field label="Release year" error={errors.year}>
        <input
          type="number"
          value={form.year}
          onChange={(e) => handleChange("year", e.target.value)}
          placeholder="e.g. 2014"
          className={inputClass(errors.year)}
        />
      </Field>

      <Field label="Poster URL (optional)" error={errors.posterUrl}>
        <input
          type="text"
          value={form.posterUrl}
          onChange={(e) => handleChange("posterUrl", e.target.value)}
          placeholder="https://..."
          className={inputClass(errors.posterUrl)}
        />
      </Field>

      <div className="flex gap-3 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 rounded-md bg-cine-gold px-4 py-2.5 text-sm font-semibold text-cine-bg transition-transform hover:brightness-110 active:scale-[0.98]"
        >
          <Check size={15} />
          Save movie
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center gap-1.5 rounded-md border border-cine-surface-2 px-4 py-2.5 text-sm font-medium text-cine-cream/70 hover:text-cine-cream"
        >
          <X size={15} />
          Cancel
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-cine-cream/80">{label}</span>
      {children}
      {error && (
        <span role="alert" className="text-xs text-cine-crimson">
          {error}
        </span>
      )}
    </label>
  );
}

function inputClass(error) {
  return `rounded-md border bg-cine-bg px-3 py-2 text-sm text-cine-cream placeholder:text-cine-cream/30 focus:outline-none focus:ring-1 ${
    error
      ? "border-cine-crimson focus:ring-cine-crimson"
      : "border-cine-surface-2 focus:border-cine-gold focus:ring-cine-gold"
  }`;
}
