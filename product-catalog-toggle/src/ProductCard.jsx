

function ProductCard ({name, price, category, isInCart, onToggle}) {
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
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
            )}
        </div>
    )
}

export default ProductCard