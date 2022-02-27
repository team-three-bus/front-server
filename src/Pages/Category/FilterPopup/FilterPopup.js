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
        case 'order':
          setOrder((order) => {
            return order.map((o) => {
              return { ...o, selected: item.indexOf(o.id) > -1 };
            });
          });
        case 'event':
          setEvent((event) => {
            return event.map((e) => {
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
      name: '찜순',
      selected: getFilterBool({ type: 'order', id: 'like' }),
      id: 'like',
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
    if (filter.order) {
      setOrder((order) => {
        return order.map((item, i) => {
          if (i === 0) return { ...item, selected: true };
          return { ...item, selected: false };
        });
      });
    }
    if (filter.event) {
      setEvent((event) => {
        return event.map((item) => ({ ...item, selected: false }));
      });
    }
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

  React.useEffect(() => {
    const { order, category, brand, event } = filter;
    if (order) {
      setOrder((prevOrder) => {
        return prevOrder.map((item) => {
          return { ...item, selected: order.indexOf(item.id) > -1 };
        });
      });
    }
    if (event) {
      setEvent((prevEvent) => {
        return prevEvent.map((item) => {
          return { ...item, selected: event.indexOf(item.id) > -1 };
        });
      });
    }
  }, [filter]);

  return (
    <BottomSheet open={open} onDismiss={onDismiss}>
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
