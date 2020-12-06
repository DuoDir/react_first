export function setSession (name,value) {
    return sessionStorage.setItem(name , value)
}
export function getSession (name) {
    return sessionStorage.getItem(name)
}
export function removeSession (name) {
    return sessionStorage.removeItem(name)
}
export function clearSession () {
    return sessionStorage.clear()
}