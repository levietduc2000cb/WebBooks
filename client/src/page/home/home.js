import { useEffect, useState } from "react";

import Layout from "../../components/Layout/Layout";
import Slide from "../../components/Slide/Slide";
import DisplayBooks from "../../components/displayBooks/displayBook";
import * as api from "../../config/apiBackEnd";

function Home(props) {
  const [bookItems, setBookItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${api.pathProducts}/getallproducts`)
          .then((response) => response.json())
          .then((data) => data);
        if (res) {
          setBookItems([...res.data.products]);
        }
      } catch (error) {
        alert("Có lỗi trong quá trình tải trang");
      }
    }
    fetchData();
  }, []);
  return (
    <Layout>
      <Slide></Slide>
      <DisplayBooks books={bookItems} title={"Sách Mới"} />
    </Layout>
  );
}
export default Home;
