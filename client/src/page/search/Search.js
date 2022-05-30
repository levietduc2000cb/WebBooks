import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Notification from "../../components/Notification/Notification";
import Layout from "../../components/Layout/Layout";
import DisplayBooks from "../../components/displayBooks/displayBook";
import * as api from "../../config/apiBackEnd";

function SearchPage() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const params = useParams();
  const searchInput = params.searchInput;
  useEffect(() => {
    window.scrollTo(0, 0);
    let url = new URL(`${api.pathProducts}/search`);
    url.search = new URLSearchParams({
      keyword: searchInput,
    });
    const searchBook = async () => {
      try {
        const res = await fetch(url)
          .then((response) => response.json())
          .then((data) => data);
        if (res) {
          setBooks(res.data);
        }
      } catch (error) {
        setError(true);
      }
    };
    searchBook();
  }, [searchInput]);
  return (
    <div>
      <Layout>
        {books.length > 0 ? (
          <DisplayBooks books={books} title={"Sách Tìm Kiếm"} />
        ) : (
          <div className="my-[30vh]">Không tìm thấy kết quả tìm kiếm</div>
        )}
      </Layout>
      {error && (
        <Notification
          title="Tìm kiếm thất bại"
          stateCreate="Error"
          onClick={() => {
            setError(false);
          }}
        />
      )}
    </div>
  );
}

export default SearchPage;
