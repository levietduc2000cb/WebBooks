import Header from "../header/Header";
import SideBars from "../SideBars/SideBars";
import Bottom from "../Bottom/Bottom";

function Layout(props) {
  return (
    <div>
      <Header />
      <SideBars />
      <div>{props.children}</div>
      <Bottom />
    </div>
  );
}
export default Layout;
