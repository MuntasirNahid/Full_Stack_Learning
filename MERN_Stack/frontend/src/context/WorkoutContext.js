//Global function bananor jonno.. jatey sathe sathe display hoy kono kichu.. refresh kore call kora na lage

//we create global state to many different components in the application and we can also update the states by dispatching actions from those components
//to keep the local states in sync with the database, we do this

import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => { //state = previous state
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts] //new action + previous workouts
            }
            case 'DELETE_WORKOUT':
                return {
                    workouts: state.workouts.filter((w)=> w._id !== action.payload._id )
                }
        default:
            return state
    }

}


export const WorkoutsContextProvider = ({ children }) => { //children means the props it is accepting

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    }) //another hook like usState

    // dispatch({ type: 'SET_WORKOUTS', payload: [{}, {}] }) // type = the state change we want to make  and payload = any data we need to make this change
    //argument inside dispatch function is known as action




    return (
        //wrapping the whole application under this context provider
        <WorkoutsContext.Provider value={{ ...state, dispatch }}  >
            {children}
        </WorkoutsContext.Provider>
        //as we are wrapping root app.js file,, every component will have access to the context.. now if we give any value to it.. it can be used in every component

    )
}