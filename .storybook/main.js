module.exports = {
  stories: [
    '../projects/storybook-angular/src/stories/**/*.stories.mdx',
    '../projects/storybook-angular/src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/angular',
  core: {
    builder: 'webpack5'
  },
  staticDirs: ['public']
};
