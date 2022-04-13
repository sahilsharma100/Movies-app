import React, { lazy, Suspense } from 'react';

const LazySidebar = lazy(() => import('./Sidebar'));

const Sidebar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazySidebar {...props} />
  </Suspense>
);

export default Sidebar;
