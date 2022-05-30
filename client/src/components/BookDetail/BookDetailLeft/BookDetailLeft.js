import { memo } from "react";

function BookDetailLeft({ imageUrl }) {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img
          className="w-full max-h-[600px] h-full object-contain"
          src={imageUrl}
          alt="img-book"
        ></img>
      </div>
    </div>
  );
}
export default memo(BookDetailLeft);
