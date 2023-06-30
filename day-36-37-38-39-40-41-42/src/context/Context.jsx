import { createContext, useContext, useReducer } from "react"
import { faker } from "@faker-js/faker"
import { cartReducer, prodReducer } from "./Reducer";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {

    const products = [...Array(50)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlPicsumPhotos(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7, 8, 9, 10]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }));

    // console.log(products);

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    })

    const [prodState, prodDispatch] = useReducer(prodReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    })

    return (<Cart.Provider value={{ state, dispatch, prodState, prodDispatch }}>{children}</Cart.Provider>);
}

export default Context

export const CartState = () => {
    return useContext(Cart);
}