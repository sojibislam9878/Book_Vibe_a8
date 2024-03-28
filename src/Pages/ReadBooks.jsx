// import { useEffect, useState } from "react";
import useReadedBooksLS from "../Hooks/useReadedBooksLS";
import NoData from "../components/NoData";
import ReadBook from "../components/ReadBook";

const ReadBooks = () => {
  const { readedBooksLS = [] } = useReadedBooksLS();
  console.log(readedBooksLS.length);
  if (readedBooksLS.length <= 0) {
    return (
      <NoData></NoData>
    );
  }
  return (
    <div className="container mx-auto p-4">
      {readedBooksLS.map((items) => (
        <ReadBook key={items.bookId} items={items}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
