import React from 'react';
import { useNavigate } from 'react-router-dom';

import View from './View';

const Container = () => {
  const navigate = useNavigate();
  const maxSearchListLength = React.useRef(10);
  const [searchValue, onSearchChange] = React.useState('');

  const [searchList, setSearchList] = React.useState(
    JSON.parse(localStorage.getItem('searchList')) || []
  );
  const onSearch = (value) => {
    if (!value) return;
    setSearchList((prevSearchList) => {
      let searchList = prevSearchList;

      searchList = prevSearchList.filter((item) => item.name !== value);

      if (maxSearchListLength.current <= prevSearchList.length) {
        const _prevSearchList = [...prevSearchList];
        _prevSearchList.pop();
        searchList = _prevSearchList;
      }
      const newSearchList = [{ name: value, id: value }, ...searchList];
      localStorage.setItem('searchList', JSON.stringify(newSearchList));
      return newSearchList;
    });
    setTimeout(() => {
      navigate({
        pathname: `/searchresult?search=${value}`,
      });
    }, 0);
  };

  const customSetSearchList = (value) => {
    localStorage.setItem('searchList', JSON.stringify(value));
    setSearchList(value);
  };

  const gotoSearchResult = (search) => {
    onSearch(search);
  };

  const [feature, setFeature] = React.useState([]);
  const getRandomFeature = () => {
    const attr = [
      '매운맛',
      '단맛',
      '짠맛',
      '다이어트',
      '숙취해소',
      '건강기능식품/의약외품',
      '야식/안주',
      '여성용품',
      '방향제',
      '에너지',
      '반려동물',
      '죽/국',
      '밥',
      '면',
      '즉석조리식품',
      '젤리/캔디',
      '햄/소세지',
      '케익/초콜릿',
      '요거트',
      '반찬',
      '차량용품',
      '세면용품',
      '헤어용품',
    ];

    const candidateFeature = attr;
    const selectIndex = (totalIndex, selectingNumber) => {
      let randomIndexArray = [];
      for (let i = 0; i < selectingNumber; i++) {
        //check if there is any duplicate index
        const randomNum = Math.floor(Math.random() * totalIndex);
        if (randomIndexArray.indexOf(randomNum) === -1) {
          randomIndexArray.push(randomNum);
        } else {
          //if the randomNum is already in the array retry
          i--;
        }
      }
      return randomIndexArray;
    };
    const randomIndex = selectIndex(candidateFeature.length, 6);
    const selectedFeature = randomIndex.map((item) => candidateFeature[item]);
    setFeature(selectedFeature);
  };

  React.useEffect(() => {
    getRandomFeature();
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <View
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      searchList={searchList}
      setSearchList={customSetSearchList}
      onSearch={onSearch}
      gotoSearchResult={gotoSearchResult}
      feature={feature}
    />
  );
};

export default Container;
