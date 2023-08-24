const reducer = (state, action) =>
 {
    switch (action.type)
     {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            };
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter(
                    (curElem) => curElem.objectID !== action.payload
                ),
            };
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload,
            };
        case "NEXT_PAGE":
            let pageNumInc = state.page + 1;
            if (pageNumInc >= state.nbPages) {
                pageNumInc = 0;
            }
            return {
                ...state,
                page: pageNumInc,
            };
        case "PREV_PAGE":
            let pageNumDec = state.page-1;
            if(pageNumDec<=0)
            {
                pageNumDec=0
            }
            return{
                ...state,
                page:pageNumDec,

            };

        // you can add the default case too
    }
    return state;
};
export default reducer;