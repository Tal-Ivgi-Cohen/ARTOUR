const initialState = {
    arts: [],
    selecteArt: {},
  }
  
export function artReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_ARTS':
            return { ...state, arts: action.arts }
        case 'SELECTED_ART':
    return { ...state, selectedArt: action.art } 
        default:
        return state
    }
}