import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { Desktop, Mobile } from '../devices';

const Home: React.FC = () => {
  const [size, setSize] = useState<number>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSize(window.innerWidth);
    }

    const onResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', onResize);
  }, []);

  return (
    <>
      <Head>
        <title>JEEP COMMANDER</title>
      </Head>

      {size < 1024 ? (
        <Mobile />
      ) : (
        <Desktop />
      )}
    </>
  );
};

export default Home;
