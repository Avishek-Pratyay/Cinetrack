import { Search, Plus, X, ListFilter, Eye, EyeOff } from "lucide-react";

const FILTERS = [
  { value: "all", label: "All", Icon: ListFilter },
  { value: "watched", label: "Watched", Icon: Eye },
  { value: "unwatched", label: "Unwatched", Icon: EyeOff },
];

export default function Controls({
  search,
  onSearchChange,
  filter,
  onFilterChange,
  onAddClick,
  isAddOpen,
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex-1 sm:max-w-xs">
          <span className="sr-only">Search by title</span>
          <Search
            size={15}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-cine-cream/40"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title..."
            className="w-full rounded-md border border-cine-surface-2 bg-cine-surface py-2.5 pl-9 pr-8 text-sm text-cine-cream placeholder:text-cine-cream/40 focus:border-cine-gold focus:outline-none focus:ring-1 focus:ring-cine-gold"
          />
          {search && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-cine-cream/40 hover:text-cine-cream"
            >
              <X size={14} />
            </button>
          )}
        </label>

        <div
          role="tablist"
          aria-label="Filter by watched status"
          className="inline-flex rounded-md border border-cine-surface-2 bg-cine-surface p-1"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              onClick={() => onFilterChange(f.value)}
              className={`inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cine-gold ${
                filter === f.value
                  ? "bg-cine-gold text-cine-bg"
                  : "text-cine-cream/70 hover:text-cine-cream"
              }`}
            >
              <f.Icon size={14} />
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onAddClick}
        aria-expanded={isAddOpen}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-cine-teal px-4 py-2.5 text-sm font-semibold text-cine-bg transition-transform hover:brightness-110 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cine-gold"
      >
        {isAddOpen ? <X size={15} /> : <Plus size={15} />}
        {isAddOpen ? "Close form" : "Add movie"}
      </button>
    </div>
  );
}
