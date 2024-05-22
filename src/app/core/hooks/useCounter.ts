import { decrement, increment, selecCount } from "../store/reducers/counter.reducer"
import { useAppDispatch, useAppSelector } from "./useStore"

export const useCounter = () => {
  const counter = useAppSelector(selecCount);
  const dispatch = useAppDispatch();

  const incrementCount = () => dispatch(increment());
  const decrementCount = () => dispatch(decrement());

  return {
    counter,
    incrementCount,
    decrementCount
  }
}
