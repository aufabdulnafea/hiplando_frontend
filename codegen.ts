// import type { CodegenConfig } from '@graphql-codegen/cli'

// const config: CodegenConfig = {
//   schema: 'http://localhost:4000/graphql/',
//   // 👇 add .graphql to your document sources
//   documents: ['src/**/*.{ts,tsx,graphql,gql}'],
//   ignoreNoDocuments: true,
//   generates: {
//     './src/graphql/': {
//       preset: 'client',
//       config: {
//         documentMode: 'string'
//       }
//     },
//     './schema.graphql': {
//       // plugins: ['schema-ast'],
//       plugins: ['schema-ast'],
//       config: {
//         includeDirectives: true
//       }
//     }
//   }
// }

// export default config


// import type { CodegenConfig } from '@graphql-codegen/cli'

// const config: CodegenConfig = {
//   schema: 'http://localhost:4000/graphql/',
//   // 👇 add .graphql to your document sources
//   documents: ['src/**/*.{ts,tsx,graphql,gql}'],
//   ignoreNoDocuments: true,
//   generates: {
//     './src/graphql/sdk.ts': {
//       plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
//       config: {}
//     }

//   }
// }

// export default config


import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  // documents: 'src/**/*.ts',   // ✅ make sure this matches where your queries are
  documents: 'src/graphql.graphql',
  generates: {
    './src/graphql/sdk.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      config: {
        useTypeImports: true,
        gqlTagName: 'graphql',        // ✅ <-- REQUIRED!
      }
    }
  }
};

export default config;