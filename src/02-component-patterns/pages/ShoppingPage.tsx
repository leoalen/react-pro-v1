import { ProductButtons, ProductCards, ProductImage, ProductTitle } from "../components/"

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
            {/* <ProductCards product={product}>
                <ProductCards.Image />
                <ProductCards.Title title={''} />
                <ProductCards.Buttons increaseBy={function (value: number): void {
                      throw new Error("Function not implemented.")
                  } } counter={0}  />
            </ProductCards> */}

             <ProductCards product={product}>
                <ProductCards.Image />
                <ProductCards.Title title={'Hola Mundo'} />
                <ProductCards.Buttons />
            </ProductCards>
        </div>
        
    </div>
  )
}
