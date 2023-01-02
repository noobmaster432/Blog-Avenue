import React from 'react';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';

const PostDetail = ({post}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
        <div className="relative overflow-hidden shadow-md mb-6">
            <img src={post && post.featuredImage.url ? post.featuredImage.url : "https://picsum.photos/200/300"} alt={post.title} className='object-top h-full w-full rounded-t-lg' />
        </div>
        <div className="px-4 lg:px-0">
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                  <img src={post.author.photo.url} alt={post.author.name} height='40px' width='40px' className="align-middle rounded-full" />
                  <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
            </div>
            <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
            <RichText 
              content={post.content.raw.children} 
              renderers={{
                h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold mb-4 mt-8">{children}</h3>,
                p: ({ children }) => <p className="mb-4 mt-4">{children}</p>,
                bold: ({ children }) => <strong>{children}</strong>,
                ul: ({ children }) => <li className="font-serif text-lg text-blue-900 list-none ml-4">{children}</li>,
              }}
              />
        </div>
    </div>
  )
}

export default PostDetail