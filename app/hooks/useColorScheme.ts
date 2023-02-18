export default function useColorScheme() {
  return { setColorScheme };
}

function setColorScheme(state: 'dark' | 'light' | 'system') {
  if (typeof window === 'undefined') return;

  if (state === 'dark') {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  }

  if (state === 'light') {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  }

  if (state === 'system') {
    localStorage.removeItem('theme');

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
