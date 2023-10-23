export enum CATEGORRIES_ACTION_TYPE {
  FETCH_CATEGORIES_START= "categories/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS= "categories/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAIL= "categories/SET_CURRENT_CATEGORIES_FAIL",
};

export type CatetoryItems={
  id:number;
  imageUrl:string;
  name:string;
  price:number

}

export type Categoreis={
  title:string;
  items:CatetoryItems[];
  // imageUrl:string;
}

export type CategoryMap={
  [key:string]:CatetoryItems[]
}