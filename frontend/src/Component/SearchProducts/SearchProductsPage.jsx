import React, { useState } from 'react'
import Searchbar from './Searchbar'
import ProductContainer from './ProductContainer';

function SearchProductsPage() {
  const [value, setValue] = React.useState('');
  const [search, setSearch] = useState(true);

  return (
    <div className='w-[100vw] bg-cyan-100 '>
      <Searchbar value={value} setValue={setValue} />
      <div className={search ? "grid place-content-center overflow-hidden" : "hidden" } style={{ minHeight: 'calc(100vh - 3.8rem)' }}>
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
      <ProductContainer value={value} setSearch={setSearch} />
    </div>
  )
}

export default SearchProductsPage