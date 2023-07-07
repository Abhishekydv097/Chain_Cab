import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: "zkt1ni5u",
  dataset: 'production',
  apiVersion: 'v1',
  token: "sk5A9etwNgXDMYetH6UnEyaAuPqS18Ll1BLDx6ejNZaXLZQV8xRZLBVCreaiDN4yD712Nz3tSHMZHsg9G3KMIlbBnEBxQcm7OMFdzJqscNDsogC9BOUQlMiqUqYxG6GgWpIeLXhlFyIdQP7syS2m2dWDOT762pr1y04mbghbNJVPYueVwssm",
  useCdn: false,
})

console.log(client);