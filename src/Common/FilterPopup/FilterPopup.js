import React from 'react';

import * as S from './FilterPopup.styles';

import { BottomSheet } from 'Common/BottomSheet';
import { Pick, PickList } from 'Common/Pick';
import { Btn } from 'Common/Btn';
import { IconTextBtn } from 'Common/IconTextBtn';

const FilterPopup = ({ open, setOpen, setFilter, filter = {} }) => {
  const getFilterBool = React.useCallback(({ type, id }) => {
    if (filter[type])
      return filter[type].find((item) => item === id) ? true : false;
    return false;
  }, []);
  const [order, setOrder] = React.useState([
    {
      name: '낮은 가격순',
      selected: getFilterBool({ type: 'order', id: 'lowPrice' }),
      id: 'lowPrice',
    },
    {
      name: '높은 가격순',
      selected: getFilterBool({ type: 'order', id: 'highPrice' }),
      id: 'highPrice',
    },
    {
      name: '인기순',
      selected: getFilterBool({ type: 'order', id: 'popularity' }),
      id: 'popularity',
    },
    {
      name: '클릭순',
      selected: getFilterBool({ type: 'order', id: 'view' }),
      id: 'view',
    },
  ]);
  const [category, setCategory] = React.useState([
    {
      name: '간편식사',
      selected: getFilterBool({ type: 'category', id: 'meal' }),
      id: 'meal',
    },
    {
      name: '빵/과자류',
      selected: getFilterBool({ type: 'category', id: 'bread' }),
      id: 'bread',
    },
    {
      name: '아이스크림',
      selected: getFilterBool({ type: 'category', id: 'icecream' }),
      id: 'icecream',
    },
    {
      name: '생활용품',
      selected: getFilterBool({ type: 'category', id: 'supplies' }),
      id: 'supplies',
    },
    {
      name: '유제품/커피 음료',
      selected: getFilterBool({ type: 'category', id: 'milkcoffe' }),
      id: 'milkcoffe',
    },
    {
      name: '탄산음료',
      selected: getFilterBool({ type: 'category', id: 'soda' }),
      id: 'soda',
    },
    {
      name: '생수/과채/기타음료',
      selected: getFilterBool({ type: 'category', id: 'drink' }),
      id: 'drink',
    },
    {
      name: '기타',
      selected: getFilterBool({ type: 'category', id: 'etc' }),
      id: 'etc',
    },
  ]);
  const [brand, setBrand] = React.useState([
    {
      name: 'GS',
      selected: getFilterBool({ type: 'brand', id: 'gs' }),
      id: 'gs',
    },
    {
      name: 'CU',
      selected: getFilterBool({ type: 'brand', id: 'cu' }),
      id: 'cu',
    },
    {
      name: 'emart24',
      selected: getFilterBool({ type: 'brand', id: 'emart24' }),
      id: 'emart24',
    },
    {
      name: '7-ELEVEN',
      selected: getFilterBool({ type: 'brand', id: 'seven11' }),
      id: 'seven11',
    },
  ]);
  const [event, setEvent] = React.useState([
    {
      name: '1+1',
      selected: getFilterBool({ type: 'event', id: 'oneone' }),
      id: 'oneone',
    },
    {
      name: '2+1',
      selected: getFilterBool({ type: 'event', id: 'twoone' }),
      id: 'twoone',
    },
  ]);

  const handlePick = React.useCallback(({ type, id }) => {
    switch (type) {
      case 'order':
        setOrder((order) => {
          return order.map((item) => {
            if (item.id == id) return { ...item, selected: true };
            return { ...item, selected: false };
          });
        });
        break;
      case 'category':
        setCategory((category) => {
          const newCategory = category.map((item) => {
            if (item.id == id) return { ...item, selected: !item.selected };
            return item;
          });
          return newCategory;
        });
        break;
      case 'brand':
        setBrand((brand) => {
          return brand.map((item) => {
            if (item.id == id) return { ...item, selected: !item.selected };
            return item;
          });
        });
        break;
      case 'event':
        setEvent((event) => {
          return event.map((item) => {
            if (item.id == id) return { ...item, selected: !item.selected };
            return item;
          });
        });
        break;
    }
  }, []);
  const resetFilter = React.useCallback(() => {
    const newFilter = {};

    if (filter.order) {
      newFilter.order = [order[0].id];
      setOrder((order) => {
        return order.map((item, i) => {
          if (i === 0) return { ...item, selected: true };
          return { ...item, selected: false };
        });
      });
    }
    if (filter.category) {
      newFilter.category = [];
      setCategory((category) => {
        return category.map((item) => ({ ...item, selected: false }));
      });
    }
    if (filter.brand) {
      newFilter.brand = [];
      setBrand((brand) => {
        return brand.map((item) => ({ ...item, selected: false }));
      });
    }
    if (filter.event) {
      newFilter.event = [];
      setEvent((event) => {
        return event.map((item) => ({ ...item, selected: false }));
      });
    }

    setFilter(newFilter);
  }, []);
  const applyFilter = () => {
    const newFilter = {};
    if (filter.order) {
      newFilter.order = order
        .filter((item, i) => {
          return item.selected;
        })
        .map((item) => item.id);
    }
    if (filter.category) {
      newFilter.category = category
        .filter((item, i) => {
          return item.selected;
        })
        .map((item) => item.id);
    }
    if (filter.brand) {
      newFilter.brand = brand
        .filter((item, i) => {
          return item.selected;
        })
        .map((item) => item.id);
    }
    if (filter.event) {
      newFilter.event = event
        .filter((item, i) => {
          return item.selected;
        })
        .map((item) => item.id);
    }
    setOpen(false);
    setFilter(newFilter);
  };

  return (
    <BottomSheet open={open}>
      <S.Container>
        <S.Content>
          {filter.order && (
            <PickList title='정렬'>
              {order.map((item, i) => (
                <Pick
                  key={i}
                  on={item.selected}
                  onClick={() => {
                    handlePick({ type: 'order', id: item.id });
                  }}
                >
                  {item.name}
                </Pick>
              ))}
            </PickList>
          )}
          {filter.category && (
            <PickList title='카테고리'>
              {category.map((item, i) => (
                <Pick
                  key={i}
                  on={item.selected}
                  onClick={() => {
                    handlePick({ type: 'category', id: item.id });
                  }}
                >
                  {item.name}
                </Pick>
              ))}
            </PickList>
          )}

          {filter.brand && (
            <PickList title='편의점'>
              {brand.map((item, i) => (
                <Pick
                  key={i}
                  on={item.selected}
                  onClick={() => {
                    handlePick({ type: 'brand', id: item.id });
                  }}
                >
                  {item.name}
                </Pick>
              ))}
            </PickList>
          )}

          {filter.event && (
            <PickList title='할인'>
              {event.map((item, i) => (
                <Pick
                  key={i}
                  on={item.selected}
                  onClick={() => {
                    handlePick({ type: 'event', id: item.id });
                  }}
                >
                  {item.name}
                </Pick>
              ))}
            </PickList>
          )}
        </S.Content>
        <S.Footer>
          <IconTextBtn icon='reset' onClick={resetFilter}>
            선택 초기화
          </IconTextBtn>
          <Btn onClick={applyFilter}>선택 적용하기</Btn>
        </S.Footer>
      </S.Container>
    </BottomSheet>
  );
};

export default FilterPopup;
