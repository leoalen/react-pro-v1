import { ProductButtons, ProductCards, ProductImage, ProductTitle } from "../components/"
import '../styles/custom-styles.css';
import { useShoppingCard } from "../hooks/useShoppingCard";
import { products } from "../data/products";


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange} = useShoppingCard();
    

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
             
             {
                products.map( product => (
                    <ProductCards 
                        key={product.id}
                        product={product}
                        className="bg-dark text-white"
                        onChange={ onProductCountChange }
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductImage className="custom-image" style={{boxShadow: '10px, 10px 10px rgba(0,0,0,0.2)'}} />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCards> 
                ))
             }
         
        </div>
        <div className="shopping-cart">
            
            {
                Object.entries(shoppingCart).map( ([key, product]) => (
                    <ProductCards 
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{width: '100px'}}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductImage className="custom-image" style={{boxShadow: '10px, 10px 10px rgba(0,0,0,0.2)'}} />
                            <ProductButtons 
                                    className="custom-buttons"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                    />
                    </ProductCards> 
                ))
            }
                 
        </div>

    </div>
    
  )
}
