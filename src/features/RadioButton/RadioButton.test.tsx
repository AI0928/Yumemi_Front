import { render, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton'; // RadioButtonコンポーネントのパスに置き換えてください

const items = [
  {
    id: 'totalPopulation',
    value: '総人口',
    label: '総人口',
  },
  {
    id: 'youngPopulation',
    value: '年少人口',
    label: '年少人口',
  },
  {
    id: 'workingAgePopulation',
    value: '生産年齢人口',
    label: '生産年齢人口',
  },
  {
    id: 'geriatricPopulation',
    value: '老年人口',
    label: '老年人口',
  },
];

describe('RadioButton', () => {
  it('ラジオボタンの表示', () => {
    const setSelected = jest.fn();
    const { getByLabelText } = render(
      <RadioButton
        selected="総人口"
        setSelected={setSelected}
      />
    );

    items.forEach((item) => {
      expect(
        getByLabelText(item.label)
      ).toBeInTheDocument();
    });
  });

  it('ラジオボタンのクリックチェック 年少人口', () => {
    const setSelected = jest.fn();
    const { getByLabelText } = render(
      <RadioButton
        selected="総人口"
        setSelected={setSelected}
      />
    );

    fireEvent.click(getByLabelText('年少人口'));
    expect(setSelected).toHaveBeenCalledWith('年少人口');
  });
  it('ラジオボタンのクリックチェック 老年人口', () => {
    const setSelected = jest.fn();
    const { getByLabelText } = render(
      <RadioButton
        selected="総人口"
        setSelected={setSelected}
      />
    );

    fireEvent.click(getByLabelText('老年人口'));
    expect(setSelected).toHaveBeenCalledWith('老年人口');
  });
  it('ラジオボタンのクリックチェック 生産年齢人口', () => {
    const setSelected = jest.fn();
    const { getByLabelText } = render(
      <RadioButton
        selected="総人口"
        setSelected={setSelected}
      />
    );

    fireEvent.click(getByLabelText('生産年齢人口'));
    expect(setSelected).toHaveBeenCalledWith(
      '生産年齢人口'
    );
  });
});
