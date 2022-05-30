import { Link } from "react-router-dom";
function Navigaiton({ to = null, children }) {
  let Wrapper = "div";
  if (to) {
    Wrapper = Link;
  }
  return (
    <Wrapper to={to}>
      <div className="text-white text-sm font-bold hover:underline hover:cursor-pointer py-4 lg:py-auto text-center">
        {children}
      </div>
    </Wrapper>
  );
}
export default Navigaiton;
