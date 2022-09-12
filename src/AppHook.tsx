import { useEffect, useState } from 'react';
import { iMats } from './interfaces';

export const AppHook = () => {
  const [mats, setMats] = useState<iMats>({
    cadMxn: 16,
    newRate: '',
    cad: null,
    mxn: null,
  });

  const changeRate = () => {
    if (mats.newRate) {
      localStorage.setItem('cad-mxn', mats.newRate);
      setMats({ ...mats, cadMxn: parseFloat(mats.newRate) });
    }
  };

  const getMxn = () => {
    if (mats.cad) {
      setMats({ ...mats, mxn: mats.cad * 1.13 * mats.cadMxn });
    }
  };

  useEffect(() => {
    const localCadMxn = localStorage.getItem('cad-mxn');
    if (localCadMxn) {
      setMats({ ...mats, cadMxn: parseFloat(localCadMxn) });
    }
    localStorage.setItem('cad-mxn', String(mats.cadMxn));
  }, []);
  return { mats, setMats, changeRate, getMxn };
};
