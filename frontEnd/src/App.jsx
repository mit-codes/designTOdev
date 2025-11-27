import "./app.css";
import MonecoEditer from "../component/MonecoEditer";
function App() {
  return (
    <>
      <div className="fullbody">
        <div className="header"></div>
        <div className="codeBody">
          <div className="sideBar"></div>
          <div className="codeEditor">
            <MonecoEditer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
