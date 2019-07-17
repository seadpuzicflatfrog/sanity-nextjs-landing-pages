export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d2efab296ab3fbe295a4bd5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ifef9jka',
                  apiId: '1c86cb65-7e4d-480e-a369-c8e9d882ae3c'
                },
                {
                  buildHookId: '5d2efab2efbb8d601b3be6d5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-v4o33pw3',
                  apiId: 'bd8e9cad-48fc-4117-98af-72125d220e40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/seadpuzicflatfrog/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-v4o33pw3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
