import bottomNavCategoryOn from "Common/BottomNav/img/icon-category-on.svg";
import bottomNavCategoryOff from "Common/BottomNav/img/icon-category-off.svg";
import bottomNavSearchOn from "Common/BottomNav/img/icon-search-on.svg";
import bottomNavSearchOff from "Common/BottomNav/img/icon-search-off.svg";
import bottomNavHomeOn from "Common/BottomNav/img/icon-home-on.svg";
import bottomNavHomeOff from "Common/BottomNav/img/icon-home-off.svg";
import bottomNavHeartOn from "Common/BottomNav/img/icon-heart-on.svg";
import bottomNavHeartOff from "Common/BottomNav/img/icon-heart-off.svg";

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