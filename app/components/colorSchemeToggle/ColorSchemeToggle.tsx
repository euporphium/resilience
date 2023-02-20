import cx from 'classnames';

import { getColorScheme, setColorScheme } from '~/hooks/useColorScheme';

import Night from '~/lib/doodle-icons/weather/Night';
import Sunny from '~/lib/doodle-icons/weather/Sunny';

import styles from './styles.module.css';

export default function ColorSchemeToggle() {
  const colorScheme = getColorScheme();
  return (
    <>
      <div className={styles.container}>
        <Night />
        <Sunny />
      </div>

      {/*<button*/}
      {/*  id="scheme-toggle"*/}
      {/*  title="toggles light and dark schemes"*/}
      {/*  className={cx('text-black dark:text-white', 'toggle')}*/}
      {/*  // onClick={toggleColorScheme}*/}
      {/*  // aria-label={getColorScheme()}*/}
      {/*  // aria-live="polite"*/}
      {/*>*/}
      {/*  <Night />*/}
      {/*  <Sunny />*/}
      {/*</button>*/}
      <div className={cx('mb-4 flex justify-evenly')}>
        <button
          className={cx(
            'rounded',
            'bg-blue-500 dark:bg-red-400',
            'py-2 px-4',
            'text-white',
            'hover:bg-blue-600'
          )}
          onClick={() => setColorScheme('light')}
        >
          Light
        </button>
        <button
          className={cx(
            'rounded',
            'bg-blue-500',
            'py-2 px-4',
            'text-white',
            'hover:bg-blue-600'
          )}
          onClick={() => setColorScheme('dark')}
        >
          Dark
        </button>
        <button
          className={cx(
            'rounded',
            'bg-blue-500',
            'py-2 px-4',
            'text-white',
            'hover:bg-blue-600'
          )}
          onClick={() => setColorScheme(null)}
        >
          Auto
        </button>
      </div>
    </>
  );
}
