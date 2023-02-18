import useColorScheme from '~/hooks/useColorScheme';
import cx from 'classnames';

export default function ColorSchemeToggle() {
  const { setColorScheme } = useColorScheme();

  return (
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
        onClick={() => setColorScheme('system')}
      >
        Reset
      </button>
    </div>
  );
}
