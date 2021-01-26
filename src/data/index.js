import _menus from './data.json'

const TIMEOUT = 100

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getMenus: (cb, timeout) => setTimeout(() => cb(_menus), timeout || TIMEOUT)
}