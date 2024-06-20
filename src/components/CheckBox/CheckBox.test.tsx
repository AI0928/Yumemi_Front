import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckBox } from '@/components/CheckBox/CheckBox';
import { PREF } from '@/types/PREF';
import { CHECKCODE } from '@/types/CHECKCODE';

// テストを記述します
describe('CheckBox', () => {
  it('renders correctly', () => {
    const pref: PREF = {
      prefCode: '1',
      prefName: '北海道',
    };
    const setCheckCodes = jest.fn();

    const { getByLabelText } = render(
      <CheckBox pref={pref} setCheckCodes={setCheckCodes} />
    );

    expect(
      getByLabelText(pref.prefName)
    ).toBeInTheDocument();
  });

  it('calls setCheckCodes when clicked', () => {
    const pref: PREF = {
      prefCode: '1',
      prefName: '北海道',
    };
    const setCheckCodes = jest.fn();

    const { getByLabelText } = render(
      <CheckBox pref={pref} setCheckCodes={setCheckCodes} />
    );

    fireEvent.click(getByLabelText(pref.prefName));
    expect(setCheckCodes).toHaveBeenCalled();
  });
});
