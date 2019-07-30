import { createAction } from 'redux-actions';
import { ActionTypes, RoutePayload } from './';

export const routeAction = createAction<RoutePayload>(ActionTypes.Route);
