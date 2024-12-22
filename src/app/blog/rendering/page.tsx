import React from 'react'

export default function RederingBlog() {
  return (
    <div className='flex flex-col justify-center items-center'>
      {/* heading and date, read and likes details */}
      <h1 className='text-3xl text-center md:text-5xl font-extrabold mt-20'>Rendering in Next.js. CSR & SSR</h1>

      <div className='flex justify-center md:justify-between items-center mt-7 w-[150px] md:w-[60%] text-base flex-wrap gap-4 md:gap-0'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 '>
          <p>December 22</p>
          <p>2 minutes read</p>
        </div>
        <p>1 million likes 😉</p>
      </div>

      {/*short over view  */}
      <p className='text-lg font-normal w-[60%] text-gray-400 mt-10'>
        In Next.js, rendering can be done using Client-Side Rendering (CSR) or Server-Side Rendering (SSR). CSR loads content on the client side after the initial page load, enhancing interactivity and reducing server load but potentially affecting SEO. SSR, on the other hand, generates HTML on the server for each request, improving SEO and initial load time. CSR is ideal for dynamic apps with minimal SEO requirements, while SSR is preferred for content-heavy sites requiring fast load times and search engine optimization.
      </p>

      <div>

        <h1>CSR: Client Side Rendring</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  )
}
