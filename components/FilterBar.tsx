type FilterBarProps = {
  filters: string[];
};

export default function FilterBar({ filters }: FilterBarProps) {
  return (
    <section className="border-y border-black py-5">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            className="border border-black px-4 py-2 text-sm uppercase tracking-wide transition hover:bg-black hover:text-white"
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}