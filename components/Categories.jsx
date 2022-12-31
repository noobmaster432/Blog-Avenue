import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          Categories
        </h3>
        {categories.map((category) =>(
          <Link key={categories.slug} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block pb-3 mb-3 font-sans font-semibold text-lg'>
              {category.name}
            </span>
          </Link>
        ))}
    </div>
  )
}

export default Categories