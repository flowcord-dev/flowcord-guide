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
        'core-concepts/render-modes',
        'core-concepts/navigation',
        'core-concepts/state-management',
        'core-concepts/lifecycle-hooks',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      link: {type: 'generated-index'},
      items: [
        'components/buttons',
        'components/select-menus',
        'components/modals',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      link: {type: 'generated-index'},
      items: [
        'advanced/pagination',
        'advanced/sub-menus',
        'advanced/guards-and-pipelines',
        'advanced/layout-mode',
        'advanced/fallback-menus',
        'advanced/tracing-and-debugging',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      link: {type: 'generated-index'},
      items: [
        'examples/index',
        'examples/01-quickstart',
        'examples/02-multi-menu-navigation',
        'examples/03-state-and-lifecycle',
        'examples/04-sub-menu-continuation',
        'examples/05-selects-and-modals',
        'examples/06-pagination-and-guards',
      ],
    },
  ],

  apiSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      link: {type: 'generated-index'},
      items: [
        'api-reference/flowcord-class',
        'api-reference/menu-builder',
        'api-reference/built-in-actions',
        'api-reference/context',
      ],
    },
  ],
};

export default sidebars;
