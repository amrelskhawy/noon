declare module namespace {

  export interface Cuisine {
    name: string;
    id: number;
  }

  export interface Restaurants {
    name: string;
    logo: string;
    cover: string;
    RestauranthId: number;
    delivery_time: number;
    delivery_cost: number;
    rate?: any;
    IsOpen: string;
    cuisines: Cuisine[];
  }

  export interface Datum {
    id: number;
    restaurants: Restaurants;
  }

  export interface GetPercentageForVendors {
    title: string;
    data: Datum[];
  }

  export interface Cuisine2 {
    id: number;
    name: string;
  }

  export interface Datum2 {
    name: string;
    RestauranthId: number;
    description: string;
    cover: string;
    logo: string;
    delivery_time: number;
    delivery_cost: number;
    rate?: any;
    IsOpen: string;
    cuisines: Cuisine2[];
  }

  export interface Lastoffers {
    title: string;
    data: Datum2[];
  }

  export interface Cuisine3 {
    name: string;
    id: number;
  }

  export interface Restaurant {
    name: string;
    description?: any;
    logo: string;
    cover: string;
    RestauranthId: number;
    cuisines: Cuisine3[];
  }

  export interface Branches {
    name: string;
    id: number;
    restaurant: Restaurant;
  }

  export interface Datum3 {
    name: string;
    RestauranthId: number;
    logo: string;
    cover: string;
    delivery_time: number;
    delivery_cost: number;
    total: number;
    ordersnumber: number;
    IsOpen: string;
    branches: Branches;
  }

  export interface GetMostOrderedBranch {
    title: string;
    data: Datum3[];
  }

  export interface MenuCategoriesItems {
    id: number;
    name: string;
    photo: string;
    descriptions: string;
    descriptions_en: string;
    name_en: string;
    menu_categories_id: number;
    price: number;
    created: Date;
    modified: Date;
    active: number;
  }

  export interface Datum4 {
    delivery_time: number;
    delivery_cost: number;
    restaurantsId: number;
    name: string;
    description: string;
    price: number;
    IsOpen: string;
    itemamount: string;
    menu_categories_items: MenuCategoriesItems;
  }

  export interface MostSellItems {
    title: string;
    data: Datum4[];
  }

  export interface Cuisine4 {
    id: number;
    name: string;
  }

  export interface Datum5 {
    name: string;
    RestauranthId: number;
    description?: any;
    logo: string;
    cover: string;
    delivery_time: number;
    delivery_cost: number;
    rate?: number;
    IsOpen: string;
    cuisines: Cuisine4[];
  }

  export interface GetNearestBranche {
    title: string;
    data: Datum5[];
  }

  export interface Cuisine5 {
    id: number;
    name: string;
  }

  export interface Datum6 {
    name: string;
    RestauranthId: number;
    description?: any;
    logo: string;
    cover: string;
    delivery_time: number;
    delivery_cost: number;
    rate?: any;
    IsOpen: string;
    cuisines: Cuisine5[];
  }

  export interface GetFreeDliveryBranches {
    title: string;
    data: Datum6[];
  }


  export interface RootObject {
    GetPercentageForVendors: GetPercentageForVendors;
    lastoffers: Lastoffers;
    getMostOrderedBranch: GetMostOrderedBranch;
    MostSellItems: MostSellItems;
    GetNearestBranche: GetNearestBranche;
    GetFreeDliveryBranches: GetFreeDliveryBranches;
  }
}

