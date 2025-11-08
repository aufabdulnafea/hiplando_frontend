import { GraphQLClient } from 'graphql-request'
import { auth } from './firebase'

const client = new GraphQLClient('http://192.168.0.39:4000/graphql')
import { getSdk } from '@/graphql/sdk'

// export const graphql = getSdk(client)

export async function getGraphQLClient() {
    const token = await auth.currentUser?.getIdToken()

    console.log(auth.currentUser)
    console.log(auth.currentUser?.getIdToken())

    const client = new GraphQLClient("http://192.168.0.39:4000/graphql", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return getSdk(client)
}
