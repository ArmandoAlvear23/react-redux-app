import { BUY_CAKE, RETURN_CAKE } from "./cakeTypes";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

export const returnCake = () => {
  return {
    type: RETURN_CAKE,
  };
};
