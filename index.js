const { useState } = require("react")

function ShoppingCart(){
    var [cart, setCart] = useState([])

    var [total, setTotal] = useState(0)
    var [checkout, setCheckout] = useState(false)
    var [error, setError] = useState(null)
    var [loading, setLoading] = useState(false)
    var [success, setSuccess] = useState(false)
    var [orderId, setOrderId] = useState(null)


    var [paymentMethod, setPaymentMethod] = useState(null)
var prevCart={
    
}
    var setTotal = ()=>
    {
         
    }

    var availlabaleinventory = ()=>
    {
        // Function to check available inventory
        return cart.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
    }

    var addToCart = (item) => {
        // Function to add item to cart
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    }

    var removeFromCart = (item) => {
        // Function to remove item from cart
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            } else {
                return prevCart.filter(cartItem => cartItem.id !== item.id);
            }
        });
    }

    var checkoutCart = () => {
        // Function to handle checkout
        if (cart.length === 0) {
            setError("Your cart is empty.");
            return;
        }
    }

    var clearCart = () => {
        // Function to clear the cart
        setCart([]);
        setTotal(0);    
    }

    return{
        cart,
        setCart,
        total,
        setTotal,
        checkout,
        setCheckout,
        error,
        setError,
        loading,
        setLoading,
        success,
        setSuccess,
        orderId,
        setOrderId,
        paymentMethod,
        setPaymentMethod,
        availlabaleinventory,
        addToCart,
        removeFromCart,
        checkoutCart,
        clearCart

    }
}