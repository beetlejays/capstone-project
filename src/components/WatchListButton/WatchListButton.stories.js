import WatchListButton from './WatchListButton';

export default {
  title: 'Components/WatchListButton',
  component: WatchListButton,
  argTypes: {},
};

export const Template = args => <WatchListButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'add to Watchlist +',
  backgroundColor: 'orange',
};
