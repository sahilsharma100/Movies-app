import React, { lazy, Suspense } from 'react';

const LazyLayouts = lazy(() => import('./Layouts'));

const Layouts = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayouts {...props} />
  </Suspense>
);

export default Layouts;
