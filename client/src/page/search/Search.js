import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import Notification from "../../components/Notification/Notification";
import Layout from "../../components/Layout/Layout";
import DisplayBooks from "../../components/displayBooks/displayBook";
import * as api from "../../config/apiBackEnd";

function SearchPage() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState(false);
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
          setSearch(true);
        }
      } catch (error) {
        setError(true);
      }
    };
    searchBook();
  }, [searchInput]);

  function displaySearch() {
    if (books.length > 0 && search) {
      setSearch(false);
      return <DisplayBooks books={books} title={"Sách Tìm Kiếm"} />;
    } else if (books.length === 0 && search) {
      setSearch(false);
      return <div className="my-[30vh]">Không tìm thấy kết quả tìm kiếm</div>;
    } else {
      setSearch(false);
      return (
        <div className="flex items-center justify-center pt-10">
          <Spinner width="w-1/12" height="h-1/12" />
        </div>
      );
    }
  }

  return (
    <div>
      <Layout>{displaySearch()}</Layout>
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
