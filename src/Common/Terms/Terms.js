import React from 'react';

import * as S from './Terms.styles';

import { Checkbox } from 'Common/Form';
import { TextBtn } from 'Common/TextBtn';

const Terms = ({ all, terms, onChange }) => {
  return (
    <S.Terms>
      <S.AllTerm>
        <Checkbox
          id='all'
          name='all'
          size='lg'
          checked={all.checked}
          label={all.label}
          onChange={(checked) => {
            const _terms = terms.map((item) => {
              return { ...item, checked: checked };
            });

            onChange({
              all: {
                ...all,
                checked,
              },
              terms: _terms,
            });
          }}
        />
      </S.AllTerm>

      {terms.map((item) => {
        return (
          <S.Term key={item.id}>
            <Checkbox
              id={item.id}
              name={item.id}
              checked={item.checked}
              label={item.label}
              onChange={(checked) => {
                const _terms = terms.map((term) => {
                  if (term.id === item.id) {
                    return { ...term, checked };
                  }
                  return term;
                });

                onChange({
                  all: {
                    ...all,
                    checked: !_terms.find((term) => !term.checked),
                  },
                  terms: _terms,
                });
              }}
            />
            <TextBtn
              size='sm'
              variant={'line'}
              link={item.link}
              as='a'
              target={'_blank'}
            >
              자세히 보기
            </TextBtn>
          </S.Term>
        );
      })}
    </S.Terms>
  );
};

export default Terms;
