import Card from '../components/Card.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Valtech/Card',
  component: Card,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground = {
    render: (args) => ({
        component: { Card },
        setup() {
            return { args };
        },
        template: '<Card v-bind="args"></card>',
    }),
    args: {
        id: 7616,
        subtitle: 'My subtitle',
        title: 'My title',
        image: 'https://picsum.photos/400/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam.',
    },
};
