import { useLayoutEffect, useState, memo } from "react";
function SlideImg(props) {
  const [showImg, setShowImg] = useState(0);
  useLayoutEffect(() => {
    const time = setInterval(() => {
      setShowImg((preShow) => {
        if (preShow === 4) {
          return 0;
        }
        return preShow + 1;
      });
    }, 3000);
    return () => {
      clearInterval(time);
    };
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div
        className={
          props.index === showImg ? "block animate-opacityImg" : "hidden"
        }
      >
        <img
          src={props.urlImg}
          className="max-h-[560px] h-full object-cover"
          alt="img-slide"
        ></img>
      </div>
    </div>
  );
}
export default memo(SlideImg);
