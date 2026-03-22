export function scrollToContact(currentPath: string, router?: { push: (path: string) => void }) {
  if (currentPath === '/') {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (router) {
    router.push('/');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}
