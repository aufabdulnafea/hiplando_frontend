// import type { CodegenConfig } from '@graphql-codegen/cli'
 
// const config: CodegenConfig = {
//    schema: 'http://localhost:4000/graphql',
//    documents: ['src/**/*.tsx'],
//    ignoreNoDocuments: true,
//    generates: {
//       './src/gql/': {
//         preset: 'client',
//       }
//    }
// }
// export default config


import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql/',
  // 👇 add .graphql to your document sources
  documents: ['src/**/*.{ts,tsx,graphql,gql}'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string'
      }
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
}

export default config