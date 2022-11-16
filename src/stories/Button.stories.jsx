import Button from '../components/Button';

export default {
    title: "Button",
    component: Button,
    argTypes: {
        className: {
            control: false
        }
    }
}

const Template = (args) => <Button text={args.text} onClick={args.onClick} />;

export const Primary = Template.bind({});
Primary.args = { text: "Storybook", onClick: () => console.log("Storybook Button Component") };