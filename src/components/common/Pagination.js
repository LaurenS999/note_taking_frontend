import '../../styles/pagination.css'
function Pagination({currentPage,onPageChange, tes}){
    
    return(
        <div className="pagination">
        {tes.map((item, idx) =>
          typeof item === "number" ? (
            <button
              key={`page-${item}`} // pastikan key unik
              onClick={() => onPageChange(item)}
              className={currentPage === item ? "active" : ""}
            >
              {item}
            </button>
          ) : (
            <span key={`ellipsis-${idx}`} className="ellipsis">...</span>
          )
        )}
      </div>
    )
}

export default Pagination;