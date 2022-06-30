import graphQLClient from '../components/graphQLClient';
import { ShirtsQuery } from '../queries/shirtsQuery';
import { GetStaticProps } from 'next';
import Image from 'next/image';

export async function getStaticProps(context) {
  const data = await graphQLClient.request(ShirtsQuery);
  return {
    props: { data },
  };
}

const shirts = ({ data: { shirts } }) => {
  const assetsURL = process.env.NEXT_PUBLIC_ASSETS;
  return (
    <div className='shirts'>
      <p>This is a shirts page!</p>
      {shirts.map(shirt => (
        <div class='flex h-screen items-center justify-center bg-indigo-50 px-4'>
          <div class='max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl'>
            <div
              className='product'
              key={shirt.product_image.id}
              style={{ position: 'relative', height: '100%', width: '100%' }}>
              <Image
                className='productImage'
                src={`
            ${assetsURL}${shirt.product_image.id}
            `}
                layout='fill'
                objectFit='contain'
                priority></Image>
              <div class='p-5'>
                <p class='text-medium mb-5 text-gray-700'>{shirt.name} </p>
                <button class='w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75'>
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default shirts;
