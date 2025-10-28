/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

export type CreateHorseCategoryInput = {
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateHorseDisciplineInput = {
  name: Scalars['String']['input'];
};

export type CreateHorseGenderInput = {
  name: Scalars['String']['input'];
};

export type Horse = {
  __typename?: 'Horse';
  age: Scalars['Int']['output'];
  category?: Maybe<HorseCategory>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discipline?: Maybe<HorseDiscipline>;
  gender?: Maybe<HorseGender>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<HorseImage>>;
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  veterinaryDocumentAvailable?: Maybe<Scalars['Boolean']['output']>;
  xrayResultsAvailable?: Maybe<Scalars['Boolean']['output']>;
};

export type HorseCategory = {
  __typename?: 'HorseCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  horses?: Maybe<Array<Horse>>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HorseDiscipline = {
  __typename?: 'HorseDiscipline';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  horses?: Maybe<Array<Horse>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HorseGender = {
  __typename?: 'HorseGender';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  horses?: Maybe<Array<Horse>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HorseImage = {
  __typename?: 'HorseImage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  horse?: Maybe<Horse>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHorse?: Maybe<Horse>;
  createHorseCategory?: Maybe<HorseCategory>;
  createHorseDiscipline?: Maybe<HorseDiscipline>;
  createHorseGender?: Maybe<HorseGender>;
  deleteHorse?: Maybe<Horse>;
  deleteHorseCategory?: Maybe<HorseCategory>;
  deleteHorseDiscipline?: Maybe<HorseDiscipline>;
  deleteHorseGender?: Maybe<HorseGender>;
  updateHorse?: Maybe<Horse>;
  updateHorseCategory?: Maybe<HorseCategory>;
  updateHorseDiscipline?: Maybe<HorseDiscipline>;
  updateHorseGender?: Maybe<HorseGender>;
};


export type MutationCreateHorseArgs = {
  age: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  disciplineId: Scalars['String']['input'];
  genderId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  userId: Scalars['String']['input'];
};


export type MutationCreateHorseCategoryArgs = {
  data: CreateHorseCategoryInput;
};


export type MutationCreateHorseDisciplineArgs = {
  data: CreateHorseDisciplineInput;
};


export type MutationCreateHorseGenderArgs = {
  data: CreateHorseGenderInput;
};


export type MutationDeleteHorseArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteHorseCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteHorseDisciplineArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteHorseGenderArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateHorseArgs = {
  age?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disciplineId?: InputMaybe<Scalars['String']['input']>;
  genderId?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateHorseCategoryArgs = {
  data: UpdateHorseCategoryInput;
};


export type MutationUpdateHorseDisciplineArgs = {
  data: UpdateHorseDisciplineInput;
};


export type MutationUpdateHorseGenderArgs = {
  data: UpdateHorseGenderInput;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type Query = {
  __typename?: 'Query';
  horse?: Maybe<Horse>;
  horseCategories?: Maybe<Array<HorseCategory>>;
  horseDisciplines?: Maybe<Array<HorseDiscipline>>;
  horseGenders?: Maybe<Array<HorseGender>>;
  horses?: Maybe<Array<Horse>>;
  users?: Maybe<Array<User>>;
};


export type QueryHorseArgs = {
  id: Scalars['String']['input'];
};


export type QueryHorsesArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHorseCategoryInput = {
  id: Scalars['ID']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHorseDisciplineInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateHorseGenderInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firebaseUid?: Maybe<Scalars['String']['output']>;
  horses?: Maybe<Array<Horse>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  notifications?: Maybe<Array<Notification>>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<UserReview>>;
  role?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userFavoriteHorses?: Maybe<Array<UserFavoriteHorses>>;
  verifiedSeller?: Maybe<Scalars['Boolean']['output']>;
  whatsAppNumber?: Maybe<Scalars['String']['output']>;
};

export type UserFavoriteHorses = {
  __typename?: 'UserFavoriteHorses';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  horse?: Maybe<Horse>;
  horseId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type UserReview = {
  __typename?: 'UserReview';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  reviewer?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type HorsesQueryVariables = Exact<{ [key: string]: never; }>;


export type HorsesQuery = { __typename?: 'Query', horses?: Array<{ __typename?: 'Horse', id: string, price?: number | null, height?: number | null, location?: string | null, status?: string | null, gender?: { __typename?: 'HorseGender', id: string, name?: string | null } | null, discipline?: { __typename?: 'HorseDiscipline', id: string, name?: string | null } | null, user?: { __typename?: 'User', id: string, name?: string | null, email?: string | null, whatsAppNumber?: string | null } | null }> | null };

export type HorseCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type HorseCategoriesQuery = { __typename?: 'Query', horseCategories?: Array<{ __typename?: 'HorseCategory', id: string, name?: string | null, imageUrl?: string | null, createdAt?: any | null, updatedAt?: any | null }> | null };

export type CreateHorseCategoryMutationVariables = Exact<{
  data: CreateHorseCategoryInput;
}>;


export type CreateHorseCategoryMutation = { __typename?: 'Mutation', createHorseCategory?: { __typename?: 'HorseCategory', id: string, name?: string | null, imageUrl?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type DeleteHorseCategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteHorseCategoryMutation = { __typename?: 'Mutation', deleteHorseCategory?: { __typename?: 'HorseCategory', id: string } | null };

export type UpdateHorseCategoryMutationVariables = Exact<{
  data: UpdateHorseCategoryInput;
}>;


export type UpdateHorseCategoryMutation = { __typename?: 'Mutation', updateHorseCategory?: { __typename?: 'HorseCategory', id: string } | null };

export type HorseGendersQueryVariables = Exact<{ [key: string]: never; }>;


export type HorseGendersQuery = { __typename?: 'Query', horseGenders?: Array<{ __typename?: 'HorseGender', id: string, name?: string | null, createdAt?: any | null, updatedAt?: any | null }> | null };

export type CreateHorseGenderMutationVariables = Exact<{
  data: CreateHorseGenderInput;
}>;


export type CreateHorseGenderMutation = { __typename?: 'Mutation', createHorseGender?: { __typename?: 'HorseGender', id: string, name?: string | null } | null };

export type DeleteHorseGenderMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteHorseGenderMutation = { __typename?: 'Mutation', deleteHorseGender?: { __typename?: 'HorseGender', id: string } | null };

export type UpdateHorseGenderMutationVariables = Exact<{
  data: UpdateHorseGenderInput;
}>;


export type UpdateHorseGenderMutation = { __typename?: 'Mutation', updateHorseGender?: { __typename?: 'HorseGender', id: string } | null };

export type HorseDisciplinesQueryVariables = Exact<{ [key: string]: never; }>;


export type HorseDisciplinesQuery = { __typename?: 'Query', horseDisciplines?: Array<{ __typename?: 'HorseDiscipline', id: string, name?: string | null, createdAt?: any | null, updatedAt?: any | null }> | null };

export type CreateHorseDisciplineMutationVariables = Exact<{
  data: CreateHorseDisciplineInput;
}>;


export type CreateHorseDisciplineMutation = { __typename?: 'Mutation', createHorseDiscipline?: { __typename?: 'HorseDiscipline', id: string, name?: string | null } | null };

export type DeleteHorseDisciplineMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteHorseDisciplineMutation = { __typename?: 'Mutation', deleteHorseDiscipline?: { __typename?: 'HorseDiscipline', id: string } | null };

export type UpdateHorseDisciplineMutationVariables = Exact<{
  data: UpdateHorseDisciplineInput;
}>;


export type UpdateHorseDisciplineMutation = { __typename?: 'Mutation', updateHorseDiscipline?: { __typename?: 'HorseDiscipline', id: string } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const HorsesDocument = new TypedDocumentString(`
    query horses {
  horses {
    id
    price
    height
    gender {
      id
      name
    }
    discipline {
      id
      name
    }
    user {
      id
      name
      email
      whatsAppNumber
    }
    location
    status
  }
}
    `) as unknown as TypedDocumentString<HorsesQuery, HorsesQueryVariables>;
export const HorseCategoriesDocument = new TypedDocumentString(`
    query HorseCategories {
  horseCategories {
    id
    name
    imageUrl
    createdAt
    updatedAt
  }
}
    `) as unknown as TypedDocumentString<HorseCategoriesQuery, HorseCategoriesQueryVariables>;
export const CreateHorseCategoryDocument = new TypedDocumentString(`
    mutation CreateHorseCategory($data: CreateHorseCategoryInput!) {
  createHorseCategory(data: $data) {
    id
    name
    imageUrl
    createdAt
    updatedAt
  }
}
    `) as unknown as TypedDocumentString<CreateHorseCategoryMutation, CreateHorseCategoryMutationVariables>;
export const DeleteHorseCategoryDocument = new TypedDocumentString(`
    mutation DeleteHorseCategory($id: String!) {
  deleteHorseCategory(id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeleteHorseCategoryMutation, DeleteHorseCategoryMutationVariables>;
export const UpdateHorseCategoryDocument = new TypedDocumentString(`
    mutation UpdateHorseCategory($data: UpdateHorseCategoryInput!) {
  updateHorseCategory(data: $data) {
    id
  }
}
    `) as unknown as TypedDocumentString<UpdateHorseCategoryMutation, UpdateHorseCategoryMutationVariables>;
export const HorseGendersDocument = new TypedDocumentString(`
    query horseGenders {
  horseGenders {
    id
    name
    createdAt
    updatedAt
  }
}
    `) as unknown as TypedDocumentString<HorseGendersQuery, HorseGendersQueryVariables>;
export const CreateHorseGenderDocument = new TypedDocumentString(`
    mutation CreateHorseGender($data: CreateHorseGenderInput!) {
  createHorseGender(data: $data) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<CreateHorseGenderMutation, CreateHorseGenderMutationVariables>;
export const DeleteHorseGenderDocument = new TypedDocumentString(`
    mutation DeleteHorseGender($id: String!) {
  deleteHorseGender(id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeleteHorseGenderMutation, DeleteHorseGenderMutationVariables>;
export const UpdateHorseGenderDocument = new TypedDocumentString(`
    mutation UpdateHorseGender($data: UpdateHorseGenderInput!) {
  updateHorseGender(data: $data) {
    id
  }
}
    `) as unknown as TypedDocumentString<UpdateHorseGenderMutation, UpdateHorseGenderMutationVariables>;
export const HorseDisciplinesDocument = new TypedDocumentString(`
    query horseDisciplines {
  horseDisciplines {
    id
    name
    createdAt
    updatedAt
  }
}
    `) as unknown as TypedDocumentString<HorseDisciplinesQuery, HorseDisciplinesQueryVariables>;
export const CreateHorseDisciplineDocument = new TypedDocumentString(`
    mutation CreateHorseDiscipline($data: CreateHorseDisciplineInput!) {
  createHorseDiscipline(data: $data) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<CreateHorseDisciplineMutation, CreateHorseDisciplineMutationVariables>;
export const DeleteHorseDisciplineDocument = new TypedDocumentString(`
    mutation DeleteHorseDiscipline($id: String!) {
  deleteHorseDiscipline(id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeleteHorseDisciplineMutation, DeleteHorseDisciplineMutationVariables>;
export const UpdateHorseDisciplineDocument = new TypedDocumentString(`
    mutation UpdateHorseDiscipline($data: UpdateHorseDisciplineInput!) {
  updateHorseDiscipline(data: $data) {
    id
  }
}
    `) as unknown as TypedDocumentString<UpdateHorseDisciplineMutation, UpdateHorseDisciplineMutationVariables>;