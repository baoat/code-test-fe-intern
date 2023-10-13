import style from "./App.scss";
import classNames from "classnames/bind";

import logoNCC from "./acsets/img/logoNCC 1.png";
import cssIcon from "./acsets/img/cssIcon 1.png";
import htmlIcon from "./acsets/img/htmlIcon 1.png";
import urlIcon from "./acsets/img/urlIcon 1.png";

const cx = classNames.bind(style);

function App() {
  return (
    <>
      <div className={cx("wrapper")}>
        <header className={cx("wrapper-header")}>
          <div className={cx("header-item active")}>Home</div>
          <div className={cx("header-item")}>Services</div>
          <div className={cx("header-item")}>News</div>
          <div className={cx("header-item")}>Blog</div>
          <div className={cx("header-item")}>Contact</div>
        </header>
        <div className={cx("wrapper-content")}>
          <div className={cx("content")}>
            <div className={cx("container")}>
              <div className={cx("logo")}>
                <img src={logoNCC} alt="" />
              </div>
              <div className={cx("wrapper-title")}>
                <div className={cx("title")}>
                  <span>Lorem ipsum dolor sit asmet?</span>
                </div>
                <div className={cx("title-content")}>
                  <span style={{ float: "left", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tristique consequat placerat. Vestibulum auctor pellentesque
                    sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                    turpis. Nam facilisis, ligula in mattis sodales, augue justo
                    tristique nulla, sed lacinia ante eros ut mi. Morbi vitae
                    diam augue. Aliquam vel mauris a nibh auctor commodo.
                    Praesent et nisi eu justo eleifend convallis. Quisque
                    suscipit maximus vestibulum. Phasellus congue mollis orci,
                    sit amet luctus augue tristique eu. Donec vulputate odio
                    neque, sed semper turpis pellentesque a.
                  </span>
                </div>
              </div>
              <div className={cx("job")}>
                <div className={cx("job-item")}>
                  <span className={cx("job-title")}>
                    Lorem ipsum dolor sit amet
                  </span>
                  <div className={cx("info")}>
                    <div className={cx("img")}>
                      <img src={cssIcon} alt="" width={"100%"} />
                    </div>
                    <div className={cx("text")}>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non dui sodales, faucibus libero ut, posuere felis.
                        Donec imperdiet suscipit accumsan. Aenean consequat
                        condimentum velit ut tempor. Nam porta massa in metus
                        bibendum congue. Pellentesque ultrices liquam egestas
                        nunc at
                      </span>
                    </div>
                  </div>
                  <div className={cx("text")}>
                    <span>
                      ullamcorper ultricies. Donec feugiat velit nulla, vel
                      sodales est ullamcorper id. Aenean consequat condimentum
                      velit ut tempor. Nam porta massa in metus bibendum congue.
                      Pellentesque ultrices vestibulum mattis.
                    </span>
                  </div>
                </div>
                <div className={cx("job-item")}>
                  <span className={cx("job-title")}>
                    Lorem ipsum dolor sit amet
                  </span>
                  <div className={cx("info")}>
                    <div className={cx("img")}>
                      <img src={htmlIcon} alt="" width={"100%"} />
                    </div>
                    <div className={cx("text")}>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non dui sodales, faucibus libero ut, posuere felis.
                        Donec imperdiet suscipit accumsan. Aenean consequat
                        condimentum velit ut tempor. Nam porta massa in metus
                        bibendum congue. Pellentesque ultrices liquam egestas
                        nunc at
                      </span>
                    </div>
                  </div>
                  <div className={cx("text")}>
                    <span>
                      ullamcorper ultricies. Donec feugiat velit nulla, vel
                      sodales est ullamcorper id. Aenean consequat condimentum
                      velit ut tempor. Nam porta massa in metus bibendum congue.
                      Pellentesque ultrices vestibulum mattis.
                    </span>
                  </div>
                </div>
                <div className={cx("job-item")}>
                  <span className={cx("job-title")}>
                    Lorem ipsum dolor sit amet
                  </span>
                  <div className={cx("info")}>
                    <div className={cx("img")}>
                      <img src={urlIcon} alt="" width={"100%"} />
                    </div>
                    <div className={cx("text")}>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non dui sodales, faucibus libero ut, posuere felis.
                        Donec imperdiet suscipit accumsan. Aenean consequat
                        condimentum velit ut tempor. Nam porta massa in metus
                        bibendum congue. Pellentesque ultrices liquam egestas
                        nunc at
                      </span>
                    </div>
                  </div>
                  <div className={cx("text")}>
                    <span>
                      ullamcorper ultricies. Donec feugiat velit nulla, vel
                      sodales est ullamcorper id. Aenean consequat condimentum
                      velit ut tempor. Nam porta massa in metus bibendum congue.
                      Pellentesque ultrices vestibulum mattis.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className={cx("wrapper-footer")}>
            <div className={cx("container")}>Copyright © 2021</div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
