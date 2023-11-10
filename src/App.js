import style from "./App.scss";
import classNames from "classnames/bind";

import logoNCC from "./acsets/img/logoNCC 1.png";
import cssIcon from "./acsets/img/cssIcon 1.png";
import htmlIcon from "./acsets/img/htmlIcon 1.png";
import urlIcon from "./acsets/img/urlIcon 1.png";

const cx = classNames.bind(style);

function App() {
  return (
    <div className={cx("grid ")}>
      <div className={cx("row no-gutters wrapper")}>
        <header className={cx("header col l-1 m-12 c-12")}>
          <label for="nav__show" className={cx("btn__nav")}>
            <i class="fa-solid fa-bars"></i>
          </label>
          <input
            type="checkbox"
            hidden
            className={cx("nav__show")}
            id="nav__show"
          />
          <label for="nav__show" className={cx("nav__overlay")}></label>

          <ul className={cx("header-list")}>
            <li className={cx("header-list-item")}>
              <div className={cx("header-list-item__item active")}>
                <label for="nav__show">Home</label>
              </div>
            </li>
            <li className={cx("header-list-item")}>
              <div className={cx("header-list-item__item")}>Services</div>
            </li>
            <li className={cx("header-list-item")}>
              <div className={cx("header-list-item__item")}>News</div>
            </li>
            <li className={cx("header-list-item")}>
              <div className={cx("header-list-item__item")}>Blog</div>
            </li>
            <li className={cx("header-list-item")}>
              <div className={cx("header-list-item__item")}>Contact</div>
            </li>
          </ul>
        </header>
        <div className={cx("col l-11 m-12 c-12")}>
          <div className={cx("content")}>
            <div className={cx("row")}>
              <div className={cx("col l-10 l-o-1")}>
                <div className={cx("row", "content-logo")}>
                  <div className={cx("col l-4 l-o-4 m-4 m-o-4 c-4 c-o-4")}>
                    <div className={cx("logo")}>
                      <img src={logoNCC} alt="" width={"100%"} />
                    </div>
                  </div>
                </div>
                <div className={cx("row")}>
                  <div className={cx("col l-12 m-12 c-12")}>
                    <div className={cx("title")}>
                      <div className={cx("row")}>
                        <div
                          className={cx("col l-8 l-o-2 m-8 m-o-2 c-10 c-o-1")}
                        >
                          <div className={cx("title__title")}>
                            <span>Lorem ipsum dolor sit asmet?</span>
                          </div>
                          <div className={cx("title__content")}>
                            <span className={cx("content")}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed tristique consequat placerat. Vestibulum
                              auctor pellentesque sem, eu posuere erat hendrerit
                              quis. Maecenas vel consequat turpis. Nam
                              facilisis, ligula in mattis sodales, augue justo
                              tristique nulla, sed lacinia ante eros ut mi.
                              Morbi vitae diam augue. Aliquam vel mauris a nibh
                              auctor commodo. Praesent et nisi eu justo eleifend
                              convallis. Quisque suscipit maximus vestibulum.
                              Phasellus congue mollis orci, sit amet luctus
                              augue tristique eu. Donec vulputate odio neque,
                              sed semper turpis pellentesque a.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("row course")}>
                  <div className={cx("course-item")}>
                    <span className={cx("course-item__title")}>
                      Lorem ipsum dolor sit amet
                    </span>
                    <div className={cx("row no-gutters course-item__logo")}>
                      <div className={cx("col l-3 m-3 c-12")}>
                        <img src={cssIcon} alt="" width={"100%"} />
                      </div>
                      <div className={cx("col l-9 m-9 c-12", "content")}>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed non dui sodales, faucibus libero ut, posuere
                          felis. Donec imperdiet suscipit accumsan. Aenean
                          consequat condimentum velit ut tempor. Nam porta massa
                          in metus bibendum congue. Pellentesque ultrices liquam
                          egestas nunc at{" "}
                        </span>
                      </div>
                    </div>
                    <div className={cx("course-item__content")}>
                      <span>
                        ullamcorper ultricies. Donec feugiat velit nulla, vel
                        sodales est ullamcorper id. Aenean consequat condimentum
                        velit ut tempor. Nam porta massa in metus bibendum
                        congue. Pellentesque ultrices vestibulum mattis.
                      </span>
                    </div>
                  </div>
                  <div className={cx("course-item")}>
                    <span className={cx("course-item__title")}>
                      Lorem ipsum dolor sit amet
                    </span>
                    <div className={cx("row no-gutters course-item__logo")}>
                      <div className={cx("col l-3 m-3 c-12")}>
                        <img src={htmlIcon} alt="" width={"100%"} />
                      </div>
                      <div className={cx("col l-9 m-9 c-12", "content")}>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed non dui sodales, faucibus libero ut, posuere
                          felis. Donec imperdiet suscipit accumsan. Aenean
                          consequat condimentum velit ut tempor. Nam porta massa
                          in metus bibendum congue. Pellentesque ultrices liquam
                          egestas nunc at{" "}
                        </span>
                      </div>
                    </div>
                    <div className={cx("course-item__content")}>
                      <span>
                        ullamcorper ultricies. Donec feugiat velit nulla, vel
                        sodales est ullamcorper id. Aenean consequat condimentum
                        velit ut tempor. Nam porta massa in metus bibendum
                        congue. Pellentesque ultrices vestibulum mattis.
                      </span>
                    </div>
                  </div>
                  <div className={cx("course-item")}>
                    <span className={cx("course-item__title")}>
                      Lorem ipsum dolor sit amet
                    </span>
                    <div className={cx("row no-gutters course-item__logo")}>
                      <div className={cx("col l-3 m-3 c-12")}>
                        <img src={urlIcon} alt="" width={"100%"} />
                      </div>
                      <div className={cx("col l-9 m-9 c-12", "content")}>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed non dui sodales, faucibus libero ut, posuere
                          felis. Donec imperdiet suscipit accumsan. Aenean
                          consequat condimentum velit ut tempor. Nam porta massa
                          in metus bibendum congue. Pellentesque ultrices liquam
                          egestas nunc at{" "}
                        </span>
                      </div>
                    </div>
                    <div className={cx("course-item__content")}>
                      <span>
                        ullamcorper ultricies. Donec feugiat velit nulla, vel
                        sodales est ullamcorper id. Aenean consequat condimentum
                        velit ut tempor. Nam porta massa in metus bibendum
                        congue. Pellentesque ultrices vestibulum mattis.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("row")}>
              <div className={cx("col l-12 m-12 c-12")}>
                <div className={cx("row footer ")}>
                  <div className={cx("col l-2 l-o-1 m-2 m-o-1 c-3 c-o-1 ")}>
                    <div className={cx("footer__content")}>
                      Copyright © 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
