export function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
}

export function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/;`;
}