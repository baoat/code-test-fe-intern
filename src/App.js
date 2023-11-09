import style from "./App.scss";
import classNames from "classnames/bind";

import logoNCC from "./acsets/img/logoNCC 1.png";
// import cssIcon from "./acsets/img/cssIcon 1.png";
// import htmlIcon from "./acsets/img/htmlIcon 1.png";
// import urlIcon from "./acsets/img/urlIcon 1.png";

const cx = classNames.bind(style);

function App() {
  return (
    <div className={cx("wrapper grid ")}>
      <div className={cx("row no-gutters wrapper-header")}>
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
              <div className={cx("header-list-item__item active")}>Home</div>
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
                <div className={cx("row")}>
                  <div className={cx("col l-2 l-o-5 m-2 m-o-5 c-2 c-o-5")}>
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
                <div className={cx(" row course")}>
                  <div className={cx("course-item")}>
                    <div className={cx("course-item__logo")}></div>
                    <div className={cx("course-item__content")}></div>
                  </div>
                  <div className={cx("course-item")}>
                    <div className={cx("course-item__logo")}></div>
                    <div className={cx("course-item__content")}></div>
                  </div>
                  <div className={cx("course-item")}>
                    <div className={cx("course-item__logo")}></div>
                    <div className={cx("course-item__content")}></div>
                  </div>
                  <div className={cx("course-item")}>
                    <div className={cx("course-item__logo")}></div>
                    <div className={cx("course-item__content")}></div>
                  </div>
                  <div className={cx("course-item")}>
                    <div className={cx("course-item__logo")}></div>
                    <div className={cx("course-item__content")}></div>
                  </div>
                  <div className={cx("course-item")}>
                    <div className={cx("course-item__logo")}></div>
                    <div className={cx("course-item__content")}></div>
                  </div>
                  <div className={cx("pandabar")}>
                    <div className={cx("course-item__logo")}></div>
                    <div className={cx("course-item__content")}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("row")}>
              <div className={cx("col l-12 m-12 c-12")}>
                <div className={cx("row footer ")}>
                  <div
                    className={cx("col l-2 l-o-0-5 m-2 m-o-0-5 c-3 c-o-0-5 ")}
                  >
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
