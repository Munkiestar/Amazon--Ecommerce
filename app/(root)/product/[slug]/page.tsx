import { data } from '@/lib/data'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductDetail = ({ params: { slug } }: { params: { slug: string } }) => {
  const product = data.products.find((prod) => prod.slug === slug)

  if (!product) return <div>Product not found!</div>
  console.log('prod: ', product)
  return (
    <>
      <div className='my-2 flex gap-3 items-center btn w-1/2 btn-secondary'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 512 512'
        >
          <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={48}
            d='M244 400L100 256l144-144M120 256h292'
          ></path>
        </svg>
        <Link href='/'>Back to Products</Link>
      </div>
      <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            className='w-full h-auto'
          />
        </div>
        <div>
          <ul className='space-y-4'>
            <li>
              <h1 className='text-xl'>{product.name}</h1>
            </li>
            <li>
              {product.rating} of {product.numReviews} reviewes
            </li>
            <li>{product.brand}</li>
            <li>
              <div className='divider'></div>
            </li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className='card bg-base-300 shadow-xl p-4 mt-3 md:mt-4'>
            <div className='cart-body'>
              <div className='mb-2 flex justify-between'>
                <div>Price</div>
                <div>${product.price}</div>
              </div>
            </div>
            <div className='mb-2 flex justify-between'>
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
            </div>
            <div className='card-actions justify-center'>
              <button className='btn btn-primary w-full' type='button'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
