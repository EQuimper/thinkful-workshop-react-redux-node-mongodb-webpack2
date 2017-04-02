/* @flow */

import type { Reducers } from '../redux/reducers';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V; // eslint-disable-line

export type State = $ObjMap<Reducers, $ExtractFunctionReturn>; // eslint-disable-line
