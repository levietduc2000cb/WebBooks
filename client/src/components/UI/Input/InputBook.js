import { memo } from "react";

function InputBook(props) {
  return (
    <div className="flex flex-col text-left mx-6 my-2">
      <label
        htmlFor={props.idBook}
        className="max-w-[200px] ml-4 font-bold text-lg mb-1"
      >
        {props.content}
      </label>
      <input
        value={props.value}
        type={props.type}
        id={props.idBook}
        placeholder={props.content}
        className="outline-none border-solid border-2 border-gray-500 text-lg py-1 px-4 rounded-full focus:border-[#00CC66]"
        onChange={(e) => {
          props.onChangeInput(e, props.nameInput);
        }}
      ></input>
    </div>
  );
}
export default memo(InputBook);
