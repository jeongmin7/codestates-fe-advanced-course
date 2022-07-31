import styled from "styled-components";
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  gap: 5px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: 1rem;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    cursor: revert;
    transform: revert;
    font-size: 1.2rem;
    font-weight: 900;
  }
`;
const Pagination = ({ total, postsPerPage, currentPage, setCurrentPage }) => {
  const pageCount = Math.ceil(total / postsPerPage);
  return (
    <>
      <Nav>
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </Button>
        {Array(pageCount)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              aria-current={currentPage === i + 1 ? "currentPage" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          &gt;
        </Button>
      </Nav>
    </>
  );
};

export default Pagination;
