import Input from '../components/Input';

export default {
    title: "Input",
    component: Input,
    argTypes: {
        type: {
            options: ['text', 'password'],
            control: { type: 'radio' }
        },
        className: {
            control: false
        }
    }
}

const Template = (args) => <Input value={args.value} type={args.type} />;

export const Text = Template.bind({});
Text.args = { value: "Storybook", type: "text" };

export const Password = Template.bind({});
Password.args = { value: "Storybook", type: "password" };