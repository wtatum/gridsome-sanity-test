export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e31cb63c30370deff9cc8bd',
                  title: 'Sanity Studio',
                  name: 'gridsome-sanity-test-studio',
                  apiId: '4aa7882d-bb6e-4fc7-af9a-53b104be9eb8'
                },
                {
                  buildHookId: '5e31cb634b5917ae873cb6bb',
                  title: 'Blog Website',
                  name: 'gridsome-sanity-test',
                  apiId: '94ef8c8f-902a-422e-8e65-fad359b1c105'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wtatum/gridsome-sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gridsome-sanity-test.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
