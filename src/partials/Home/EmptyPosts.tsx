import Container from "../../components/Container";

const EmptyPosts = () => {
    return (
        <section className="bg-white my-16 flex justify-center">
            <Container>
                <h3 className="text-xl font-main">
                    There's no posts yet. 😢
                </h3>
            </Container>
        </section>
    );
}

export default EmptyPosts;