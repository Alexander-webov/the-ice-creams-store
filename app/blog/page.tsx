import TitleSection from "../components/ui/TitleSection";
import Container from "../components/Container";
import Posts from "../components/blog-posts/Posts";

function Blog() {
  return (
    <main>
      <TitleSection titlePage="Blog" />
      <div className="my-20 ">
        <Container>
          <div className="">
            <Posts />
          </div>
        </Container>
      </div>
    </main>
  );
}

export default Blog;
