import { TOKEN, LOCALE, CURRENCY, PIC, ID } from "../utils/constants";

export function setToken(token) {
    localStorage.setItem(TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(TOKEN);
}

export function removeToken() {
    localStorage.removeItem(TOKEN);
}

export function setLocale(locale) {
    localStorage.setItem(LOCALE, locale);
}

export function getLocale() {
    return localStorage.getItem(LOCALE);
}

export function removeLocale() {
    localStorage.removeItem(LOCALE);
}

export function setCurrency(currency) {
    localStorage.setItem(CURRENCY, currency);
}

export function getCurrency() {
    return localStorage.getItem(CURRENCY);
}

export function removeCurrency() {
    localStorage.removeItem(CURRENCY);
}

export function setIdNutritionist(id) {
    localStorage.setItem(ID, id);
}

export function getIdNutritionist() {
    return localStorage.getItem(ID);
}

export function removeIdNutritionist() {
    localStorage.removeItem(ID);
}

export function setPic(token) {
    localStorage.setItem(PIC, token);
}

export function getPic() {
    return localStorage.getItem(PIC);
}

export function removePic() {
    localStorage.removeItem(PIC);
}
