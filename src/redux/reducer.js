const initialState = {
    data:{
        result:[]
    },
    result:[],
    slice: 10,
    displayInfo:false,
    page: 1,
    showData:[]
}



const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'STORE_DATA':
            return {
                ...state,
                result:action.results
            }
        case 'SHOW_MOVIES':
            return {
                ...state,
                showData: action.data
            }
        case 'FETCH_NEW_DATA':
            return {
                ...state,
                result: [...state.result, ...action.newData]
            }
        case 'ADD_PAGE':
            return {
                ...state,
                page: state.page + 1
            }
        case 'ADD_SLICE':
            return {
                ...state,
                slice:state.slice + 5
            }
        case 'CLEAR_DATA':
            return {
                ...state,
                showData:[],
                result:[]
            }
        case 'SHOW_INFO':
            return {
                ...state,
                displayInfo:!state.displayInfo
            }
        default: return state
    }
    // if(action.type === 'STORE_DATA'){
    //     return {
    //         ...state,
    //         result:state.result.concat(action.results)
    //         result: [...state.result, action.results],
    //         result:action.results
    //     }
    // } 
    // if(action.type === 'FETCH_NEW_DATA'){
    //     return {
    //         ...state,
    //         result: [...state.result, action.newData]
    //     }
    // } 
    // if(action.type === 'SHOW_MOVIES'){
    //     return {
    //         ...state,
    //         showData: action.data
    //     }
    // } 
    // if( action.type === 'ADD_SLICE'){
        
    //     return{
    //         ...state,
    //         slice:state.slice + 5
    //     }
    // } 
    // if (action.type === 'SHOW_INFO'){
    //     return {
    //         ...state,
    //         displayInfo:!state.displayInfo
    //     }
    // }
    // if (action.type === 'ADD_PAGE'){
    //     return {
    //         ...state,
    //         page: state.page + 1
    //     }
    // }
    // if (action.type === 'CLEAR_DATA'){
    //     return {
    //         ...state,
    //         showData:[],
    //         result:[],
    //     }
    // }
    // return state;
}

export default reducer;