import { ProductButtons, ProductCards, ProductImage, ProductTitle } from "../components/"
import '../styles/custom-styles.css';


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
             <ProductCards 
                    product={product}
                    className="bg-dark text-white"
             >
                <ProductCards.Image className="custom-image" />
                <ProductCards.Title className="text-bold" />
                <ProductCards.Buttons className="custom-buttons" />
            </ProductCards>

            <ProductCards 
                product={product}
                className="bg-dark text-white"
            >
                <ProductImage className="custom-image" style={{boxShadow: '10px, 10px 10px rgba(0,0,0,0.2)'}} />
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-buttons" />
            </ProductCards> 

            <ProductCards 
                product={product}
                style={{
                    backgroundColor: '#70D1F8'
                }}
            >
                <ProductImage style={{boxShadow: '10px, 10px 10px rgba(0,0,0,0.2)'}} />
                <ProductTitle style={{fontWeight: 'bold'}} />
                <ProductButtons style={{
                    display: 'flex',
                    justifyContent: 'end'
                }} />
            </ProductCards> 

        </div>
        
    </div>
  )
}
