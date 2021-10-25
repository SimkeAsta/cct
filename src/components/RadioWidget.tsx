import React, { useEffect, useState } from 'react';
import styles from './RadioWidget.module.css';
import { RadioStationData } from '../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import thunks from '../store/components/thunks';
import { RootState } from '../store';
import picture from "../image/page1_img1.jpg";
import { ReactComponent as LeftArrow } from '../icons/angle-left-solid.svg';
import { ReactComponent as PowerOffSvg } from '../icons/power-off-solid.svg';
import { ReactComponent as PlusIcon } from '../icons/plus-solid.svg';
import { ReactComponent as MinusIcon } from '../icons/minus-solid.svg'

const RadioWidget: React.FC = () => {
  const dispatch = useDispatch();
  const { components } = useSelector((state: RootState) => state.components);
  const [component, setComponent] = useState<RadioStationData | undefined>(undefined);

  useEffect(() => {
      dispatch(thunks.getComponents());
  }, [dispatch]);

  const doNothing = (): void => {
    return;
  }

  const handleClick = (item: RadioStationData): void => {
    if (item.stationName !== component?.stationName) {
      setComponent(item);
    } else {
      setComponent(undefined);
    }
  }

  const renderRows = (item: RadioStationData, index: number) => {
    return (
      <div key={index}>
        {component?.stationName === item.stationName && (
        <div className={styles.expanded_station}>
          <button aria-label={'minus-button'} className={styles.side_button} onClick={() => doNothing()}><MinusIcon className={styles.plus_minus} /></button>
          <img src={picture} alt="my pic" className={styles.circle_pic}/>
          <button aria-label={'plus-button'} className={styles.side_button} onClick={() => doNothing()}><PlusIcon className={styles.plus_minus}/></button>
        </div>
        )}
        <div className={styles.row}>
          <div onClick={() => handleClick(item)} className={styles.wrapper}>
            <div>{item.stationName}</div>
            <div><b>{item.frequency}</b></div>
          </div>
          {index !== (components && components?.length - 1) && (<hr className={styles.bottom_line}></hr>)}
        </div>
      </div>
    )
  }

  return (
  <div className={styles.container}>
    <header className={styles.header}>
      <button aria-label='arrow-button' className={styles.top_button} onClick={() => doNothing()}><LeftArrow  className={styles.icon_arrow}/></button>
      <h3 className={styles.title}><b>STATIONS</b></h3>
      <button aria-label='power-button' className={styles.top_button} onClick={() => doNothing()}><PowerOffSvg className={styles.icon_power_off}/></button>
    </header>
    <main className={styles.main_body}>
      {components && components.map(renderRows)}
    </main>
    <footer className={styles.footer}>
      {component && (
      <>
        <div className={styles.current}><b>CURRENTLY PLAYING</b></div>
        <div className={styles.station_name}>{component?.stationName}</div>
      </>
      )}
    </footer>
  </div>
  );
};

export default RadioWidget;
