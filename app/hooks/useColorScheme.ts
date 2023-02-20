export function getColorScheme() {
  if (typeof document === 'undefined') return null;

  if (
    localStorage.getItem('scheme') === 'dark' ||
    (!('scheme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark';
  }

  if (localStorage.getItem('scheme') === 'light') {
    return 'light';
  }

  return null;
}

export function setColorScheme(state: 'dark' | 'light' | null) {
  if (state === 'dark') {
    localStorage.setItem('scheme', 'dark');
    document.documentElement.classList.add('dark');
  }

  if (state === 'light') {
    localStorage.setItem('scheme', 'light');
    document.documentElement.classList.remove('dark');
  }

  if (state === null) {
    localStorage.removeItem('scheme');

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
