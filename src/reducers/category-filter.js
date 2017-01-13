const categoryFilter = (state = '', action) => {
    switch (action.type) {
        case 'SET_CATEGORY_FILTER':
            return action.id;
        default:
            return state;
    }
};

export default categoryFilter