import { FAVORITAR } from '../actions';

export default function userReducer(state = [], action) {
    switch (action.type) {
        case FAVORITAR:
            return [...state, action.people];
        default:
            return state.filter((people) => people.id !== action.people.id);
    }
}
