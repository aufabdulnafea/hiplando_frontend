import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute';
import { CreateHorseCategoryInput, CreateHorseDisciplineInput, CreateHorseGenderInput, MutationUpdateHorseCategoryArgs, UpdateHorseCategoryInput, UpdateHorseDisciplineInput, UpdateHorseGenderInput } from '@/graphql/graphql';

// --------- Horse Category ----------
export async function readHorseCategories() {
    const query = graphql(`
            query HorseCategories {
              horseCategories {
                id
                name
                imageUrl
                createdAt
                updatedAt
              }
            }
          `);
    const { data } = await execute(query, {}, { fetchOptions: { cache: 'no-store' } });
    return data?.horseCategories || []
}
export async function createHorseCategory(data: CreateHorseCategoryInput) {
    const mutation = graphql(`
            mutation CreateHorseCategory($data: CreateHorseCategoryInput!) {
              createHorseCategory(data: $data) {
                id
                name
                imageUrl
                createdAt
                updatedAt
              }
            }
          `);
    return await execute(mutation, { data });
}
export async function deleteHorseCategory(id: string) {
    const mutation = graphql(`
            mutation DeleteHorseCategory($id: String!) {
              deleteHorseCategory(id: $id) {
                id
              }
            }
          `);
    return await execute(mutation, { id })
}
export async function updateHorseCategory(data: UpdateHorseCategoryInput) {
    const mutation = graphql(`
            mutation UpdateHorseCategory($data: UpdateHorseCategoryInput!) {
              updateHorseCategory(data: $data) {
                id
              }
            }
          `);
    return await execute(mutation, { data })
}


// --------- Horse Gender ----------
export async function readHorseGenders() {
    const query = graphql(`
            query horseGenders {
                horseGenders {
                    id
                    name
                    createdAt
                    updatedAt
                }
            }
        `);
    const { data } = await execute(query, {}, { fetchOptions: { cache: 'no-store' } });
    return data?.horseGenders || []
}
export async function createHorseGender(data: CreateHorseGenderInput) {
    const mutation = graphql(`
            mutation CreateHorseGender($data: CreateHorseGenderInput!) {
                createHorseGender(data: $data) {
                    id
                    name
                }
           }
        `);
    return await execute(mutation, { data });
}
export async function deleteHorseGender(id: string) {
    const mutation = graphql(`
            mutation DeleteHorseGender($id: String!) {
              deleteHorseGender(id: $id) {
                id
              }
            }
          `);
    return await execute(mutation, { id })
}
export async function updateHorseGender(data: UpdateHorseGenderInput) {
    const mutation = graphql(`
            mutation UpdateHorseGender($data: UpdateHorseGenderInput!) {
              updateHorseGender(data: $data) {
                id
              }
            }
          `);
    return await execute(mutation, { data })
}

// --------- Horse Discipline ----------
export async function readHorseDisciplines() {
    const query = graphql(`
            query horseDisciplines {
                horseDisciplines {
                    id
                    name
                    createdAt
                    updatedAt
                }
            }
        `);
    const { data } = await execute(query, {}, { fetchOptions: { cache: 'no-store' } });
    return data?.horseDisciplines || []
}
export async function createHorseDiscipline(data: CreateHorseDisciplineInput) {
    const mutation = graphql(`
          mutation CreateHorseDiscipline($data: CreateHorseDisciplineInput!) {
            createHorseDiscipline(data: $data) {
              id
              name
            }
          }
        `);
    return await execute(mutation, { data });
}
export async function deleteHorseDiscipline(id: string) {
    const mutation = graphql(`
            mutation DeleteHorseDiscipline($id: String!) {
              deleteHorseDiscipline(id: $id) {
                id
              }
            }
          `);
    return await execute(mutation, { id })
}
export async function updateHorseDiscipline(data: UpdateHorseDisciplineInput) {
    const mutation = graphql(`
            mutation UpdateHorseDiscipline($data: UpdateHorseDisciplineInput!) {
              updateHorseDiscipline(data: $data) {
                id
              }
            }
          `);
    return await execute(mutation, { data })
}

