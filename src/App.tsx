import './App.css';
import { AppHook } from './AppHook';

const App = () => {
  const { mats, setMats, changeRate, getMxn } = AppHook();

  return (
    <>
      <div className='center-container'>
        <div className='card'>
          <div className='card-header'>
            <h1 className='card-title'>Converter</h1>
            <span>Convert at your own risk!!</span>
            <br />
            <span>You'll cry...</span>
          </div>

          <div className='form'>
            <label htmlFor='cad' className='form-label my-2'>
              CAD
            </label>
            <input
              id='cad'
              type='number'
              pattern='\d*.d*'
              className='form-control'
              placeholder='$ CAD'
              value={mats.cad || ''}
              onChange={(v) => {
                setMats({ ...mats, cad: parseFloat(v.target.value) });
              }}
            />

            <label htmlFor='cad-mxn' className='form-label my-2'>
              CAD/MXN
            </label>
            <input
              id='cad-mxn'
              type='number'
              className='form-control'
              placeholder={`Current: $${mats.cadMxn} CAD/MXN`}
              onChange={(v) => {
                setMats({ ...mats, newRate: v.target.value });
              }}
            />
            <div className='bttns'>
              <button
                type='submit'
                className='btn btn-outline-info mt-4'
                onClick={getMxn}
              >
                Convert
              </button>
              <button
                type='button'
                className='btn btn-outline-danger mt-4 ms-2'
                onClick={changeRate}
              >
                Change rate
              </button>
            </div>

            {mats.mxn && (
              <>
                <h4 className='text-center m-1 mt-2'>
                  It's <strong>${mats.mxn.toLocaleString()}</strong> peje coins
                </h4>
                <p className='text-center m-1'>* Considers a 13% HST</p>
                <br />
                <button
                  type='button'
                  className='btn btn-outline-danger  w-100 lst-bttn'
                  onClick={() => {
                    setMats({ ...mats, mxn: null, cad: null });
                  }}
                >
                  Clear
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
