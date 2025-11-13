import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Json: { input: any; output: any; }
};

export type AggregateHorse = {
  __typename?: 'AggregateHorse';
  _avg?: Maybe<HorseAvgAggregateOutputType>;
  _count?: Maybe<HorseCountAggregateOutputType>;
  _max?: Maybe<HorseMaxAggregateOutputType>;
  _min?: Maybe<HorseMinAggregateOutputType>;
  _sum?: Maybe<HorseSumAggregateOutputType>;
};

export type AggregateHorseCategory = {
  __typename?: 'AggregateHorseCategory';
  _count?: Maybe<HorseCategoryCountAggregateOutputType>;
  _max?: Maybe<HorseCategoryMaxAggregateOutputType>;
  _min?: Maybe<HorseCategoryMinAggregateOutputType>;
};

export type AggregateHorseDiscipline = {
  __typename?: 'AggregateHorseDiscipline';
  _count?: Maybe<HorseDisciplineCountAggregateOutputType>;
  _max?: Maybe<HorseDisciplineMaxAggregateOutputType>;
  _min?: Maybe<HorseDisciplineMinAggregateOutputType>;
};

export type AggregateHorseGender = {
  __typename?: 'AggregateHorseGender';
  _count?: Maybe<HorseGenderCountAggregateOutputType>;
  _max?: Maybe<HorseGenderMaxAggregateOutputType>;
  _min?: Maybe<HorseGenderMinAggregateOutputType>;
};

export type AggregateNotification = {
  __typename?: 'AggregateNotification';
  _count?: Maybe<NotificationCountAggregateOutputType>;
  _max?: Maybe<NotificationMaxAggregateOutputType>;
  _min?: Maybe<NotificationMinAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
};

export type AggregateUserFavoriteHorses = {
  __typename?: 'AggregateUserFavoriteHorses';
  _count?: Maybe<UserFavoriteHorsesCountAggregateOutputType>;
  _max?: Maybe<UserFavoriteHorsesMaxAggregateOutputType>;
  _min?: Maybe<UserFavoriteHorsesMinAggregateOutputType>;
};

export type AggregateUserReview = {
  __typename?: 'AggregateUserReview';
  _avg?: Maybe<UserReviewAvgAggregateOutputType>;
  _count?: Maybe<UserReviewCountAggregateOutputType>;
  _max?: Maybe<UserReviewMaxAggregateOutputType>;
  _min?: Maybe<UserReviewMinAggregateOutputType>;
  _sum?: Maybe<UserReviewSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int']['output'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type CreateManyHorseAndReturnOutputType = {
  __typename?: 'CreateManyHorseAndReturnOutputType';
  age: Scalars['Int']['output'];
  category: HorseCategory;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  discipline: HorseDiscipline;
  disciplineId: Scalars['String']['output'];
  gender: HorseGender;
  genderId: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pedigree?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  status: HorseStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userUid: Scalars['String']['output'];
  vetReport?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
  xrayResults?: Maybe<Scalars['String']['output']>;
};

export type CreateManyHorseCategoryAndReturnOutputType = {
  __typename?: 'CreateManyHorseCategoryAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyHorseDisciplineAndReturnOutputType = {
  __typename?: 'CreateManyHorseDisciplineAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyHorseGenderAndReturnOutputType = {
  __typename?: 'CreateManyHorseGenderAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyNotificationAndReturnOutputType = {
  __typename?: 'CreateManyNotificationAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userUid: Scalars['String']['output'];
};

export type CreateManyUserAndReturnOutputType = {
  __typename?: 'CreateManyUserAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verifiedSeller: Scalars['Boolean']['output'];
  whatsAppNumber?: Maybe<Scalars['String']['output']>;
};

export type CreateManyUserFavoriteHorsesAndReturnOutputType = {
  __typename?: 'CreateManyUserFavoriteHorsesAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  horse: Horse;
  horseId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  user: User;
  userUid: Scalars['String']['output'];
};

export type CreateManyUserReviewAndReturnOutputType = {
  __typename?: 'CreateManyUserReviewAndReturnOutputType';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  reviewer: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userUid: Scalars['String']['output'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type EnumHorseStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<HorseStatus>;
};

export type EnumHorseStatusFilter = {
  equals?: InputMaybe<HorseStatus>;
  in?: InputMaybe<Array<InputMaybe<HorseStatus>>>;
  not?: InputMaybe<NestedEnumHorseStatusFilter>;
  notIn?: InputMaybe<Array<InputMaybe<HorseStatus>>>;
};

export type EnumHorseStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumHorseStatusFilter>;
  _min?: InputMaybe<NestedEnumHorseStatusFilter>;
  equals?: InputMaybe<HorseStatus>;
  in?: InputMaybe<Array<InputMaybe<HorseStatus>>>;
  not?: InputMaybe<NestedEnumHorseStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<HorseStatus>>>;
};

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<InputMaybe<UserRole>>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRole>>>;
};

export type EnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<InputMaybe<UserRole>>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRole>>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type Horse = {
  __typename?: 'Horse';
  _count: HorseCountOutputType;
  age: Scalars['Int']['output'];
  category: HorseCategory;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  discipline: HorseDiscipline;
  disciplineId: Scalars['String']['output'];
  favoriteByUsers: Array<UserFavoriteHorses>;
  gender: HorseGender;
  genderId: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pedigree?: Maybe<Scalars['String']['output']>;
  photos: Array<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  status: HorseStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userUid: Scalars['String']['output'];
  vetReport?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
  xrayResults?: Maybe<Scalars['String']['output']>;
};


export type HorseFavoriteByUsersArgs = {
  cursor?: InputMaybe<UserFavoriteHorsesWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFavoriteHorsesWhereInput>;
};

export type HorseAvgAggregateOutputType = {
  __typename?: 'HorseAvgAggregateOutputType';
  age?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type HorseAvgOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type HorseCategory = {
  __typename?: 'HorseCategory';
  _count: HorseCategoryCountOutputType;
  createdAt: Scalars['DateTime']['output'];
  horses: Array<Horse>;
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type HorseCategoryHorsesArgs = {
  cursor?: InputMaybe<HorseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<HorseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<HorseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HorseWhereInput>;
};

export type HorseCategoryCountAggregateOutputType = {
  __typename?: 'HorseCategoryCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imageUrl: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type HorseCategoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseCategoryCountOutputType = {
  __typename?: 'HorseCategoryCountOutputType';
  horses: Scalars['Int']['output'];
};

export type HorseCategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horses?: InputMaybe<HorseCreateNestedManyWithoutCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseCategoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseCategoryCreateNestedOneWithoutHorsesInput = {
  connect?: InputMaybe<HorseCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HorseCategoryCreateOrConnectWithoutHorsesInput>;
  create?: InputMaybe<HorseCategoryCreateWithoutHorsesInput>;
};

export type HorseCategoryCreateOrConnectWithoutHorsesInput = {
  create: HorseCategoryCreateWithoutHorsesInput;
  where: HorseCategoryWhereUniqueInput;
};

export type HorseCategoryCreateWithoutHorsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseCategoryGroupByOutputType = {
  __typename?: 'HorseCategoryGroupByOutputType';
  _count?: Maybe<HorseCategoryCountAggregateOutputType>;
  _max?: Maybe<HorseCategoryMaxAggregateOutputType>;
  _min?: Maybe<HorseCategoryMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type HorseCategoryMaxAggregateOutputType = {
  __typename?: 'HorseCategoryMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HorseCategoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseCategoryMinAggregateOutputType = {
  __typename?: 'HorseCategoryMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HorseCategoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<HorseCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<HorseCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<HorseCategoryMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseCategoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  horses?: InputMaybe<HorseOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum HorseCategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ImageUrl = 'imageUrl',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type HorseCategoryScalarRelationFilter = {
  is?: InputMaybe<HorseCategoryWhereInput>;
  isNot?: InputMaybe<HorseCategoryWhereInput>;
};

export type HorseCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseCategoryScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseCategoryScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseCategoryScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  imageUrl?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type HorseCategoryUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horses?: InputMaybe<HorseUncheckedCreateNestedManyWithoutCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseCategoryUncheckedCreateWithoutHorsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseCategoryUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUncheckedUpdateManyWithoutCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseCategoryUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseCategoryUncheckedUpdateWithoutHorsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseCategoryUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUpdateManyWithoutCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseCategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput = {
  connect?: InputMaybe<HorseCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HorseCategoryCreateOrConnectWithoutHorsesInput>;
  create?: InputMaybe<HorseCategoryCreateWithoutHorsesInput>;
  update?: InputMaybe<HorseCategoryUpdateToOneWithWhereWithoutHorsesInput>;
  upsert?: InputMaybe<HorseCategoryUpsertWithoutHorsesInput>;
};

export type HorseCategoryUpdateToOneWithWhereWithoutHorsesInput = {
  data: HorseCategoryUpdateWithoutHorsesInput;
  where?: InputMaybe<HorseCategoryWhereInput>;
};

export type HorseCategoryUpdateWithoutHorsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseCategoryUpsertWithoutHorsesInput = {
  create: HorseCategoryCreateWithoutHorsesInput;
  update: HorseCategoryUpdateWithoutHorsesInput;
  where?: InputMaybe<HorseCategoryWhereInput>;
};

export type HorseCategoryWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseCategoryWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseCategoryWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseCategoryWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  horses?: InputMaybe<HorseListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HorseCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseCategoryWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseCategoryWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseCategoryWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  horses?: InputMaybe<HorseListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HorseCountAggregateOutputType = {
  __typename?: 'HorseCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  age: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  disciplineId: Scalars['Int']['output'];
  genderId: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  pedigree: Scalars['Int']['output'];
  photos: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userUid: Scalars['Int']['output'];
  vetReport: Scalars['Int']['output'];
  videoUrl: Scalars['Int']['output'];
  xrayResults: Scalars['Int']['output'];
};

export type HorseCountOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  disciplineId?: InputMaybe<SortOrder>;
  genderId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pedigree?: InputMaybe<SortOrder>;
  photos?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
  vetReport?: InputMaybe<SortOrder>;
  videoUrl?: InputMaybe<SortOrder>;
  xrayResults?: InputMaybe<SortOrder>;
};

export type HorseCountOutputType = {
  __typename?: 'HorseCountOutputType';
  favoriteByUsers: Scalars['Int']['output'];
};

export type HorseCreateInput = {
  age: Scalars['Int']['input'];
  category: HorseCategoryCreateNestedOneWithoutHorsesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesCreateNestedManyWithoutHorseInput>;
  gender: HorseGenderCreateNestedOneWithoutHorsesInput;
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutHorsesInput;
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreateManyCategoryInput = {
  age: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  disciplineId: Scalars['String']['input'];
  genderId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreateManyCategoryInputEnvelope = {
  data: HorseCreateManyCategoryInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HorseCreateManyDisciplineInput = {
  age: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  genderId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreateManyDisciplineInputEnvelope = {
  data: HorseCreateManyDisciplineInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HorseCreateManyGenderInput = {
  age: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  disciplineId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreateManyGenderInputEnvelope = {
  data: HorseCreateManyGenderInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HorseCreateManyInput = {
  age: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  disciplineId: Scalars['String']['input'];
  genderId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreateManyUserInput = {
  age: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  disciplineId: Scalars['String']['input'];
  genderId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreateManyUserInputEnvelope = {
  data: HorseCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HorseCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutCategoryInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutCategoryInput>>>;
  createMany?: InputMaybe<HorseCreateManyCategoryInputEnvelope>;
};

export type HorseCreateNestedManyWithoutDisciplineInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutDisciplineInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutDisciplineInput>>>;
  createMany?: InputMaybe<HorseCreateManyDisciplineInputEnvelope>;
};

export type HorseCreateNestedManyWithoutGenderInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutGenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutGenderInput>>>;
  createMany?: InputMaybe<HorseCreateManyGenderInputEnvelope>;
};

export type HorseCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<HorseCreateManyUserInputEnvelope>;
};

export type HorseCreateNestedOneWithoutFavoriteByUsersInput = {
  connect?: InputMaybe<HorseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HorseCreateOrConnectWithoutFavoriteByUsersInput>;
  create?: InputMaybe<HorseCreateWithoutFavoriteByUsersInput>;
};

export type HorseCreateOrConnectWithoutCategoryInput = {
  create: HorseCreateWithoutCategoryInput;
  where: HorseWhereUniqueInput;
};

export type HorseCreateOrConnectWithoutDisciplineInput = {
  create: HorseCreateWithoutDisciplineInput;
  where: HorseWhereUniqueInput;
};

export type HorseCreateOrConnectWithoutFavoriteByUsersInput = {
  create: HorseCreateWithoutFavoriteByUsersInput;
  where: HorseWhereUniqueInput;
};

export type HorseCreateOrConnectWithoutGenderInput = {
  create: HorseCreateWithoutGenderInput;
  where: HorseWhereUniqueInput;
};

export type HorseCreateOrConnectWithoutUserInput = {
  create: HorseCreateWithoutUserInput;
  where: HorseWhereUniqueInput;
};

export type HorseCreateWithoutCategoryInput = {
  age: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesCreateNestedManyWithoutHorseInput>;
  gender: HorseGenderCreateNestedOneWithoutHorsesInput;
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutHorsesInput;
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreateWithoutDisciplineInput = {
  age: Scalars['Int']['input'];
  category: HorseCategoryCreateNestedOneWithoutHorsesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesCreateNestedManyWithoutHorseInput>;
  gender: HorseGenderCreateNestedOneWithoutHorsesInput;
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutHorsesInput;
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreateWithoutFavoriteByUsersInput = {
  age: Scalars['Int']['input'];
  category: HorseCategoryCreateNestedOneWithoutHorsesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput;
  gender: HorseGenderCreateNestedOneWithoutHorsesInput;
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutHorsesInput;
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreateWithoutGenderInput = {
  age: Scalars['Int']['input'];
  category: HorseCategoryCreateNestedOneWithoutHorsesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesCreateNestedManyWithoutHorseInput>;
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutHorsesInput;
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreateWithoutUserInput = {
  age: Scalars['Int']['input'];
  category: HorseCategoryCreateNestedOneWithoutHorsesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  discipline: HorseDisciplineCreateNestedOneWithoutHorsesInput;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesCreateNestedManyWithoutHorseInput>;
  gender: HorseGenderCreateNestedOneWithoutHorsesInput;
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseCreatephotosInput = {
  set: Scalars['String']['input'];
};

export type HorseDiscipline = {
  __typename?: 'HorseDiscipline';
  _count: HorseDisciplineCountOutputType;
  createdAt: Scalars['DateTime']['output'];
  horses: Array<Horse>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type HorseDisciplineHorsesArgs = {
  cursor?: InputMaybe<HorseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<HorseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<HorseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HorseWhereInput>;
};

export type HorseDisciplineCountAggregateOutputType = {
  __typename?: 'HorseDisciplineCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type HorseDisciplineCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseDisciplineCountOutputType = {
  __typename?: 'HorseDisciplineCountOutputType';
  horses: Scalars['Int']['output'];
};

export type HorseDisciplineCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horses?: InputMaybe<HorseCreateNestedManyWithoutDisciplineInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseDisciplineCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseDisciplineCreateNestedOneWithoutHorsesInput = {
  connect?: InputMaybe<HorseDisciplineWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HorseDisciplineCreateOrConnectWithoutHorsesInput>;
  create?: InputMaybe<HorseDisciplineCreateWithoutHorsesInput>;
};

export type HorseDisciplineCreateOrConnectWithoutHorsesInput = {
  create: HorseDisciplineCreateWithoutHorsesInput;
  where: HorseDisciplineWhereUniqueInput;
};

export type HorseDisciplineCreateWithoutHorsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseDisciplineGroupByOutputType = {
  __typename?: 'HorseDisciplineGroupByOutputType';
  _count?: Maybe<HorseDisciplineCountAggregateOutputType>;
  _max?: Maybe<HorseDisciplineMaxAggregateOutputType>;
  _min?: Maybe<HorseDisciplineMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type HorseDisciplineMaxAggregateOutputType = {
  __typename?: 'HorseDisciplineMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HorseDisciplineMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseDisciplineMinAggregateOutputType = {
  __typename?: 'HorseDisciplineMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HorseDisciplineMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseDisciplineOrderByWithAggregationInput = {
  _count?: InputMaybe<HorseDisciplineCountOrderByAggregateInput>;
  _max?: InputMaybe<HorseDisciplineMaxOrderByAggregateInput>;
  _min?: InputMaybe<HorseDisciplineMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseDisciplineOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  horses?: InputMaybe<HorseOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum HorseDisciplineScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type HorseDisciplineScalarRelationFilter = {
  is?: InputMaybe<HorseDisciplineWhereInput>;
  isNot?: InputMaybe<HorseDisciplineWhereInput>;
};

export type HorseDisciplineScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseDisciplineScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseDisciplineScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseDisciplineScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type HorseDisciplineUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horses?: InputMaybe<HorseUncheckedCreateNestedManyWithoutDisciplineInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseDisciplineUncheckedCreateWithoutHorsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseDisciplineUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUncheckedUpdateManyWithoutDisciplineNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseDisciplineUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseDisciplineUncheckedUpdateWithoutHorsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseDisciplineUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUpdateManyWithoutDisciplineNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseDisciplineUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput = {
  connect?: InputMaybe<HorseDisciplineWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HorseDisciplineCreateOrConnectWithoutHorsesInput>;
  create?: InputMaybe<HorseDisciplineCreateWithoutHorsesInput>;
  update?: InputMaybe<HorseDisciplineUpdateToOneWithWhereWithoutHorsesInput>;
  upsert?: InputMaybe<HorseDisciplineUpsertWithoutHorsesInput>;
};

export type HorseDisciplineUpdateToOneWithWhereWithoutHorsesInput = {
  data: HorseDisciplineUpdateWithoutHorsesInput;
  where?: InputMaybe<HorseDisciplineWhereInput>;
};

export type HorseDisciplineUpdateWithoutHorsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseDisciplineUpsertWithoutHorsesInput = {
  create: HorseDisciplineCreateWithoutHorsesInput;
  update: HorseDisciplineUpdateWithoutHorsesInput;
  where?: InputMaybe<HorseDisciplineWhereInput>;
};

export type HorseDisciplineWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseDisciplineWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseDisciplineWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseDisciplineWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  horses?: InputMaybe<HorseListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HorseDisciplineWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseDisciplineWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseDisciplineWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseDisciplineWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  horses?: InputMaybe<HorseListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HorseGender = {
  __typename?: 'HorseGender';
  _count: HorseGenderCountOutputType;
  createdAt: Scalars['DateTime']['output'];
  horses: Array<Horse>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type HorseGenderHorsesArgs = {
  cursor?: InputMaybe<HorseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<HorseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<HorseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HorseWhereInput>;
};

export type HorseGenderCountAggregateOutputType = {
  __typename?: 'HorseGenderCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type HorseGenderCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseGenderCountOutputType = {
  __typename?: 'HorseGenderCountOutputType';
  horses: Scalars['Int']['output'];
};

export type HorseGenderCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horses?: InputMaybe<HorseCreateNestedManyWithoutGenderInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseGenderCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseGenderCreateNestedOneWithoutHorsesInput = {
  connect?: InputMaybe<HorseGenderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HorseGenderCreateOrConnectWithoutHorsesInput>;
  create?: InputMaybe<HorseGenderCreateWithoutHorsesInput>;
};

export type HorseGenderCreateOrConnectWithoutHorsesInput = {
  create: HorseGenderCreateWithoutHorsesInput;
  where: HorseGenderWhereUniqueInput;
};

export type HorseGenderCreateWithoutHorsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseGenderGroupByOutputType = {
  __typename?: 'HorseGenderGroupByOutputType';
  _count?: Maybe<HorseGenderCountAggregateOutputType>;
  _max?: Maybe<HorseGenderMaxAggregateOutputType>;
  _min?: Maybe<HorseGenderMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type HorseGenderMaxAggregateOutputType = {
  __typename?: 'HorseGenderMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HorseGenderMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseGenderMinAggregateOutputType = {
  __typename?: 'HorseGenderMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HorseGenderMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseGenderOrderByWithAggregationInput = {
  _count?: InputMaybe<HorseGenderCountOrderByAggregateInput>;
  _max?: InputMaybe<HorseGenderMaxOrderByAggregateInput>;
  _min?: InputMaybe<HorseGenderMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HorseGenderOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  horses?: InputMaybe<HorseOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum HorseGenderScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type HorseGenderScalarRelationFilter = {
  is?: InputMaybe<HorseGenderWhereInput>;
  isNot?: InputMaybe<HorseGenderWhereInput>;
};

export type HorseGenderScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseGenderScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseGenderScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseGenderScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type HorseGenderUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horses?: InputMaybe<HorseUncheckedCreateNestedManyWithoutGenderInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseGenderUncheckedCreateWithoutHorsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HorseGenderUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUncheckedUpdateManyWithoutGenderNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseGenderUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseGenderUncheckedUpdateWithoutHorsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseGenderUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUpdateManyWithoutGenderNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseGenderUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseGenderUpdateOneRequiredWithoutHorsesNestedInput = {
  connect?: InputMaybe<HorseGenderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HorseGenderCreateOrConnectWithoutHorsesInput>;
  create?: InputMaybe<HorseGenderCreateWithoutHorsesInput>;
  update?: InputMaybe<HorseGenderUpdateToOneWithWhereWithoutHorsesInput>;
  upsert?: InputMaybe<HorseGenderUpsertWithoutHorsesInput>;
};

export type HorseGenderUpdateToOneWithWhereWithoutHorsesInput = {
  data: HorseGenderUpdateWithoutHorsesInput;
  where?: InputMaybe<HorseGenderWhereInput>;
};

export type HorseGenderUpdateWithoutHorsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HorseGenderUpsertWithoutHorsesInput = {
  create: HorseGenderCreateWithoutHorsesInput;
  update: HorseGenderUpdateWithoutHorsesInput;
  where?: InputMaybe<HorseGenderWhereInput>;
};

export type HorseGenderWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseGenderWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseGenderWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseGenderWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  horses?: InputMaybe<HorseListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HorseGenderWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseGenderWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseGenderWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseGenderWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  horses?: InputMaybe<HorseListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HorseGroupByOutputType = {
  __typename?: 'HorseGroupByOutputType';
  _avg?: Maybe<HorseAvgAggregateOutputType>;
  _count?: Maybe<HorseCountAggregateOutputType>;
  _max?: Maybe<HorseMaxAggregateOutputType>;
  _min?: Maybe<HorseMinAggregateOutputType>;
  _sum?: Maybe<HorseSumAggregateOutputType>;
  age: Scalars['Int']['output'];
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  disciplineId: Scalars['String']['output'];
  genderId: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pedigree?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  status: HorseStatus;
  updatedAt: Scalars['DateTime']['output'];
  userUid: Scalars['String']['output'];
  vetReport?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
  xrayResults?: Maybe<Scalars['String']['output']>;
};

export type HorseListRelationFilter = {
  every?: InputMaybe<HorseWhereInput>;
  none?: InputMaybe<HorseWhereInput>;
  some?: InputMaybe<HorseWhereInput>;
};

export type HorseMaxAggregateOutputType = {
  __typename?: 'HorseMaxAggregateOutputType';
  age?: Maybe<Scalars['Int']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  disciplineId?: Maybe<Scalars['String']['output']>;
  genderId?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pedigree?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<HorseStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userUid?: Maybe<Scalars['String']['output']>;
  vetReport?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
  xrayResults?: Maybe<Scalars['String']['output']>;
};

export type HorseMaxOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  disciplineId?: InputMaybe<SortOrder>;
  genderId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pedigree?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
  vetReport?: InputMaybe<SortOrder>;
  videoUrl?: InputMaybe<SortOrder>;
  xrayResults?: InputMaybe<SortOrder>;
};

export type HorseMinAggregateOutputType = {
  __typename?: 'HorseMinAggregateOutputType';
  age?: Maybe<Scalars['Int']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  disciplineId?: Maybe<Scalars['String']['output']>;
  genderId?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pedigree?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<HorseStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userUid?: Maybe<Scalars['String']['output']>;
  vetReport?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
  xrayResults?: Maybe<Scalars['String']['output']>;
};

export type HorseMinOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  disciplineId?: InputMaybe<SortOrder>;
  genderId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pedigree?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
  vetReport?: InputMaybe<SortOrder>;
  videoUrl?: InputMaybe<SortOrder>;
  xrayResults?: InputMaybe<SortOrder>;
};

export type HorseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type HorseOrderByWithAggregationInput = {
  _avg?: InputMaybe<HorseAvgOrderByAggregateInput>;
  _count?: InputMaybe<HorseCountOrderByAggregateInput>;
  _max?: InputMaybe<HorseMaxOrderByAggregateInput>;
  _min?: InputMaybe<HorseMinOrderByAggregateInput>;
  _sum?: InputMaybe<HorseSumOrderByAggregateInput>;
  age?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  disciplineId?: InputMaybe<SortOrder>;
  genderId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pedigree?: InputMaybe<SortOrderInput>;
  photos?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
  vetReport?: InputMaybe<SortOrderInput>;
  videoUrl?: InputMaybe<SortOrderInput>;
  xrayResults?: InputMaybe<SortOrderInput>;
};

export type HorseOrderByWithRelationInput = {
  age?: InputMaybe<SortOrder>;
  category?: InputMaybe<HorseCategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  discipline?: InputMaybe<HorseDisciplineOrderByWithRelationInput>;
  disciplineId?: InputMaybe<SortOrder>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesOrderByRelationAggregateInput>;
  gender?: InputMaybe<HorseGenderOrderByWithRelationInput>;
  genderId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pedigree?: InputMaybe<SortOrderInput>;
  photos?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userUid?: InputMaybe<SortOrder>;
  vetReport?: InputMaybe<SortOrderInput>;
  videoUrl?: InputMaybe<SortOrderInput>;
  xrayResults?: InputMaybe<SortOrderInput>;
};

export enum HorseScalarFieldEnum {
  Age = 'age',
  CategoryId = 'categoryId',
  CreatedAt = 'createdAt',
  Description = 'description',
  DisciplineId = 'disciplineId',
  GenderId = 'genderId',
  Height = 'height',
  Id = 'id',
  Location = 'location',
  Name = 'name',
  Pedigree = 'pedigree',
  Photos = 'photos',
  Price = 'price',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UserUid = 'userUid',
  VetReport = 'vetReport',
  VideoUrl = 'videoUrl',
  XrayResults = 'xrayResults'
}

export type HorseScalarRelationFilter = {
  is?: InputMaybe<HorseWhereInput>;
  isNot?: InputMaybe<HorseWhereInput>;
};

export type HorseScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  age?: InputMaybe<IntFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  disciplineId?: InputMaybe<StringFilter>;
  genderId?: InputMaybe<StringFilter>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  pedigree?: InputMaybe<StringNullableFilter>;
  photos?: InputMaybe<StringNullableListFilter>;
  price?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumHorseStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userUid?: InputMaybe<StringFilter>;
  vetReport?: InputMaybe<StringNullableFilter>;
  videoUrl?: InputMaybe<StringNullableFilter>;
  xrayResults?: InputMaybe<StringNullableFilter>;
};

export type HorseScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseScalarWhereWithAggregatesInput>>>;
  age?: InputMaybe<IntWithAggregatesFilter>;
  categoryId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  disciplineId?: InputMaybe<StringWithAggregatesFilter>;
  genderId?: InputMaybe<StringWithAggregatesFilter>;
  height?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  location?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  pedigree?: InputMaybe<StringNullableWithAggregatesFilter>;
  photos?: InputMaybe<StringNullableListFilter>;
  price?: InputMaybe<FloatWithAggregatesFilter>;
  status?: InputMaybe<EnumHorseStatusWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userUid?: InputMaybe<StringWithAggregatesFilter>;
  vetReport?: InputMaybe<StringNullableWithAggregatesFilter>;
  videoUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  xrayResults?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export enum HorseStatus {
  Accepted = 'ACCEPTED',
  Approved = 'APPROVED',
  Sold = 'SOLD',
  Submitted = 'SUBMITTED'
}

export type HorseSumAggregateOutputType = {
  __typename?: 'HorseSumAggregateOutputType';
  age?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type HorseSumOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type HorseUncheckedCreateInput = {
  age: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  disciplineId: Scalars['String']['input'];
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput>;
  genderId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseUncheckedCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutCategoryInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutCategoryInput>>>;
  createMany?: InputMaybe<HorseCreateManyCategoryInputEnvelope>;
};

export type HorseUncheckedCreateNestedManyWithoutDisciplineInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutDisciplineInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutDisciplineInput>>>;
  createMany?: InputMaybe<HorseCreateManyDisciplineInputEnvelope>;
};

export type HorseUncheckedCreateNestedManyWithoutGenderInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutGenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutGenderInput>>>;
  createMany?: InputMaybe<HorseCreateManyGenderInputEnvelope>;
};

export type HorseUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<HorseCreateManyUserInputEnvelope>;
};

export type HorseUncheckedCreateWithoutCategoryInput = {
  age: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  disciplineId: Scalars['String']['input'];
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput>;
  genderId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseUncheckedCreateWithoutDisciplineInput = {
  age: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput>;
  genderId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseUncheckedCreateWithoutFavoriteByUsersInput = {
  age: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  disciplineId: Scalars['String']['input'];
  genderId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseUncheckedCreateWithoutGenderInput = {
  age: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  disciplineId: Scalars['String']['input'];
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput>;
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseUncheckedCreateWithoutUserInput = {
  age: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  disciplineId: Scalars['String']['input'];
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput>;
  genderId: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pedigree?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<HorseStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vetReport?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  xrayResults?: InputMaybe<Scalars['String']['input']>;
};

export type HorseUncheckedUpdateInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  categoryId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  disciplineId?: InputMaybe<StringFieldUpdateOperationsInput>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput>;
  genderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUncheckedUpdateManyInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  categoryId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  disciplineId?: InputMaybe<StringFieldUpdateOperationsInput>;
  genderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUncheckedUpdateManyWithoutCategoryInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  disciplineId?: InputMaybe<StringFieldUpdateOperationsInput>;
  genderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUncheckedUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutCategoryInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutCategoryInput>>>;
  createMany?: InputMaybe<HorseCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<HorseUpdateWithWhereUniqueWithoutCategoryInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<HorseUpdateManyWithWhereWithoutCategoryInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<HorseUpsertWithWhereUniqueWithoutCategoryInput>>>;
};

export type HorseUncheckedUpdateManyWithoutDisciplineInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  categoryId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUncheckedUpdateManyWithoutDisciplineNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutDisciplineInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutDisciplineInput>>>;
  createMany?: InputMaybe<HorseCreateManyDisciplineInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<HorseUpdateWithWhereUniqueWithoutDisciplineInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<HorseUpdateManyWithWhereWithoutDisciplineInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<HorseUpsertWithWhereUniqueWithoutDisciplineInput>>>;
};

export type HorseUncheckedUpdateManyWithoutGenderInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  categoryId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  disciplineId?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUncheckedUpdateManyWithoutGenderNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutGenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutGenderInput>>>;
  createMany?: InputMaybe<HorseCreateManyGenderInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<HorseUpdateWithWhereUniqueWithoutGenderInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<HorseUpdateManyWithWhereWithoutGenderInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<HorseUpsertWithWhereUniqueWithoutGenderInput>>>;
};

export type HorseUncheckedUpdateManyWithoutUserInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  categoryId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  disciplineId?: InputMaybe<StringFieldUpdateOperationsInput>;
  genderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<HorseCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<HorseUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<HorseUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<HorseUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type HorseUncheckedUpdateWithoutCategoryInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  disciplineId?: InputMaybe<StringFieldUpdateOperationsInput>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput>;
  genderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUncheckedUpdateWithoutDisciplineInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  categoryId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput>;
  genderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUncheckedUpdateWithoutFavoriteByUsersInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  categoryId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  disciplineId?: InputMaybe<StringFieldUpdateOperationsInput>;
  genderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUncheckedUpdateWithoutGenderInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  categoryId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  disciplineId?: InputMaybe<StringFieldUpdateOperationsInput>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUncheckedUpdateWithoutUserInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  categoryId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  disciplineId?: InputMaybe<StringFieldUpdateOperationsInput>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput>;
  genderId?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUpdateInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  category?: InputMaybe<HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  discipline?: InputMaybe<HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUpdateManyWithoutHorseNestedInput>;
  gender?: InputMaybe<HorseGenderUpdateOneRequiredWithoutHorsesNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutHorsesNestedInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUpdateManyMutationInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUpdateManyWithWhereWithoutCategoryInput = {
  data: HorseUpdateManyMutationInput;
  where: HorseScalarWhereInput;
};

export type HorseUpdateManyWithWhereWithoutDisciplineInput = {
  data: HorseUpdateManyMutationInput;
  where: HorseScalarWhereInput;
};

export type HorseUpdateManyWithWhereWithoutGenderInput = {
  data: HorseUpdateManyMutationInput;
  where: HorseScalarWhereInput;
};

export type HorseUpdateManyWithWhereWithoutUserInput = {
  data: HorseUpdateManyMutationInput;
  where: HorseScalarWhereInput;
};

export type HorseUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutCategoryInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutCategoryInput>>>;
  createMany?: InputMaybe<HorseCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<HorseUpdateWithWhereUniqueWithoutCategoryInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<HorseUpdateManyWithWhereWithoutCategoryInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<HorseUpsertWithWhereUniqueWithoutCategoryInput>>>;
};

export type HorseUpdateManyWithoutDisciplineNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutDisciplineInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutDisciplineInput>>>;
  createMany?: InputMaybe<HorseCreateManyDisciplineInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<HorseUpdateWithWhereUniqueWithoutDisciplineInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<HorseUpdateManyWithWhereWithoutDisciplineInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<HorseUpsertWithWhereUniqueWithoutDisciplineInput>>>;
};

export type HorseUpdateManyWithoutGenderNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutGenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutGenderInput>>>;
  createMany?: InputMaybe<HorseCreateManyGenderInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<HorseUpdateWithWhereUniqueWithoutGenderInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<HorseUpdateManyWithWhereWithoutGenderInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<HorseUpsertWithWhereUniqueWithoutGenderInput>>>;
};

export type HorseUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<HorseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<HorseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<HorseCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<HorseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<HorseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<HorseUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<HorseUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<HorseUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type HorseUpdateOneRequiredWithoutFavoriteByUsersNestedInput = {
  connect?: InputMaybe<HorseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HorseCreateOrConnectWithoutFavoriteByUsersInput>;
  create?: InputMaybe<HorseCreateWithoutFavoriteByUsersInput>;
  update?: InputMaybe<HorseUpdateToOneWithWhereWithoutFavoriteByUsersInput>;
  upsert?: InputMaybe<HorseUpsertWithoutFavoriteByUsersInput>;
};

export type HorseUpdateToOneWithWhereWithoutFavoriteByUsersInput = {
  data: HorseUpdateWithoutFavoriteByUsersInput;
  where?: InputMaybe<HorseWhereInput>;
};

export type HorseUpdateWithWhereUniqueWithoutCategoryInput = {
  data: HorseUpdateWithoutCategoryInput;
  where: HorseWhereUniqueInput;
};

export type HorseUpdateWithWhereUniqueWithoutDisciplineInput = {
  data: HorseUpdateWithoutDisciplineInput;
  where: HorseWhereUniqueInput;
};

export type HorseUpdateWithWhereUniqueWithoutGenderInput = {
  data: HorseUpdateWithoutGenderInput;
  where: HorseWhereUniqueInput;
};

export type HorseUpdateWithWhereUniqueWithoutUserInput = {
  data: HorseUpdateWithoutUserInput;
  where: HorseWhereUniqueInput;
};

export type HorseUpdateWithoutCategoryInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  discipline?: InputMaybe<HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUpdateManyWithoutHorseNestedInput>;
  gender?: InputMaybe<HorseGenderUpdateOneRequiredWithoutHorsesNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutHorsesNestedInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUpdateWithoutDisciplineInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  category?: InputMaybe<HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUpdateManyWithoutHorseNestedInput>;
  gender?: InputMaybe<HorseGenderUpdateOneRequiredWithoutHorsesNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutHorsesNestedInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUpdateWithoutFavoriteByUsersInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  category?: InputMaybe<HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  discipline?: InputMaybe<HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput>;
  gender?: InputMaybe<HorseGenderUpdateOneRequiredWithoutHorsesNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutHorsesNestedInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUpdateWithoutGenderInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  category?: InputMaybe<HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  discipline?: InputMaybe<HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUpdateManyWithoutHorseNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutHorsesNestedInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUpdateWithoutUserInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  category?: InputMaybe<HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  discipline?: InputMaybe<HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesUpdateManyWithoutHorseNestedInput>;
  gender?: InputMaybe<HorseGenderUpdateOneRequiredWithoutHorsesNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pedigree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumHorseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vetReport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  videoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  xrayResults?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type HorseUpdatephotosInput = {
  push?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HorseUpsertWithWhereUniqueWithoutCategoryInput = {
  create: HorseCreateWithoutCategoryInput;
  update: HorseUpdateWithoutCategoryInput;
  where: HorseWhereUniqueInput;
};

export type HorseUpsertWithWhereUniqueWithoutDisciplineInput = {
  create: HorseCreateWithoutDisciplineInput;
  update: HorseUpdateWithoutDisciplineInput;
  where: HorseWhereUniqueInput;
};

export type HorseUpsertWithWhereUniqueWithoutGenderInput = {
  create: HorseCreateWithoutGenderInput;
  update: HorseUpdateWithoutGenderInput;
  where: HorseWhereUniqueInput;
};

export type HorseUpsertWithWhereUniqueWithoutUserInput = {
  create: HorseCreateWithoutUserInput;
  update: HorseUpdateWithoutUserInput;
  where: HorseWhereUniqueInput;
};

export type HorseUpsertWithoutFavoriteByUsersInput = {
  create: HorseCreateWithoutFavoriteByUsersInput;
  update: HorseUpdateWithoutFavoriteByUsersInput;
  where?: InputMaybe<HorseWhereInput>;
};

export type HorseWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseWhereInput>>>;
  age?: InputMaybe<IntFilter>;
  category?: InputMaybe<HorseCategoryScalarRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  discipline?: InputMaybe<HorseDisciplineScalarRelationFilter>;
  disciplineId?: InputMaybe<StringFilter>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesListRelationFilter>;
  gender?: InputMaybe<HorseGenderScalarRelationFilter>;
  genderId?: InputMaybe<StringFilter>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  pedigree?: InputMaybe<StringNullableFilter>;
  photos?: InputMaybe<StringNullableListFilter>;
  price?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumHorseStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userUid?: InputMaybe<StringFilter>;
  vetReport?: InputMaybe<StringNullableFilter>;
  videoUrl?: InputMaybe<StringNullableFilter>;
  xrayResults?: InputMaybe<StringNullableFilter>;
};

export type HorseWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<HorseWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<HorseWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<HorseWhereInput>>>;
  age?: InputMaybe<IntFilter>;
  category?: InputMaybe<HorseCategoryScalarRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  discipline?: InputMaybe<HorseDisciplineScalarRelationFilter>;
  disciplineId?: InputMaybe<StringFilter>;
  favoriteByUsers?: InputMaybe<UserFavoriteHorsesListRelationFilter>;
  gender?: InputMaybe<HorseGenderScalarRelationFilter>;
  genderId?: InputMaybe<StringFilter>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  pedigree?: InputMaybe<StringNullableFilter>;
  photos?: InputMaybe<StringNullableListFilter>;
  price?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumHorseStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userUid?: InputMaybe<StringFilter>;
  vetReport?: InputMaybe<StringNullableFilter>;
  videoUrl?: InputMaybe<StringNullableFilter>;
  xrayResults?: InputMaybe<StringNullableFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type NestedEnumHorseStatusFilter = {
  equals?: InputMaybe<HorseStatus>;
  in?: InputMaybe<Array<InputMaybe<HorseStatus>>>;
  not?: InputMaybe<NestedEnumHorseStatusFilter>;
  notIn?: InputMaybe<Array<InputMaybe<HorseStatus>>>;
};

export type NestedEnumHorseStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumHorseStatusFilter>;
  _min?: InputMaybe<NestedEnumHorseStatusFilter>;
  equals?: InputMaybe<HorseStatus>;
  in?: InputMaybe<Array<InputMaybe<HorseStatus>>>;
  not?: InputMaybe<NestedEnumHorseStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<HorseStatus>>>;
};

export type NestedEnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<InputMaybe<UserRole>>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRole>>>;
};

export type NestedEnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<InputMaybe<UserRole>>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRole>>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userUid: Scalars['String']['output'];
};

export type NotificationCountAggregateOutputType = {
  __typename?: 'NotificationCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['Int']['output'];
  read: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userUid: Scalars['Int']['output'];
};

export type NotificationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type NotificationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutNotificationsInput;
};

export type NotificationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
};

export type NotificationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NotificationCreateManyUserInputEnvelope = {
  data: NotificationCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<NotificationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<NotificationCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<NotificationCreateWithoutUserInput>>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
};

export type NotificationCreateOrConnectWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NotificationGroupByOutputType = {
  __typename?: 'NotificationGroupByOutputType';
  _count?: Maybe<NotificationCountAggregateOutputType>;
  _max?: Maybe<NotificationMaxAggregateOutputType>;
  _min?: Maybe<NotificationMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userUid: Scalars['String']['output'];
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationMaxAggregateOutputType = {
  __typename?: 'NotificationMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userUid?: Maybe<Scalars['String']['output']>;
};

export type NotificationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type NotificationMinAggregateOutputType = {
  __typename?: 'NotificationMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userUid?: Maybe<Scalars['String']['output']>;
};

export type NotificationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithAggregationInput = {
  _count?: InputMaybe<NotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<NotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<NotificationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userUid?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  Read = 'read',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserUid = 'userUid'
}

export type NotificationScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<NotificationScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<NotificationScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<NotificationScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  read?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userUid?: InputMaybe<StringFilter>;
};

export type NotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<NotificationScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<NotificationScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<NotificationScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  read?: InputMaybe<BoolWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userUid?: InputMaybe<StringWithAggregatesFilter>;
};

export type NotificationUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
};

export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<NotificationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<NotificationCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<NotificationCreateWithoutUserInput>>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
};

export type NotificationUncheckedCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NotificationUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NotificationUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NotificationUncheckedUpdateManyWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<NotificationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<NotificationCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<NotificationCreateWithoutUserInput>>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<NotificationWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<NotificationScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<NotificationWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<NotificationWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<NotificationUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<NotificationUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<NotificationUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type NotificationUncheckedUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsNestedInput>;
};

export type NotificationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyWithWhereWithoutUserInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<NotificationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<NotificationCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<NotificationCreateWithoutUserInput>>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<NotificationWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<NotificationScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<NotificationWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<NotificationWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<NotificationUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<NotificationUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<NotificationUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<NotificationWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<NotificationWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<NotificationWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  read?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userUid?: InputMaybe<StringFilter>;
};

export type NotificationWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<NotificationWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<NotificationWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<NotificationWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<StringFilter>;
  read?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userUid?: InputMaybe<StringFilter>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  aggregateHorse?: Maybe<AggregateHorse>;
  aggregateNotification?: Maybe<AggregateNotification>;
  aggregateUser?: Maybe<AggregateUser>;
  aggregateUserFavoriteHorses?: Maybe<AggregateUserFavoriteHorses>;
  aggregateUserReview?: Maybe<AggregateUserReview>;
  findFirstHorse?: Maybe<Horse>;
  findFirstNotification?: Maybe<Notification>;
  findFirstUser?: Maybe<User>;
  findFirstUserFavoriteHorses?: Maybe<UserFavoriteHorses>;
  findFirstUserReview?: Maybe<UserReview>;
  findManyHorse: Array<Horse>;
  findManyHorseCount: Scalars['Int']['output'];
  findManyNotification: Array<Notification>;
  findManyNotificationCount: Scalars['Int']['output'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int']['output'];
  findManyUserFavoriteHorses: Array<UserFavoriteHorses>;
  findManyUserFavoriteHorsesCount: Scalars['Int']['output'];
  findManyUserReview: Array<UserReview>;
  findManyUserReviewCount: Scalars['Int']['output'];
  findUniqueHorse?: Maybe<Horse>;
  findUniqueNotification?: Maybe<Notification>;
  findUniqueUser?: Maybe<User>;
  findUniqueUserFavoriteHorses?: Maybe<UserFavoriteHorses>;
  findUniqueUserReview?: Maybe<UserReview>;
};


export type QueryAggregateHorseArgs = {
  cursor?: InputMaybe<HorseWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<HorseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HorseWhereInput>;
};


export type QueryAggregateNotificationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserFavoriteHorsesArgs = {
  cursor?: InputMaybe<UserFavoriteHorsesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFavoriteHorsesWhereInput>;
};


export type QueryAggregateUserReviewArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserReviewOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type QueryFindFirstHorseArgs = {
  cursor?: InputMaybe<HorseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<HorseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<HorseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HorseWhereInput>;
};


export type QueryFindFirstNotificationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<NotificationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserFavoriteHorsesArgs = {
  cursor?: InputMaybe<UserFavoriteHorsesWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFavoriteHorsesWhereInput>;
};


export type QueryFindFirstUserReviewArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserReviewScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserReviewOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type QueryFindManyHorseArgs = {
  cursor?: InputMaybe<HorseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<HorseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<HorseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HorseWhereInput>;
};


export type QueryFindManyHorseCountArgs = {
  cursor?: InputMaybe<HorseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<HorseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<HorseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HorseWhereInput>;
};


export type QueryFindManyNotificationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<NotificationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryFindManyNotificationCountArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<NotificationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyUserFavoriteHorsesArgs = {
  cursor?: InputMaybe<UserFavoriteHorsesWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFavoriteHorsesWhereInput>;
};


export type QueryFindManyUserFavoriteHorsesCountArgs = {
  cursor?: InputMaybe<UserFavoriteHorsesWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFavoriteHorsesWhereInput>;
};


export type QueryFindManyUserReviewArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserReviewScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserReviewOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type QueryFindManyUserReviewCountArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserReviewScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserReviewOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type QueryFindUniqueHorseArgs = {
  where: HorseWhereUniqueInput;
};


export type QueryFindUniqueNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindUniqueUserFavoriteHorsesArgs = {
  where: UserFavoriteHorsesWhereUniqueInput;
};


export type QueryFindUniqueUserReviewArgs = {
  where: UserReviewWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hasSome?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum TransactionIsolationLevel {
  ReadCommitted = 'ReadCommitted',
  ReadUncommitted = 'ReadUncommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable'
}

export type UpdateManyHorseAndReturnOutputType = {
  __typename?: 'UpdateManyHorseAndReturnOutputType';
  age: Scalars['Int']['output'];
  category: HorseCategory;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  discipline: HorseDiscipline;
  disciplineId: Scalars['String']['output'];
  gender: HorseGender;
  genderId: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pedigree?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  status: HorseStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userUid: Scalars['String']['output'];
  vetReport?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
  xrayResults?: Maybe<Scalars['String']['output']>;
};

export type UpdateManyHorseCategoryAndReturnOutputType = {
  __typename?: 'UpdateManyHorseCategoryAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateManyHorseDisciplineAndReturnOutputType = {
  __typename?: 'UpdateManyHorseDisciplineAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateManyHorseGenderAndReturnOutputType = {
  __typename?: 'UpdateManyHorseGenderAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateManyNotificationAndReturnOutputType = {
  __typename?: 'UpdateManyNotificationAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userUid: Scalars['String']['output'];
};

export type UpdateManyUserAndReturnOutputType = {
  __typename?: 'UpdateManyUserAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verifiedSeller: Scalars['Boolean']['output'];
  whatsAppNumber?: Maybe<Scalars['String']['output']>;
};

export type UpdateManyUserFavoriteHorsesAndReturnOutputType = {
  __typename?: 'UpdateManyUserFavoriteHorsesAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  horse: Horse;
  horseId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  user: User;
  userUid: Scalars['String']['output'];
};

export type UpdateManyUserReviewAndReturnOutputType = {
  __typename?: 'UpdateManyUserReviewAndReturnOutputType';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  reviewer: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userUid: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _count: UserCountOutputType;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  horses: Array<Horse>;
  name: Scalars['String']['output'];
  notifications: Array<Notification>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  reviews: Array<UserReview>;
  role: UserRole;
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userFavoriteHorses: Array<UserFavoriteHorses>;
  verifiedSeller: Scalars['Boolean']['output'];
  whatsAppNumber?: Maybe<Scalars['String']['output']>;
};


export type UserHorsesArgs = {
  cursor?: InputMaybe<HorseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<HorseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<HorseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HorseWhereInput>;
};


export type UserNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<NotificationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type UserReviewsArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserReviewScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserReviewOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type UserUserFavoriteHorsesArgs = {
  cursor?: InputMaybe<UserFavoriteHorsesWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFavoriteHorsesWhereInput>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  phoneNumber: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  uid: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  verifiedSeller: Scalars['Int']['output'];
  whatsAppNumber: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verifiedSeller?: InputMaybe<SortOrder>;
  whatsAppNumber?: InputMaybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  horses: Scalars['Int']['output'];
  notifications: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
  userFavoriteHorses: Scalars['Int']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  horses?: InputMaybe<HorseCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<UserReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesCreateNestedManyWithoutUserInput>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateNestedOneWithoutHorsesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutHorsesInput>;
  create?: InputMaybe<UserCreateWithoutHorsesInput>;
};

export type UserCreateNestedOneWithoutNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
};

export type UserCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserCreateWithoutReviewsInput>;
};

export type UserCreateNestedOneWithoutUserFavoriteHorsesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserFavoriteHorsesInput>;
  create?: InputMaybe<UserCreateWithoutUserFavoriteHorsesInput>;
};

export type UserCreateOrConnectWithoutHorsesInput = {
  create: UserCreateWithoutHorsesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserFavoriteHorsesInput = {
  create: UserCreateWithoutUserFavoriteHorsesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutHorsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<UserReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesCreateNestedManyWithoutUserInput>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutNotificationsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  horses?: InputMaybe<HorseCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<UserReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesCreateNestedManyWithoutUserInput>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutReviewsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  horses?: InputMaybe<HorseCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesCreateNestedManyWithoutUserInput>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutUserFavoriteHorsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  horses?: InputMaybe<HorseCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<UserReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserFavoriteHorses = {
  __typename?: 'UserFavoriteHorses';
  createdAt: Scalars['DateTime']['output'];
  horse: Horse;
  horseId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  user: User;
  userUid: Scalars['String']['output'];
};

export type UserFavoriteHorsesCountAggregateOutputType = {
  __typename?: 'UserFavoriteHorsesCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  horseId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userUid: Scalars['Int']['output'];
};

export type UserFavoriteHorsesCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  horseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type UserFavoriteHorsesCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horse: HorseCreateNestedOneWithoutFavoriteByUsersInput;
  id?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutUserFavoriteHorsesInput;
};

export type UserFavoriteHorsesCreateManyHorseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userUid: Scalars['String']['input'];
};

export type UserFavoriteHorsesCreateManyHorseInputEnvelope = {
  data: UserFavoriteHorsesCreateManyHorseInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFavoriteHorsesCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horseId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  userUid: Scalars['String']['input'];
};

export type UserFavoriteHorsesCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horseId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserFavoriteHorsesCreateManyUserInputEnvelope = {
  data: UserFavoriteHorsesCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFavoriteHorsesCreateNestedManyWithoutHorseInput = {
  connect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateOrConnectWithoutHorseInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateWithoutHorseInput>>>;
  createMany?: InputMaybe<UserFavoriteHorsesCreateManyHorseInputEnvelope>;
};

export type UserFavoriteHorsesCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateWithoutUserInput>>>;
  createMany?: InputMaybe<UserFavoriteHorsesCreateManyUserInputEnvelope>;
};

export type UserFavoriteHorsesCreateOrConnectWithoutHorseInput = {
  create: UserFavoriteHorsesCreateWithoutHorseInput;
  where: UserFavoriteHorsesWhereUniqueInput;
};

export type UserFavoriteHorsesCreateOrConnectWithoutUserInput = {
  create: UserFavoriteHorsesCreateWithoutUserInput;
  where: UserFavoriteHorsesWhereUniqueInput;
};

export type UserFavoriteHorsesCreateWithoutHorseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutUserFavoriteHorsesInput;
};

export type UserFavoriteHorsesCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horse: HorseCreateNestedOneWithoutFavoriteByUsersInput;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserFavoriteHorsesGroupByOutputType = {
  __typename?: 'UserFavoriteHorsesGroupByOutputType';
  _count?: Maybe<UserFavoriteHorsesCountAggregateOutputType>;
  _max?: Maybe<UserFavoriteHorsesMaxAggregateOutputType>;
  _min?: Maybe<UserFavoriteHorsesMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  horseId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  userUid: Scalars['String']['output'];
};

export type UserFavoriteHorsesListRelationFilter = {
  every?: InputMaybe<UserFavoriteHorsesWhereInput>;
  none?: InputMaybe<UserFavoriteHorsesWhereInput>;
  some?: InputMaybe<UserFavoriteHorsesWhereInput>;
};

export type UserFavoriteHorsesMaxAggregateOutputType = {
  __typename?: 'UserFavoriteHorsesMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  horseId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  userUid?: Maybe<Scalars['String']['output']>;
};

export type UserFavoriteHorsesMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  horseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type UserFavoriteHorsesMinAggregateOutputType = {
  __typename?: 'UserFavoriteHorsesMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  horseId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  userUid?: Maybe<Scalars['String']['output']>;
};

export type UserFavoriteHorsesMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  horseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type UserFavoriteHorsesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserFavoriteHorsesOrderByWithAggregationInput = {
  _count?: InputMaybe<UserFavoriteHorsesCountOrderByAggregateInput>;
  _max?: InputMaybe<UserFavoriteHorsesMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserFavoriteHorsesMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  horseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type UserFavoriteHorsesOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  horse?: InputMaybe<HorseOrderByWithRelationInput>;
  horseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userUid?: InputMaybe<SortOrder>;
};

export enum UserFavoriteHorsesScalarFieldEnum {
  CreatedAt = 'createdAt',
  HorseId = 'horseId',
  Id = 'id',
  UserUid = 'userUid'
}

export type UserFavoriteHorsesScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  horseId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  userUid?: InputMaybe<StringFilter>;
};

export type UserFavoriteHorsesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  horseId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  userUid?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserFavoriteHorsesUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horseId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  userUid: Scalars['String']['input'];
};

export type UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput = {
  connect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateOrConnectWithoutHorseInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateWithoutHorseInput>>>;
  createMany?: InputMaybe<UserFavoriteHorsesCreateManyHorseInputEnvelope>;
};

export type UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateWithoutUserInput>>>;
  createMany?: InputMaybe<UserFavoriteHorsesCreateManyUserInputEnvelope>;
};

export type UserFavoriteHorsesUncheckedCreateWithoutHorseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userUid: Scalars['String']['input'];
};

export type UserFavoriteHorsesUncheckedCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  horseId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserFavoriteHorsesUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horseId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFavoriteHorsesUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horseId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFavoriteHorsesUncheckedUpdateManyWithoutHorseInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateOrConnectWithoutHorseInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateWithoutHorseInput>>>;
  createMany?: InputMaybe<UserFavoriteHorsesCreateManyHorseInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput>>>;
};

export type UserFavoriteHorsesUncheckedUpdateManyWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horseId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateWithoutUserInput>>>;
  createMany?: InputMaybe<UserFavoriteHorsesCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type UserFavoriteHorsesUncheckedUpdateWithoutHorseInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFavoriteHorsesUncheckedUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horseId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFavoriteHorsesUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horse?: InputMaybe<HorseUpdateOneRequiredWithoutFavoriteByUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserFavoriteHorsesNestedInput>;
};

export type UserFavoriteHorsesUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput = {
  data: UserFavoriteHorsesUpdateManyMutationInput;
  where: UserFavoriteHorsesScalarWhereInput;
};

export type UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput = {
  data: UserFavoriteHorsesUpdateManyMutationInput;
  where: UserFavoriteHorsesScalarWhereInput;
};

export type UserFavoriteHorsesUpdateManyWithoutHorseNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateOrConnectWithoutHorseInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateWithoutHorseInput>>>;
  createMany?: InputMaybe<UserFavoriteHorsesCreateManyHorseInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput>>>;
};

export type UserFavoriteHorsesUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesCreateWithoutUserInput>>>;
  createMany?: InputMaybe<UserFavoriteHorsesCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput = {
  data: UserFavoriteHorsesUpdateWithoutHorseInput;
  where: UserFavoriteHorsesWhereUniqueInput;
};

export type UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput = {
  data: UserFavoriteHorsesUpdateWithoutUserInput;
  where: UserFavoriteHorsesWhereUniqueInput;
};

export type UserFavoriteHorsesUpdateWithoutHorseInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserFavoriteHorsesNestedInput>;
};

export type UserFavoriteHorsesUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  horse?: InputMaybe<HorseUpdateOneRequiredWithoutFavoriteByUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput = {
  create: UserFavoriteHorsesCreateWithoutHorseInput;
  update: UserFavoriteHorsesUpdateWithoutHorseInput;
  where: UserFavoriteHorsesWhereUniqueInput;
};

export type UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput = {
  create: UserFavoriteHorsesCreateWithoutUserInput;
  update: UserFavoriteHorsesUpdateWithoutUserInput;
  where: UserFavoriteHorsesWhereUniqueInput;
};

export type UserFavoriteHorsesUserUidHorseIdCompoundUniqueInput = {
  horseId: Scalars['String']['input'];
  userUid: Scalars['String']['input'];
};

export type UserFavoriteHorsesWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  horse?: InputMaybe<HorseScalarRelationFilter>;
  horseId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userUid?: InputMaybe<StringFilter>;
};

export type UserFavoriteHorsesWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserFavoriteHorsesWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  horse?: InputMaybe<HorseScalarRelationFilter>;
  horseId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userUid?: InputMaybe<StringFilter>;
  userUid_horseId?: InputMaybe<UserFavoriteHorsesUserUidHorseIdCompoundUniqueInput>;
};

export type UserGroupByOutputType = {
  __typename?: 'UserGroupByOutputType';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verifiedSeller: Scalars['Boolean']['output'];
  whatsAppNumber?: Maybe<Scalars['String']['output']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  uid?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verifiedSeller?: Maybe<Scalars['Boolean']['output']>;
  whatsAppNumber?: Maybe<Scalars['String']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verifiedSeller?: InputMaybe<SortOrder>;
  whatsAppNumber?: InputMaybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  uid?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verifiedSeller?: Maybe<Scalars['Boolean']['output']>;
  whatsAppNumber?: Maybe<Scalars['String']['output']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verifiedSeller?: InputMaybe<SortOrder>;
  whatsAppNumber?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verifiedSeller?: InputMaybe<SortOrder>;
  whatsAppNumber?: InputMaybe<SortOrderInput>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrderInput>;
  horses?: InputMaybe<HorseOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  notifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  reviews?: InputMaybe<UserReviewOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesOrderByRelationAggregateInput>;
  verifiedSeller?: InputMaybe<SortOrder>;
  whatsAppNumber?: InputMaybe<SortOrderInput>;
};

export type UserReview = {
  __typename?: 'UserReview';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  reviewer: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userUid: Scalars['String']['output'];
};

export type UserReviewAvgAggregateOutputType = {
  __typename?: 'UserReviewAvgAggregateOutputType';
  rating?: Maybe<Scalars['Float']['output']>;
};

export type UserReviewAvgOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type UserReviewCountAggregateOutputType = {
  __typename?: 'UserReviewCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  comment: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  reviewer: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userUid: Scalars['Int']['output'];
};

export type UserReviewCountOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  reviewer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type UserReviewCreateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  reviewer: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutReviewsInput;
};

export type UserReviewCreateManyInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  reviewer: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
};

export type UserReviewCreateManyUserInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  reviewer: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserReviewCreateManyUserInputEnvelope = {
  data: UserReviewCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<UserReviewWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserReviewCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserReviewCreateWithoutUserInput>>>;
  createMany?: InputMaybe<UserReviewCreateManyUserInputEnvelope>;
};

export type UserReviewCreateOrConnectWithoutUserInput = {
  create: UserReviewCreateWithoutUserInput;
  where: UserReviewWhereUniqueInput;
};

export type UserReviewCreateWithoutUserInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  reviewer: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserReviewGroupByOutputType = {
  __typename?: 'UserReviewGroupByOutputType';
  _avg?: Maybe<UserReviewAvgAggregateOutputType>;
  _count?: Maybe<UserReviewCountAggregateOutputType>;
  _max?: Maybe<UserReviewMaxAggregateOutputType>;
  _min?: Maybe<UserReviewMinAggregateOutputType>;
  _sum?: Maybe<UserReviewSumAggregateOutputType>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  reviewer: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userUid: Scalars['String']['output'];
};

export type UserReviewListRelationFilter = {
  every?: InputMaybe<UserReviewWhereInput>;
  none?: InputMaybe<UserReviewWhereInput>;
  some?: InputMaybe<UserReviewWhereInput>;
};

export type UserReviewMaxAggregateOutputType = {
  __typename?: 'UserReviewMaxAggregateOutputType';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  reviewer?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userUid?: Maybe<Scalars['String']['output']>;
};

export type UserReviewMaxOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  reviewer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type UserReviewMinAggregateOutputType = {
  __typename?: 'UserReviewMinAggregateOutputType';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  reviewer?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userUid?: Maybe<Scalars['String']['output']>;
};

export type UserReviewMinOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  reviewer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type UserReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<UserReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserReviewSumOrderByAggregateInput>;
  comment?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  reviewer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userUid?: InputMaybe<SortOrder>;
};

export type UserReviewOrderByWithRelationInput = {
  comment?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  reviewer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userUid?: InputMaybe<SortOrder>;
};

export enum UserReviewScalarFieldEnum {
  Comment = 'comment',
  CreatedAt = 'createdAt',
  Id = 'id',
  Rating = 'rating',
  Reviewer = 'reviewer',
  UpdatedAt = 'updatedAt',
  UserUid = 'userUid'
}

export type UserReviewScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserReviewScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserReviewScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserReviewScalarWhereInput>>>;
  comment?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  reviewer?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userUid?: InputMaybe<StringFilter>;
};

export type UserReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserReviewScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserReviewScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserReviewScalarWhereWithAggregatesInput>>>;
  comment?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  reviewer?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userUid?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserReviewSumAggregateOutputType = {
  __typename?: 'UserReviewSumAggregateOutputType';
  rating?: Maybe<Scalars['Int']['output']>;
};

export type UserReviewSumOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type UserReviewUncheckedCreateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  reviewer: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userUid: Scalars['String']['input'];
};

export type UserReviewUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<UserReviewWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserReviewCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserReviewCreateWithoutUserInput>>>;
  createMany?: InputMaybe<UserReviewCreateManyUserInputEnvelope>;
};

export type UserReviewUncheckedCreateWithoutUserInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  reviewer: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserReviewUncheckedUpdateInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  reviewer?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserReviewUncheckedUpdateManyInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  reviewer?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userUid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserReviewUncheckedUpdateManyWithoutUserInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  reviewer?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserReviewUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserReviewWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserReviewCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserReviewCreateWithoutUserInput>>>;
  createMany?: InputMaybe<UserReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<UserReviewWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserReviewScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserReviewWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserReviewWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserReviewUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserReviewUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserReviewUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type UserReviewUncheckedUpdateWithoutUserInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  reviewer?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserReviewUpdateInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  reviewer?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReviewsNestedInput>;
};

export type UserReviewUpdateManyMutationInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  reviewer?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserReviewUpdateManyWithWhereWithoutUserInput = {
  data: UserReviewUpdateManyMutationInput;
  where: UserReviewScalarWhereInput;
};

export type UserReviewUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserReviewWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserReviewCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserReviewCreateWithoutUserInput>>>;
  createMany?: InputMaybe<UserReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<UserReviewWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserReviewScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserReviewWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserReviewWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserReviewUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserReviewUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserReviewUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type UserReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: UserReviewUpdateWithoutUserInput;
  where: UserReviewWhereUniqueInput;
};

export type UserReviewUpdateWithoutUserInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  reviewer?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: UserReviewCreateWithoutUserInput;
  update: UserReviewUpdateWithoutUserInput;
  where: UserReviewWhereUniqueInput;
};

export type UserReviewWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserReviewWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserReviewWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserReviewWhereInput>>>;
  comment?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  reviewer?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userUid?: InputMaybe<StringFilter>;
};

export type UserReviewWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<UserReviewWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserReviewWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserReviewWhereInput>>>;
  comment?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<IntFilter>;
  reviewer?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userUid?: InputMaybe<StringFilter>;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Name = 'name',
  PhoneNumber = 'phoneNumber',
  Role = 'role',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
  VerifiedSeller = 'verifiedSeller',
  WhatsAppNumber = 'whatsAppNumber'
}

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  phoneNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumUserRoleWithAggregatesFilter>;
  uid?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  verifiedSeller?: InputMaybe<BoolWithAggregatesFilter>;
  whatsAppNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  horses?: InputMaybe<HorseUncheckedCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  notifications?: InputMaybe<NotificationUncheckedCreateNestedManyWithoutUserInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<UserReviewUncheckedCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserUncheckedCreateWithoutHorsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notifications?: InputMaybe<NotificationUncheckedCreateNestedManyWithoutUserInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<UserReviewUncheckedCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserUncheckedCreateWithoutNotificationsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  horses?: InputMaybe<HorseUncheckedCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<UserReviewUncheckedCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserUncheckedCreateWithoutReviewsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  horses?: InputMaybe<HorseUncheckedCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  notifications?: InputMaybe<NotificationUncheckedCreateNestedManyWithoutUserInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserUncheckedCreateWithoutUserFavoriteHorsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  horses?: InputMaybe<HorseUncheckedCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  notifications?: InputMaybe<NotificationUncheckedCreateNestedManyWithoutUserInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<UserReviewUncheckedCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRole>;
  uid: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  whatsAppNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUncheckedUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUncheckedUpdateManyWithoutUserNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<UserReviewUncheckedUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutHorsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUncheckedUpdateManyWithoutUserNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<UserReviewUncheckedUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutNotificationsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUncheckedUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<UserReviewUncheckedUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutReviewsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUncheckedUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUncheckedUpdateManyWithoutUserNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutUserFavoriteHorsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUncheckedUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUncheckedUpdateManyWithoutUserNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<UserReviewUncheckedUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<UserReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUpdateManyWithoutUserNestedInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutHorsesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutHorsesInput>;
  create?: InputMaybe<UserCreateWithoutHorsesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutHorsesInput>;
  upsert?: InputMaybe<UserUpsertWithoutHorsesInput>;
};

export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutNotificationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserCreateWithoutReviewsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReviewsInput>;
};

export type UserUpdateOneRequiredWithoutUserFavoriteHorsesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserFavoriteHorsesInput>;
  create?: InputMaybe<UserCreateWithoutUserFavoriteHorsesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserFavoriteHorsesInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserFavoriteHorsesInput>;
};

export type UserUpdateToOneWithWhereWithoutHorsesInput = {
  data: UserUpdateWithoutHorsesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
  data: UserUpdateWithoutNotificationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutReviewsInput = {
  data: UserUpdateWithoutReviewsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUserFavoriteHorsesInput = {
  data: UserUpdateWithoutUserFavoriteHorsesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutHorsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<UserReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUpdateManyWithoutUserNestedInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotificationsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<UserReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUpdateManyWithoutUserNestedInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReviewsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesUpdateManyWithoutUserNestedInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserFavoriteHorsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  horses?: InputMaybe<HorseUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<UserReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verifiedSeller?: InputMaybe<BoolFieldUpdateOperationsInput>;
  whatsAppNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutHorsesInput = {
  create: UserCreateWithoutHorsesInput;
  update: UserUpdateWithoutHorsesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  update: UserUpdateWithoutNotificationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  update: UserUpdateWithoutReviewsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUserFavoriteHorsesInput = {
  create: UserCreateWithoutUserFavoriteHorsesInput;
  update: UserUpdateWithoutUserFavoriteHorsesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  horses?: InputMaybe<HorseListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  reviews?: InputMaybe<UserReviewListRelationFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesListRelationFilter>;
  verifiedSeller?: InputMaybe<BoolFilter>;
  whatsAppNumber?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  horses?: InputMaybe<HorseListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  reviews?: InputMaybe<UserReviewListRelationFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userFavoriteHorses?: InputMaybe<UserFavoriteHorsesListRelationFilter>;
  verifiedSeller?: InputMaybe<BoolFilter>;
  whatsAppNumber?: InputMaybe<StringNullableFilter>;
};

export type FindManyHorseQueryVariables = Exact<{
  where?: InputMaybe<HorseWhereInput>;
  orderBy?: InputMaybe<Array<InputMaybe<HorseOrderByWithRelationInput>> | InputMaybe<HorseOrderByWithRelationInput>>;
  cursor?: InputMaybe<HorseWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindManyHorseQuery = { __typename?: 'Query', findManyHorse: Array<{ __typename?: 'Horse', id: string, name: string, status: HorseStatus, age: number, height: number, price: number, location: string, photos: Array<string>, videoUrl?: string | null, description: string, vetReport?: string | null, xrayResults?: string | null, pedigree?: string | null, createdAt: any, updatedAt: any, user: { __typename?: 'User', uid: string, name: string }, category: { __typename?: 'HorseCategory', id: string, name: string }, discipline: { __typename?: 'HorseDiscipline', id: string, name: string }, gender: { __typename?: 'HorseGender', id: string, name: string } }> };

export type FindUniqueHorseQueryVariables = Exact<{
  where: HorseWhereUniqueInput;
}>;


export type FindUniqueHorseQuery = { __typename?: 'Query', findUniqueHorse?: { __typename?: 'Horse', id: string, name: string, status: HorseStatus, age: number, height: number, price: number, location: string, photos: Array<string>, videoUrl?: string | null, description: string, vetReport?: string | null, xrayResults?: string | null, pedigree?: string | null, createdAt: any, updatedAt: any, user: { __typename?: 'User', uid: string, name: string }, category: { __typename?: 'HorseCategory', id: string, name: string }, discipline: { __typename?: 'HorseDiscipline', id: string, name: string }, gender: { __typename?: 'HorseGender', id: string, name: string } } | null };

export type FindManyHorseCountQueryVariables = Exact<{
  where?: InputMaybe<HorseWhereInput>;
}>;


export type FindManyHorseCountQuery = { __typename?: 'Query', findManyHorseCount: number };

export type FindManyUserQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>> | InputMaybe<UserOrderByWithRelationInput>>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindManyUserQuery = { __typename?: 'Query', findManyUser: Array<{ __typename?: 'User', uid: string, name: string, phoneNumber?: string | null, email?: string | null, whatsAppNumber?: string | null, verifiedSeller: boolean, role: UserRole, createdAt: any, updatedAt: any, notifications: Array<{ __typename?: 'Notification', id: string }>, horses: Array<{ __typename?: 'Horse', id: string }>, reviews: Array<{ __typename?: 'UserReview', id: string }>, userFavoriteHorses: Array<{ __typename?: 'UserFavoriteHorses', id: string }> }> };

export type FindManyUserCountQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
}>;


export type FindManyUserCountQuery = { __typename?: 'Query', findManyUserCount: number };


export const FindManyHorseDocument = gql`
    query findManyHorse($where: HorseWhereInput, $orderBy: [HorseOrderByWithRelationInput], $cursor: HorseWhereUniqueInput, $take: Int, $skip: Int) {
  findManyHorse(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
  ) {
    id
    name
    status
    age
    height
    price
    location
    photos
    videoUrl
    description
    vetReport
    xrayResults
    pedigree
    user {
      uid
      name
    }
    category {
      id
      name
    }
    discipline {
      id
      name
    }
    gender {
      id
      name
    }
    createdAt
    updatedAt
  }
}
    `;
export const FindUniqueHorseDocument = gql`
    query findUniqueHorse($where: HorseWhereUniqueInput!) {
  findUniqueHorse(where: $where) {
    id
    name
    status
    age
    height
    price
    location
    photos
    videoUrl
    description
    vetReport
    xrayResults
    pedigree
    user {
      uid
      name
    }
    category {
      id
      name
    }
    discipline {
      id
      name
    }
    gender {
      id
      name
    }
    createdAt
    updatedAt
  }
}
    `;
export const FindManyHorseCountDocument = gql`
    query findManyHorseCount($where: HorseWhereInput) {
  findManyHorseCount(where: $where)
}
    `;
export const FindManyUserDocument = gql`
    query findManyUser($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput], $cursor: UserWhereUniqueInput, $take: Int, $skip: Int) {
  findManyUser(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
  ) {
    uid
    name
    phoneNumber
    email
    whatsAppNumber
    verifiedSeller
    role
    createdAt
    updatedAt
    notifications {
      id
    }
    horses {
      id
    }
    reviews {
      id
    }
    userFavoriteHorses {
      id
    }
  }
}
    `;
export const FindManyUserCountDocument = gql`
    query findManyUserCount($where: UserWhereInput) {
  findManyUserCount(where: $where)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    findManyHorse(variables?: FindManyHorseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<FindManyHorseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindManyHorseQuery>({ document: FindManyHorseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'findManyHorse', 'query', variables);
    },
    findUniqueHorse(variables: FindUniqueHorseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<FindUniqueHorseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindUniqueHorseQuery>({ document: FindUniqueHorseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'findUniqueHorse', 'query', variables);
    },
    findManyHorseCount(variables?: FindManyHorseCountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<FindManyHorseCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindManyHorseCountQuery>({ document: FindManyHorseCountDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'findManyHorseCount', 'query', variables);
    },
    findManyUser(variables?: FindManyUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<FindManyUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindManyUserQuery>({ document: FindManyUserDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'findManyUser', 'query', variables);
    },
    findManyUserCount(variables?: FindManyUserCountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<FindManyUserCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindManyUserCountQuery>({ document: FindManyUserCountDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'findManyUserCount', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;