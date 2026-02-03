import ProductList from "../../features/products/ProductList"

const HomeSection = (data:any) => {
    
  return (
   <>
      <section className="category-section">
        <ProductList data={data?.data} />
      </section>
   </>
  )
}

export default HomeSection
