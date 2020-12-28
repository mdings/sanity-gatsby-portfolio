export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fea069b69f90d9e1d7cd46f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dmbrv9iw',
                  apiId: '97edcf16-9555-4d6b-a295-69cb5d5c34b0'
                },
                {
                  buildHookId: '5fea069b02f86e796e1ccb72',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tf6nrv38',
                  apiId: '489523d9-520f-4fe5-be72-3c155dcee8ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mdings/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tf6nrv38.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
