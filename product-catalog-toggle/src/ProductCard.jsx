

function ProductCard ({name, price, category, isInCart, onToggle, onUpdateQuantity}) {
    return (
        <div style={{
            padding: '10px 20px',
            border: isInCart? '2px solid #F59E0B' : '1px solid #E5E7EB',
            borderRadius: '10px'
        }}>
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>

            <button onClick={onToggle}>{isInCart ? 'Remove from Cart' : 'Add to Cart'}</button>

            {isInCart && (
                <div style={{display: 'flex', marginTop: '5px', gap: '3px'}}>
                    <button style={{flex: 1}} onClick={() => onUpdateQuantity(1)}>+</button>
                    <button style={{flex: 1}} onClick={() => onUpdateQuantity(-1)}>-</button>
                </div>
            )}
        </div>
    )
}

export default ProductCard