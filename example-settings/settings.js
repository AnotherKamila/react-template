const get_default_language = () => {
    return 'en'
}

const default_state = {language: get_default_language()}

export const load_state = () => {
    let state = {}
    for (let k of Object.keys(default_state)) state[k] = localStorage.getItem(k) || default_state[k]
    console.log('settings:', state)
    return state
}
export const save_state = (state) => {
    for (let k of Object.keys(state)) localStorage.setItem(k, state[k])
}
