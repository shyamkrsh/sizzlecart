import React from 'react'
import Searchbar from './Searchbar'
import ProductContainer from './ProductContainer';

function SearchProductsPage() {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <Searchbar value={value} setValue={setValue} />
      <ProductContainer value={value} />
    </div>
  )
}

export default SearchProductsPage