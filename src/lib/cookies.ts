// Cookie utility functions
type CookieOptions = {
  days?: number;
  path?: string;
  sameSite?: 'Lax' | 'Strict' | 'None';
  secure?: boolean;
};

export const setCookie = (name: string, value: string, options: CookieOptions = {}) => {
  const { days = 365, path = '/', sameSite = 'Lax', secure = false } = options;
  
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    cookieString += `; expires=${date.toUTCString()}`;
  }
  
  cookieString += `; path=${path}`;
  cookieString += `; samesite=${sameSite}`;
  
  if (secure) {
    cookieString += '; secure';
  }
  
  document.cookie = cookieString;
};

export const getCookie = (name: string): string | null => {
  const nameEQ = `${encodeURIComponent(name)}=`;
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
    }
  }
  
  return null;
};

export const deleteCookie = (name: string, path = '/') => {
  setCookie(name, '', { days: -1, path });
};
