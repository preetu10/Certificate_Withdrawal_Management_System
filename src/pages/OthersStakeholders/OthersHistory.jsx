import { useQuery } from "@tanstack/react-query";
import Provost from "../provost/provost";
import { PaginationDemo } from "../student/history/pagination";
import useAxiosPublic from "@/customHooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/components/functions/AuthProvider";

function OthersHistory() {
  const [pageLimit, setPageLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: `/certificate-withdrawal/search-formData/${
      user?.user_id
    }?currentPage=${currentPage}${pageLimit ? "&pageLimit=" + pageLimit : ""}`,
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(
          `/certificate-withdrawal-otherStakeholders/search-formData/${
            user?.user_id
          }?currentPage=${currentPage}${
            pageLimit ? "&pageLimit=" + pageLimit : ""
          }`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("session_id"),
            },
          }
        );
        // console.log(res?.data);
        return res?.data;
      } catch (error) {
        console.log("Failed to fetch student history");
      }
    },
  });
  useEffect(() => {
    refetch();
  }, [currentPage, pageLimit]);
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <Provost
        history={data?.data}
        pageLimit={pageLimit}
        currentPage={currentPage}
        role={user?.role}
      ></Provost>
      {pageLimit ? (
        <PaginationDemo
          currentPage={currentPage}
          pageLimit={pageLimit}
          setCurrentPage={setCurrentPage}
          setPageLimit={setPageLimit}
          next={data?.next}
          previous={data?.previous}
          totalPage={data?.page_count}
        ></PaginationDemo>
      ) : (
        <></>
      )}
    </div>
  );
}

export default OthersHistory;
