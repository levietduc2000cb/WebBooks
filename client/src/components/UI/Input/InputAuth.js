import { memo } from "react";

function InputAuth(props) {
  return (
    <div className="flex flex-col w-10/12 mx-auto my-6">
      <label
        className="text-left font-bold text-[14px] sm:text-base"
        htmlFor={props.idText}
      >
        {props.titleLaBel}
      </label>
      <input
        value={props.inputText}
        id={props.idText}
        type={props.type}
        placeholder={props.placeholder}
        className="outline-none focus:border-black py-2 boder border-solid border-[1px] border-gray-400 w-full px-3 text-[14px] sm:text-lg"
        onChange={(e) => {
          props.onChangeInput(e, props.idText);
        }}
      ></input>
    </div>
  );
}
export default memo(InputAuth);
