import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";
import InputBook from "../../components/UI/Input/InputBook";
import imgEmptyBook from "../../assets/img-book-empty.png";
import {
  createBookItem,
  setCreateBookState,
} from "../../redux/Slices/BookItemsSlice";
import Notification from "../../components/Notification/Notification";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

function AddItem(props) {
  const { createBookState, loading } = useSelector(
    (state) => state.BookItemsReducer
  );
  const [errorInput, setErrorInput] = useState(false);
  const [errorImg, setErrorImg] = useState(false);
  const dispatch = useDispatch();
  const inputDisplay = [
    {
      id: "name-book",
      nameInput: "nameBook",
      content: "Nhập tên sách",
      type: "text",
      messengerErr: "Bạn chưa nhập tên sách",
      checkError: useRef(false),
    },
    {
      id: "name-author",
      nameInput: "nameAuthor",
      content: "Nhập tên tác giả",
      type: "text",
      messengerErr: "Bạn chưa nhập tên tác giả",
      checkError: useRef(false),
    },
    {
      id: "book-content",
      nameInput: "bookContent",
      content: "Nhập tóm tắt sách",
      type: "text",
      messengerErr: "Bạn chưa nhập tóm tắt",
      checkError: useRef(false),
    },
    {
      id: "price",
      nameInput: "price",
      content: "Nhập giá sách",
      type: "number",
      messengerErr: "Bạn chưa nhập giá bán",
      checkError: useRef(false),
    },
  ];
  const [inputBook, setInputBook] = useState({
    nameBook: "",
    nameAuthor: "",
    bookContent: "",
    price: "",
  });
  const [inputImg, setInputImg] = useState(imgEmptyBook);
  const saveImgBook = useRef("");
  function inputNewBook(e, key) {
    setInputBook((preInput) => {
      setErrorInput(false);
      return { ...preInput, [key]: e.target.value };
    });
  }

  function handleFileInputChange(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    preInputImg(file);
  }

  function preInputImg(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      saveImgBook.current = file;
      setInputImg(reader.result);
    };
  }

  function checkErrorInput() {
    inputDisplay.forEach((input, index) => {
      if (inputBook[input.nameInput] === "") {
        input.checkError.current = true;
      } else {
        input.checkError.current = false;
      }
    });

    for (let i = 0; i < inputDisplay.length; i++) {
      if (inputDisplay[i].checkError.current === true) {
        return true;
      }
    }
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let checkErr = checkErrorInput();
    if (checkErr === true) {
      setErrorInput(true);
    } else {
      if (inputImg === imgEmptyBook) {
        setErrorImg(true);
      } else {
        dispatch(
          createBookItem({ ...inputBook, imageFileBook: saveImgBook.current })
        );
      }
    }
  }
  function handleNotification() {
    dispatch(setCreateBookState());
    setInputBook({ nameBook: "", nameAuthor: "", bookContent: "", price: "" });
    setInputImg(imgEmptyBook);
    setErrorInput(false);
    setErrorImg(false);
  }

  return (
    <div>
      <Layout>
        <form className="max-w-7xl w-full mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            {inputDisplay.map((book, index) => {
              return (
                <div key={index}>
                  <InputBook
                    value={inputBook[book.nameInput]}
                    idBook={book.id}
                    nameInput={book.nameInput}
                    content={book.content}
                    type={book.type}
                    onChangeInput={inputNewBook}
                  />
                  {errorInput && book.checkError.current ? (
                    <div className="text-red-700 text-left ml-10 font-semibold">
                      {book.messengerErr}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-center my-4">
            <div className="w-2/6 h-3/6 sm:w-1/6 sm:h-2/6">
              <label htmlFor="img-book" className="cursor-pointer">
                <div className="w-full h-full border-[1px] border-solid border-gray-700">
                  <img
                    src={inputImg}
                    alt="img-new-book"
                    className="object-contain"
                  ></img>
                </div>
              </label>
              <input
                id="img-book"
                type="file"
                onChange={handleFileInputChange}
                hidden
              ></input>
              {errorImg && (
                <div className="text-red-700 font-semibold">
                  Bạn chưa chọn hình ảnh cho sách
                </div>
              )}
            </div>
          </div>
          <div className="mx-6">
            <button
              type="submit"
              className="w-full py-3 bg-[#00CC66] mx-auto text-white font-bold rounded-full text-base sm:text-xl"
            >
              Thêm sản phẩm sách
            </button>
          </div>
        </form>
      </Layout>
      {loading && <LoadingPage />}
      {createBookState === true && (
        <Notification
          onClick={handleNotification}
          title="Tạo sản phẩm thành công"
          stateCreate={"Success"}
        />
      )}
      {createBookState === false && (
        <Notification
          onClick={handleNotification}
          title="Tạo sản phẩm thất bại"
          stateCreate={"Error"}
        />
      )}
    </div>
  );
}
export default AddItem;
