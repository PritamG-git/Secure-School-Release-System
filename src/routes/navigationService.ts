import * as React from 'react';
import {StackActions, DrawerActions} from '@react-navigation/native';

let routeParams = {};

export const navigationRef = React.createRef() as any;

export function navigate(name, params?: object) {
  routeParams = params;
  navigationRef.current?.navigate(name, params);
}
export function goBack() {
  navigationRef.current?.goBack();
}
export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function pop(...args) {
  navigationRef.current?.dispatch(StackActions.pop(...args));
}

export function popToRoot(...args) {
  navigationRef.current?.dispatch(StackActions.popToTop(...args));
}

export function replace(...args) {
  navigationRef.current?.dispatch(StackActions.replace(...args));
}

export function toggleDrawer() {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

export function getRouteParams() {
  return routeParams;
}
