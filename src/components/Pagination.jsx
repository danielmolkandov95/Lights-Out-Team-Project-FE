

function Pagination ( { scoresPerPage, totalScores, paginate} ) {
const pageNumbers = [];

for (let i = 1; i <= Math.ceil(totalScores / scoresPerPage); i++) {
    pageNumbers.push(i);
}
    return(

        <nav className="numbers">
            <ul className="pagination">
                {pageNumbers.map(number => 
                    <li key={number} className="page-item">
                        <a onClick={()=> paginate(number)} href="#" className="page-link">{number}</a>
                    </li>)}
            </ul>
        </nav>
    )
}

export default Pagination;