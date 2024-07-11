import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
function createArray(N) {
  let newArr = [];
  for (let i = 1; i <= N; i++) {
    newArr.push(i);
  }
  return newArr;
}
export function PaginationDemo({
  currentPage,
  pageLimit,
  setCurrentPage,
  setPageLimit,
  next,
  previous,
  totalPage,
}) {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    setPages(createArray(totalPage));
  }, [totalPage]);
  console.log(next, previous);
  return (
    <div className="pagination mx-auto mt-5">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              onClick={() => setCurrentPage(previous?.page)}
              disabled={!previous ? true : false}
              variant="ghost"
            >
              {"< "}Previous
            </Button>
          </PaginationItem>
          {currentPage >= 3 && totalPage != 3 && (
            <>
              <PaginationItem>
                <PaginationLink
                  className={"cursor-pointer"}
                  onClick={() => setCurrentPage(1)}
                  isActive={1 === currentPage}
                >
                  {1}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          {totalPage >= 5 && currentPage >= 4 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {pages?.map((p) => {
            if (currentPage === 1 && [1, 2, 3].includes(p))
              return (
                <PaginationItem key={p}>
                  <PaginationLink
                    className={"cursor-pointer"}
                    onClick={() => setCurrentPage(p)}
                    isActive={p === currentPage}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              );
            else if (
              currentPage === totalPage &&
              [totalPage - 2, totalPage - 1, totalPage].includes(p)
            )
              return (
                <PaginationItem key={p}>
                  <PaginationLink
                    className={"cursor-pointer"}
                    onClick={() => setCurrentPage(p)}
                    isActive={p === currentPage}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              );
            else if (
              [currentPage - 1, currentPage, currentPage + 1].includes(p)
            )
              return (
                <PaginationItem key={p}>
                  <PaginationLink
                    className={"cursor-pointer"}
                    onClick={() => setCurrentPage(p)}
                    isActive={p === currentPage}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              );
          })}
          {currentPage <= totalPage - 3 && totalPage >= 5 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {currentPage <= totalPage - 2 && totalPage != 3 && (
            <>
              <PaginationItem>
                <PaginationLink
                  className={"cursor-pointer"}
                  onClick={() => setCurrentPage(totalPage)}
                  isActive={totalPage === currentPage}
                >
                  {totalPage}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <Button
              onClick={() => setCurrentPage(next?.page)}
              disabled={!next ? true : false}
              variant="ghost"
            >
              Next{" >"}
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

// {currentPage > 2 && (
//     <div className="flex gap-3 items-end">
//       <SingleButton p={1} setPage={setPage} currentPage={currentPage} />
//       <p>...</p>
//     </div>
//   )}
//   {pages.map((p, i) => {
//     if (currentPage === 1 && p <= 3)
//       return (
//         <SingleButton
//           key={p}
//           p={p}
//           setPage={setPage}
//           currentPage={currentPage}
//         />
//       );
//     else if (currentPage === pageCounter && p >= pageCounter - 2)
//       return (
//         <SingleButton
//           key={p}
//           p={p}
//           setPage={setPage}
//           currentPage={currentPage}
//         />
//       );
//     else if (p >= currentPage - 1 && p <= currentPage + 1)
//       return (
//         <SingleButton
//           key={p}
//           p={p}
//           setPage={setPage}
//           currentPage={currentPage}
//         />
//       );
//   })}
//   {currentPage < pageCounter - 1 && (
//     <div className="flex gap-3 items-end">
//       <p>...</p>
//       <SingleButton
//         p={pageCounter}
//         setPage={setPage}
//         currentPage={currentPage}
//       />
//     </div>
//   )}
