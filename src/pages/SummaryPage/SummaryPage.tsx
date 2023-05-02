import { useState } from 'react';

export default function SummaryPage() {
  const [checked, setChecked] = useState(false);

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <form>
        <input type="checkbox" id="confirm-checkbox" checked={checked} onChange={handleChangeCheckbox} />{' '}
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
}
