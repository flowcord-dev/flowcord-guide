import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Items are added to each category as their corresponding PRs merge.
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'generated-index'},
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/project-setup',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      link: {type: 'generated-index'},
      items: [
        'core-concepts/menus-and-sessions',
        'core-concepts/menu-context',
        // PRs 4–5
      ],
    },
    {
      type: 'category',
      label: 'Components',
      link: {type: 'generated-index'},
      items: [
        // PR 6
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      link: {type: 'generated-index'},
      items: [
        // PRs 7–8
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      link: {type: 'generated-index'},
      items: [
        // PR 10
      ],
    },
  ],

  apiSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      link: {type: 'generated-index'},
      items: [
        // PR 9
      ],
    },
  ],
};

export default sidebars;
