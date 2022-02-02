import item01 from "Common/Category/img/item01.svg";
import item02 from "Common/Category/img/item02.svg";
import item03 from "Common/Category/img/item03.svg";
import item04 from "Common/Category/img/item04.svg";
import item05 from "Common/Category/img/item05.svg";
import item06 from "Common/Category/img/item06.svg";
import item07 from "Common/Category/img/item07.svg";
import item08 from "Common/Category/img/item08.svg";
// TODO: bottomNav icon update
import bottomNav01 from "Common/BottomNav/img/icon-category.svg";
import bottomNav02 from "Common/BottomNav/img/icon-search.svg";
import bottomNav03 from "Common/BottomNav/img/icon-home.svg";
import bottomNav04 from "Common/BottomNav/img/icon-heart.svg";

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
    img : bottomNav01,
    name: "카테고리 모아보기",
    link: "/category"
  },
  {
    img : bottomNav02,
    name: "검색",
    link: "/search"
  },
  {
    img : bottomNav03,
    name: "홈",
    link: "/"
  },
  {
    img : bottomNav04,
    name: "찜 모아보기",
    link: "/mylike"
  }
]
