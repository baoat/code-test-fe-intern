import style from "./App.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function App() {
  return (
    <>
      <div className={cx("wrapper")}>
        <header className={cx("wrapper-header")}>
          <h1>Header</h1>
        </header>
        <div className={cx("wrapper-content")}>
          <h1>Content</h1>
          <footer className={cx("wrapper-footer")}>Footer</footer>
        </div>
      </div>
    </>
  );
}

export default App;
