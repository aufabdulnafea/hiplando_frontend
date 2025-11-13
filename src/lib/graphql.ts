import { GraphQLClient } from 'graphql-request'
import { auth } from './firebase'

import { getSdk } from '@/graphql/sdk'

export async function getGraphQLClient() {
    const token = await auth.currentUser?.getIdToken()

    const client = new GraphQLClient("http://192.168.0.217:4000/graphql", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return getSdk(client)
}
