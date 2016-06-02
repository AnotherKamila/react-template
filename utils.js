export const m = (old, over) => Object.assign({}, old, over)

export function fetch_with_actions(url) {
    return (dispatch, action_before, action_creator_after) => {
        dispatch(action_before)
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(action_creator_after(json)))
    }
}
