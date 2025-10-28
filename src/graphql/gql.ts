/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n      query horses {\n        horses {\n          id\n          price\n          height\n          gender {\n            id\n            name\n          }\n          discipline {\n            id\n            name\n          }\n          user {\n            id\n            name\n            email\n            whatsAppNumber\n          }\n          location\n          status\n        }\n      }\n    ": typeof types.HorsesDocument,
    "\n            query HorseCategories {\n              horseCategories {\n                id\n                name\n                imageUrl\n                createdAt\n                updatedAt\n              }\n            }\n          ": typeof types.HorseCategoriesDocument,
    "\n            mutation CreateHorseCategory($data: CreateHorseCategoryInput!) {\n              createHorseCategory(data: $data) {\n                id\n                name\n                imageUrl\n                createdAt\n                updatedAt\n              }\n            }\n          ": typeof types.CreateHorseCategoryDocument,
    "\n            mutation DeleteHorseCategory($id: String!) {\n              deleteHorseCategory(id: $id) {\n                id\n              }\n            }\n          ": typeof types.DeleteHorseCategoryDocument,
    "\n            mutation UpdateHorseCategory($data: UpdateHorseCategoryInput!) {\n              updateHorseCategory(data: $data) {\n                id\n              }\n            }\n          ": typeof types.UpdateHorseCategoryDocument,
    "\n            query horseGenders {\n                horseGenders {\n                    id\n                    name\n                    createdAt\n                    updatedAt\n                }\n            }\n        ": typeof types.HorseGendersDocument,
    "\n            mutation CreateHorseGender($data: CreateHorseGenderInput!) {\n                createHorseGender(data: $data) {\n                    id\n                    name\n                }\n           }\n        ": typeof types.CreateHorseGenderDocument,
    "\n            mutation DeleteHorseGender($id: String!) {\n              deleteHorseGender(id: $id) {\n                id\n              }\n            }\n          ": typeof types.DeleteHorseGenderDocument,
    "\n            mutation UpdateHorseGender($data: UpdateHorseGenderInput!) {\n              updateHorseGender(data: $data) {\n                id\n              }\n            }\n          ": typeof types.UpdateHorseGenderDocument,
    "\n            query horseDisciplines {\n                horseDisciplines {\n                    id\n                    name\n                    createdAt\n                    updatedAt\n                }\n            }\n        ": typeof types.HorseDisciplinesDocument,
    "\n          mutation CreateHorseDiscipline($data: CreateHorseDisciplineInput!) {\n            createHorseDiscipline(data: $data) {\n              id\n              name\n            }\n          }\n        ": typeof types.CreateHorseDisciplineDocument,
    "\n            mutation DeleteHorseDiscipline($id: String!) {\n              deleteHorseDiscipline(id: $id) {\n                id\n              }\n            }\n          ": typeof types.DeleteHorseDisciplineDocument,
    "\n            mutation UpdateHorseDiscipline($data: UpdateHorseDisciplineInput!) {\n              updateHorseDiscipline(data: $data) {\n                id\n              }\n            }\n          ": typeof types.UpdateHorseDisciplineDocument,
};
const documents: Documents = {
    "\n      query horses {\n        horses {\n          id\n          price\n          height\n          gender {\n            id\n            name\n          }\n          discipline {\n            id\n            name\n          }\n          user {\n            id\n            name\n            email\n            whatsAppNumber\n          }\n          location\n          status\n        }\n      }\n    ": types.HorsesDocument,
    "\n            query HorseCategories {\n              horseCategories {\n                id\n                name\n                imageUrl\n                createdAt\n                updatedAt\n              }\n            }\n          ": types.HorseCategoriesDocument,
    "\n            mutation CreateHorseCategory($data: CreateHorseCategoryInput!) {\n              createHorseCategory(data: $data) {\n                id\n                name\n                imageUrl\n                createdAt\n                updatedAt\n              }\n            }\n          ": types.CreateHorseCategoryDocument,
    "\n            mutation DeleteHorseCategory($id: String!) {\n              deleteHorseCategory(id: $id) {\n                id\n              }\n            }\n          ": types.DeleteHorseCategoryDocument,
    "\n            mutation UpdateHorseCategory($data: UpdateHorseCategoryInput!) {\n              updateHorseCategory(data: $data) {\n                id\n              }\n            }\n          ": types.UpdateHorseCategoryDocument,
    "\n            query horseGenders {\n                horseGenders {\n                    id\n                    name\n                    createdAt\n                    updatedAt\n                }\n            }\n        ": types.HorseGendersDocument,
    "\n            mutation CreateHorseGender($data: CreateHorseGenderInput!) {\n                createHorseGender(data: $data) {\n                    id\n                    name\n                }\n           }\n        ": types.CreateHorseGenderDocument,
    "\n            mutation DeleteHorseGender($id: String!) {\n              deleteHorseGender(id: $id) {\n                id\n              }\n            }\n          ": types.DeleteHorseGenderDocument,
    "\n            mutation UpdateHorseGender($data: UpdateHorseGenderInput!) {\n              updateHorseGender(data: $data) {\n                id\n              }\n            }\n          ": types.UpdateHorseGenderDocument,
    "\n            query horseDisciplines {\n                horseDisciplines {\n                    id\n                    name\n                    createdAt\n                    updatedAt\n                }\n            }\n        ": types.HorseDisciplinesDocument,
    "\n          mutation CreateHorseDiscipline($data: CreateHorseDisciplineInput!) {\n            createHorseDiscipline(data: $data) {\n              id\n              name\n            }\n          }\n        ": types.CreateHorseDisciplineDocument,
    "\n            mutation DeleteHorseDiscipline($id: String!) {\n              deleteHorseDiscipline(id: $id) {\n                id\n              }\n            }\n          ": types.DeleteHorseDisciplineDocument,
    "\n            mutation UpdateHorseDiscipline($data: UpdateHorseDisciplineInput!) {\n              updateHorseDiscipline(data: $data) {\n                id\n              }\n            }\n          ": types.UpdateHorseDisciplineDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query horses {\n        horses {\n          id\n          price\n          height\n          gender {\n            id\n            name\n          }\n          discipline {\n            id\n            name\n          }\n          user {\n            id\n            name\n            email\n            whatsAppNumber\n          }\n          location\n          status\n        }\n      }\n    "): typeof import('./graphql').HorsesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            query HorseCategories {\n              horseCategories {\n                id\n                name\n                imageUrl\n                createdAt\n                updatedAt\n              }\n            }\n          "): typeof import('./graphql').HorseCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            mutation CreateHorseCategory($data: CreateHorseCategoryInput!) {\n              createHorseCategory(data: $data) {\n                id\n                name\n                imageUrl\n                createdAt\n                updatedAt\n              }\n            }\n          "): typeof import('./graphql').CreateHorseCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            mutation DeleteHorseCategory($id: String!) {\n              deleteHorseCategory(id: $id) {\n                id\n              }\n            }\n          "): typeof import('./graphql').DeleteHorseCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            mutation UpdateHorseCategory($data: UpdateHorseCategoryInput!) {\n              updateHorseCategory(data: $data) {\n                id\n              }\n            }\n          "): typeof import('./graphql').UpdateHorseCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            query horseGenders {\n                horseGenders {\n                    id\n                    name\n                    createdAt\n                    updatedAt\n                }\n            }\n        "): typeof import('./graphql').HorseGendersDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            mutation CreateHorseGender($data: CreateHorseGenderInput!) {\n                createHorseGender(data: $data) {\n                    id\n                    name\n                }\n           }\n        "): typeof import('./graphql').CreateHorseGenderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            mutation DeleteHorseGender($id: String!) {\n              deleteHorseGender(id: $id) {\n                id\n              }\n            }\n          "): typeof import('./graphql').DeleteHorseGenderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            mutation UpdateHorseGender($data: UpdateHorseGenderInput!) {\n              updateHorseGender(data: $data) {\n                id\n              }\n            }\n          "): typeof import('./graphql').UpdateHorseGenderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            query horseDisciplines {\n                horseDisciplines {\n                    id\n                    name\n                    createdAt\n                    updatedAt\n                }\n            }\n        "): typeof import('./graphql').HorseDisciplinesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          mutation CreateHorseDiscipline($data: CreateHorseDisciplineInput!) {\n            createHorseDiscipline(data: $data) {\n              id\n              name\n            }\n          }\n        "): typeof import('./graphql').CreateHorseDisciplineDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            mutation DeleteHorseDiscipline($id: String!) {\n              deleteHorseDiscipline(id: $id) {\n                id\n              }\n            }\n          "): typeof import('./graphql').DeleteHorseDisciplineDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            mutation UpdateHorseDiscipline($data: UpdateHorseDisciplineInput!) {\n              updateHorseDiscipline(data: $data) {\n                id\n              }\n            }\n          "): typeof import('./graphql').UpdateHorseDisciplineDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
