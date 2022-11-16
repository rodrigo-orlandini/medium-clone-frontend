import Container from '../components/Container';

export default {
    title: "Container",
    component: Container,
    argTypes: {
        className: {
            control: false
        }
    }
}

const Template = (args) => (
    <Container>
        <h1>{args.text}</h1>
    </Container>
);

export const Primary = Template.bind({});
Primary.args = { text: "STORYBOOK" };