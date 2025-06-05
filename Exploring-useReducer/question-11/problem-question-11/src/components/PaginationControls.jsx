const PaginationControls = ({ currentPage, total, perPage, onPageChange }) => {
  const totalPages = Math.ceil(total / perPage);
  return (
    <div>
      {Array.from({ length: totalPages }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(idx + 1)}
          style={{ fontWeight: idx + 1 === currentPage ? "bold" : "normal" }}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};
export default PaginationControls;