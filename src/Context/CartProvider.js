import React, { useContext } from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";
import AuthContext from "./auth-context";


const defaultCartState = {
    items:[],
    total:0
}

const cartReducer = (state,action)=> {

    if (action.type === 'ADD') {

        const email = action.email

        console.log(email)

        const a = email.split('@')
        const data = a[0]

        const updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.amount;
    
          const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
          );
          const existingCartItem = state.items[existingCartItemIndex];
          let updatedItems;
      
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

            console.log(updatedItem.id)
            
            fetch(
              `https://crudcrud.com/api/dab7fbac993340fa8af759a1d432902d/new1${data}/${'64b5a2e1c632b703e830c991'}`,
      
              {
                method : 'PUT',
                body : JSON.stringify({
                  id: existingCartItem.id,
                  title: existingCartItem.title,
                  price: existingCartItem.price,
                  amount: existingCartItem.amount+1,
                }),
                headers : {
                  'Content-Type' : 'application/json'
                }
              }
       
            )

          } else {
            updatedItems = state.items.concat(action.item);

            fetch(
              
              `https://crudcrud.com/api/dab7fbac993340fa8af759a1d432902d/new1${data}`,
      
              {
                method : 'POST',
                body : JSON.stringify({
                  items : action.item
                }),
                headers : {
                  'Content-Type' : 'application/json'
                }
              }
       
            )
          }

          
          

          

          

      
          return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
          };
    }

    if(action.type === 'REMOVE'){
      
    }

}

const CartProvider = (props)=> {

  const ctx1 = useContext(AuthContext)

    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
      );
    
      const addItemToCartHandler = (item,email) => {
        dispatchCartAction({ type: 'ADD', item: item , email : email});
      };
    
      const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
      };
    
      const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        email : cartState.email
      };
    
      return (
        <CartContext.Provider value={cartContext}>
          {props.children}
        </CartContext.Provider>
      );
}

export default CartProvider