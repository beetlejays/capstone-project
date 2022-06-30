module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  typescript: {reactDocgen: true},
  core: {
    builder: 'webpack5',
  },
  previewHead: head => `
    ${head}
    <style>
      html, body {
        background: #262626;
      }
    </style>
  `,
};
