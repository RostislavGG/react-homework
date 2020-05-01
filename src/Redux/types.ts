export enum Gender {
  Male,
  Female,
  Other
}

export interface User {
  id: string;
  name: string;
  loginName: string;
  password: string;
  gender: Gender;
  isAdmin: boolean;
  profilePic?: string;
  description?: string;
  registerDate: Date;
  lastChangeDate?: Date;
}

export interface Recipe {
  id: number;
  ownerId: number;
  receipeName: string;
  description: string;
  timeToMake: number;
  products: Product[];
  tags: string[];
  createdDate: Date;
  lastModifiedDate: Date;
}

export interface Product {
  name: string;
  quantity: number;
}

export interface userActionReturn {
  type: string;
  user: User;
  nextUser?: User;
}

export interface recipeActionReturn {
  type: string;
  recipe: Recipe;
  nextRecipe?: Recipe;
}
