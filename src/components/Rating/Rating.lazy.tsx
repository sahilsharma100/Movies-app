import React, { lazy, Suspense } from 'react';

const LazyRating = lazy(() => import('./Rating'));

const Rating = (props: any & { children?: React.ReactNode; }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyRating {...props} />
  </Suspense>
);

export default Rating;
