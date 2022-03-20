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
        case 'category':
          setCategory((category) => {
            return category.map((c) => {
              return { ...c, selected: item.indexOf(c.id) > -1 };
            });
          });
        case 'brand':
          setBrand((brand) => {
            return brand.map((b) => {
              return { ...b, selected: item.indexOf(b.id) > -1 };
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
      selected: getFilterBool({ type: 'category', id: 'milkcoffee' }),
      id: 'milkcoffee',
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
      name: 'GS25',
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

  const handlePick = React.useCallback(({ type, id }) => {
    switch (type) {
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
    }
  }, []);
  const resetFilter = React.useCallback(() => {
    if (filter.category) {
      setCategory((category) => {
        return category.map((item) => ({ ...item, selected: false }));
      });
    }
    if (filter.brand) {
      setBrand((brand) => {
        return brand.map((item) => ({ ...item, selected: false }));
      });
    }
  }, []);
  const applyFilter = () => {
    const newFilter = {};
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
    setOpen(false);
    setFilter(newFilter);
  };

  React.useEffect(() => {
    const { order, category, brand, event } = filter;
    if (brand) {
      setBrand((prevBrand) => {
        return prevBrand.map((item) => {
          return { ...item, selected: brand.indexOf(item.id) > -1 };
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
