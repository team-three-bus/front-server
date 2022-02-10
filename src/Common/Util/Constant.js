import item01 from "Common/Category/img/item01.svg";
import item02 from "Common/Category/img/item02.svg";
import item03 from "Common/Category/img/item03.svg";
import item04 from "Common/Category/img/item04.svg";
import item05 from "Common/Category/img/item05.svg";
import item06 from "Common/Category/img/item06.svg";
import item07 from "Common/Category/img/item07.svg";
import item08 from "Common/Category/img/item08.svg";
// TODO: bottomNav icon update
import bottomNavCategoryOn from "Common/BottomNav/img/icon-category-on.svg";
import bottomNavCategoryOff from "Common/BottomNav/img/icon-category-off.svg";
import bottomNavSearchOn from "Common/BottomNav/img/icon-search-on.svg";
import bottomNavSearchOff from "Common/BottomNav/img/icon-search-off.svg";
import bottomNavHomeOn from "Common/BottomNav/img/icon-home-on.svg";
import bottomNavHomeOff from "Common/BottomNav/img/icon-home-off.svg";
import bottomNavHeartOn from "Common/BottomNav/img/icon-heart-on.svg";
import bottomNavHeartOff from "Common/BottomNav/img/icon-heart-off.svg";

export const CATEGORY_LIST = [
  {
    img : item01,
    name: "생활용품"
  },
  {
    img : item02,
    name: "아이스크림"
  },
  {
    img : item03,
    name: "탄산음료"
  },
  {
    img : item04,
    name: "유제품/커피"
  },
  {
    img : item05,
    name: "생수/과채"
  },
  {
    img : item06,
    name: "간편식사"
  },
  {
    img : item07,
    name: "빵/과자"
  },
  {
    img : item08,
    name: "기타"
  }
]

export const BOTTOM_NAV_LIST = [
  {
    onImg : bottomNavCategoryOn,
    offImg : bottomNavCategoryOff,
    name: "카테고리 모아보기",
    link: "/category"
  },
  {
    onImg : bottomNavSearchOn,
    offImg : bottomNavSearchOff,
    name: "검색",
    link: "/search"
  },
  {
    onImg : bottomNavHomeOn,
    offImg : bottomNavHomeOff,
    name: "홈",
    link: "/"
  },
  {
    onImg : bottomNavHeartOn,
    offImg : bottomNavHeartOff,
    name: "찜 모아보기",
    link: "/mylike"
  }
]
