import React from 'react';

import * as S from './FilterPopup.styles';

import { BottomSheet } from 'Common/BottomSheet';
import { Pick, PickList } from 'Common/Pick';
import { Btn } from 'Common/Btn';
import { IconTextBtn } from 'Common/IconTextBtn';

const FilterPopup = ({ open, setOpen, setFilter, filter = {} }) => {
  const onDismiss = React.useCallback(() => {
    Object.entries(filter).forEach(([key, item]) => {
      switch (key) {
        case 'sort':
          setSort((sort) => {
            return sort.map((o) => {
              return { ...o, selected: item.indexOf(o.id) > -1 };
            });
          });
        case 'category':
          setCategory((category) => {
            return category.map((e) => {
              return { ...e, selected: item.indexOf(e.id) > -1 };
            });
          });
      }
    });
    setOpen(false);
  }, [filter]);

  const getFilterBool = React.useCallback(({ type, id }) => {
    if (filter[type])
      return filter[type].find((item) => item === id) ? true : false;
    return false;
  }, []);
  const [sort, setSort] = React.useState([
    {
      name: '연관순',
      selected: getFilterBool({ type: 'sort', id: 'firstattr' }),
      id: 'firstattr',
    },
    {
      name: '낮은 가격순',
      selected: getFilterBool({ type: 'sort', id: 'priceAsc' }),
      id: 'priceAsc',
    },
    {
      name: '높은 가격순',
      selected: getFilterBool({ type: 'sort', id: 'priceDesc' }),
      id: 'priceDesc',
    },
    {
      name: '인기순',
      selected: getFilterBool({ type: 'sort', id: 'likecnt' }),
      id: 'likecnt',
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

  const handlePick = React.useCallback(({ type, id }) => {
    switch (type) {
      case 'sort':
        setSort((sort) => {
          return sort.map((item) => {
            if (item.id == id) return { ...item, selected: true };
            return { ...item, selected: false };
          });
        });
        break;
      case 'category':
        setCategory((category) => {
          return category.map((item) => {
            if (item.id == id) return { ...item, selected: !item.selected };
            return item;
          });
        });
        break;
    }
  }, []);
  const resetFilter = React.useCallback(() => {
    if (filter.sort) {
      setSort((sort) => {
        return sort.map((item, i) => {
          if (i === 0) return { ...item, selected: true };
          return { ...item, selected: false };
        });
      });
    }
    if (filter.category) {
      setCategory((category) => {
        return category.map((item) => ({ ...item, selected: false }));
      });
    }
  }, []);
  const applyFilter = () => {
    const newFilter = {};
    if (filter.sort) {
      newFilter.sort = sort
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
    setOpen(false);
    setFilter(newFilter);
  };

  React.useEffect(() => {
    const { sort, category, brand, event } = filter;
    if (sort) {
      setSort((prevSort) => {
        return prevSort.map((item) => {
          return { ...item, selected: sort.indexOf(item.id) > -1 };
        });
      });
    }
    if (category) {
      setCategory((prevCategory) => {
        return prevCategory.map((item) => {
          return { ...item, selected: category.indexOf(item.id) > -1 };
        });
      });
    }
  }, [filter]);

  return (
    <BottomSheet open={open} onDismiss={onDismiss}>
      <S.Container>
        <S.Content>
          {filter.sort && (
            <PickList title='정렬'>
              {sort.map((item, i) => (
                <Pick
                  key={i}
                  on={item.selected}
                  onClick={() => {
                    handlePick({ type: 'sort', id: item.id });
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
