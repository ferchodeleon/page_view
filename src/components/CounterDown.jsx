import { useState, useEffect } from "react";

const timeFormat = (date) => {
  if (!date) return "00:00:00";

  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();
  let cm = Math.round(date.getMilliseconds() / 10);

  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  cm = cm < 10 ? "0" + cm : cm;

  return `${mm}:${ss}:${cm}`;
};

export const CounterDown = () => {
  const [diff, setDiff] = useState();
  const [initial, setInitial] = useState();

  const tick = () => {
    setDiff(new Date(+new Date() - initial));
  };

  const start = () => {
    setInitial(+new Date());
  };

  useEffect(() => {
    if (initial) {
      requestAnimationFrame(tick);
    }
  }, [initial, tick]);

  useEffect(() => {
    if (diff) {
      requestAnimationFrame(tick);
    }
  }, [diff, tick]);

  return (
    <div className="counter" onClick={start}>
      <h2>{timeFormat(diff)}</h2>
    </div>
  );
};
