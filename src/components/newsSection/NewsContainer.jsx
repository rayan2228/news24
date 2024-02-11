import Container from "../layouts/Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const NewsContainer = () => {
  return (
    <main className="my-10 lg:my-14">
      <Container>
        <div className="grid grid-cols-12 gap-8 mx-auto">
          {/* left */}
          <LeftSide />
          {/* right */}
          <RightSide />
        </div>
      </Container>
    </main>
  );
};

export default NewsContainer;
