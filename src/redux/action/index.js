

//add item to Cart

export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}

//delete item from Cart

export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}