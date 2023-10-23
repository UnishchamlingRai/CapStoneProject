import { AnyAction } from "redux"



export type actionTypeWithPayload<t,p>={
    type:t;
    payload:p;
}

export type action<t>={
    type:t
}

export function createAction<t extends string,p>(type:t ,payload:p):actionTypeWithPayload<t,p>;

export function createAction<t extends string>(type:t,payload:void):action<t>;

export function createAction<t extends string,p>(type:t,payload:p){
    return{
        type,payload
    }
}