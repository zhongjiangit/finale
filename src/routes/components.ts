import React from 'react'
import PageWrapper from "components/PageWrapper";
// import { testFunction } from 'tests'

const routeComponents = {
    StatePromotion: React.lazy(() => import ('pages/state-promotion')),
    // UseHooks: React.lazy(() => testFunction.slowImport((import ('pages/use-hooks')), 2000)),
    UseHooks: React.lazy(() => import ('pages/use-hooks')),
    UseRef: React.lazy(() => import ('pages/use-ref'))
}

const routerArray = [{
    path: 'promotion',
    component: (props?: any) => PageWrapper(routeComponents.StatePromotion, props),
  }, {
    path: 'hooks',
    component: (props?: any) => PageWrapper(routeComponents.UseHooks, props),
  }, {
    path: 'ref',
    component: (props?: any) => PageWrapper(routeComponents.UseRef, props),
  }]

export default routerArray