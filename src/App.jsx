import { useMemo, useState } from "react";
import useMovies from "./hooks/useMovies";
import useToasts from "./hooks/useToasts";
import Marquee from "./components/Marquee";
import Controls from "./components/Controls";
import AddMovieForm from "./components/AddMovieForm";
import MovieGrid from "./components/MovieGrid";
import ToastStack from "./components/ToastStack";

export default function App() {
  const { movies, isLoading, addMovie, toggleWatched, deleteMovie, setRating } =
    useMovies();
  const { toasts, addToast, dismissToast } = useToasts();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [isAddOpen, setIsAddOpen] = useState(false);

  const filteredMovies = useMemo(() => {
    const query = search.trim().toLowerCase();
    return movies.filter((movie) => {
      const matchesSearch = query
        ? movie.title.toLowerCase().includes(query)
        : true;
      const matchesFilter =
        filter === "all"
          ? true
          : filter === "watched"
          ? movie.watched
          : !movie.watched;
      return matchesSearch && matchesFilter;
    });
  }, [movies, search, filter]);

  const watchedCount = useMemo(
    () => movies.filter((m) => m.watched).length,
    [movies]
  );

  function handleAddMovie(movie) {
    addMovie(movie);
    setIsAddOpen(false);
    addToast(`Added "${movie.title}" to your collection`, "add");
  }

  function handleToggleWatched(id) {
    const movie = movies.find((m) => m.id === id);
    toggleWatched(id);
    if (movie) {
      addToast(
        movie.watched
          ? `Marked "${movie.title}" as unwatched`
          : `Marked "${movie.title}" as watched`,
        "watched"
      );
    }
  }

  function handleDelete(id) {
    const movie = movies.find((m) => m.id === id);
    deleteMovie(id);
    if (movie) addToast(`Removed "${movie.title}"`, "delete");
  }

  return (
    <div className="min-h-full pb-16">
      <Marquee total={movies.length} watchedCount={watchedCount} />

      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8">
        <Controls
          search={search}
          onSearchChange={setSearch}
          filter={filter}
          onFilterChange={setFilter}
          onAddClick={() => setIsAddOpen((v) => !v)}
          isAddOpen={isAddOpen}
        />

        {isAddOpen && (
          <AddMovieForm
            onSubmit={handleAddMovie}
            onCancel={() => setIsAddOpen(false)}
          />
        )}

        <MovieGrid
          movies={filteredMovies}
          isLoading={isLoading}
          onToggleWatched={handleToggleWatched}
          onDelete={handleDelete}
          onRate={setRating}
        />
      </main>

      <footer className="mx-auto max-w-6xl px-6 text-center font-mono text-xs text-cine-cream/30">
        CineTrack &middot; built with React &amp; localStorage
      </footer>

      <ToastStack toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
