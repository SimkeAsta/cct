import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import RadioWidget from '../RadioWidget';
import { ComponentsState } from '../../types/interfaces';
import * as reactRedux from 'react-redux'
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RootState } from '../../store';

const mockedState: ComponentsState = {
  components: [
    {
      stationName: 'My favorite station',
      frequency: '1.25',
    },
    {
      stationName: 'Second favorite',
      frequency: '2.5',
    }
  ]};

const initialStore = {
  components: undefined,
}

const mockStore = configureStore([thunk]);
const store = mockStore(initialStore) as MockStoreEnhanced<RootState>;
store.dispatch = jest.fn();

describe('Radio stations page', () => {
  it('renders component correctly', () => {
    const spy = jest.spyOn(reactRedux, 'useSelector');
    spy.mockReturnValue(mockedState);
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <RadioWidget />
        </Provider>
    );

    expect(getByText('STATIONS')).toBeInTheDocument();
    expect(getByText('My favorite station')).toBeInTheDocument();
    expect(queryByText('CURRENTLY PLAYING')).not.toBeInTheDocument();
  });

  it('shows currently playing station on click', () => {
    const spy = jest.spyOn(reactRedux, 'useSelector');
    spy.mockReturnValue(mockedState);
    const { getByText } = render(
      <Provider store={store}>
        <RadioWidget />
        </Provider>
    );

    const stationName = getByText('Second favorite');
    fireEvent.click(stationName);

    expect(getByText('CURRENTLY PLAYING')).toBeInTheDocument();
  });
});
