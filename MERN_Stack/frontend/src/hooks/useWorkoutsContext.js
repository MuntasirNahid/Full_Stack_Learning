import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext) // = value and dispatch
    if (!context) {
        throw Error('useWOrkoutsContext must be used inside an WorkoutsContextProvider')
    }
    return context
}