import { GraphQLClient } from 'graphql-request'
const client = new GraphQLClient('http://localhost:4000/graphql')
import { getSdk } from '@/graphql/sdk'

export const graphql = getSdk(client)