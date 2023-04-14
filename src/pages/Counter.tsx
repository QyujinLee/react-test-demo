import { useState } from 'react';
import '../styles/Counter.css';

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  /**
   * '+' 버튼 클릭 이벤트 핸들러
   */
  const handleClickPlus = () => {
    setCounter((prev) => prev + 1);
  };

  /**
   * '-' 버튼 클릭 이벤트 핸들러
   * @returns
   */
  const handleClickMinus = () => {
    if (counter === 0) return;
    setCounter((prev) => prev - 1);
  };

  /**
   * 'ON / OFF' 버튼 클릭 이벤트 핸들러
   */
  const handleClickPower = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="counter_wrap">
      <h2 data-testid="counter">{counter}</h2>
      <div className="controller_wrap">
        <button className="controller" data-testid="btn_plus" disabled={disabled} onClick={handleClickPlus}>
          +
        </button>
        <button className="controller" data-testid="btn_minus" disabled={disabled} onClick={handleClickMinus}>
          -
        </button>
      </div>
      <button className="power" data-testid="btn_power" onClick={handleClickPower}>
        ON \ OFF
      </button>
    </div>
  );
}
