import { json, LoaderArgs } from '@remix-run/node';
import cx from 'classnames';

import { userPreferences } from '~/cookies';
import { setColorScheme } from '~/hooks/useColorScheme';
import { getUser } from '~/session.server';

import sunny from '~/assets/sunny.svg';
import night from '~/assets/night.svg';
import { useLoaderData } from '@remix-run/react';

// export async function loader({ request }: LoaderArgs) {
//   const cookieHeader = request.headers.get('Cookie');
//
//   return json({
//     userPreferences: null,
//     // userPreferences: (await userPreferences.parse(cookieHeader)) || {},
//   });
// }

export default function ColorSchemeToggle() {
  // const { userPreferences } = useLoaderData<typeof loader>();

  return (
    <>
      <button
        id="scheme-toggle"
        title="toggles light and dark schemes"
        // onClick={toggleColorScheme}
        // aria-label={getColorScheme()}
        // aria-live="polite"
      >
        {/*{colorScheme === 'dark' ? (*/}
        {/*  <img src={night} alt="night" />*/}
        {/*) : (*/}
        {/*  <img src={sunny} alt="sunny" />*/}
        {/*)}*/}
      </button>
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
