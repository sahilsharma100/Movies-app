import React, { lazy, Suspense } from 'react';

const LazyMovie = lazy(() => import('./Movie'));

const Movie = (props: any & { children?: React.ReactNode; }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyMovie  {...props} />
  </Suspense>
);

export default Movie;
