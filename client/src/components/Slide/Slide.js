import SlideImg from "./SlideImg/SlideImg";
import img0 from "../../assets/img-introduce-0.jpg";
import img1 from "../../assets/img-introduce-1.jpg";
import img2 from "../../assets/img-introduce-2.jpg";
import img3 from "../../assets/img-introduce-3.jpg";
import img4 from "../../assets/img-introduce-4.jpg";

function Slide(props) {
  const imgUrls = [img0, img1, img2, img3, img4];
  return (
    <div className="container mx-auto">
      <div className="max-w-7xl mx-auto h-[168px] sm:h-[425px] md:h-[560px] mt-4">
        {imgUrls.map((imgUrl, index) => {
          return <SlideImg key={index} urlImg={imgUrl} index={index} />;
        })}
      </div>
    </div>
  );
}
export default Slide;
