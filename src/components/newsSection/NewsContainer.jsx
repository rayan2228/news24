import { useContext } from "react";
import Container from "../layouts/Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { NewsContext } from "../../context/news/newsContext";

const NewsContainer = () => {
  const { loading } = useContext(NewsContext);
  console.log(loading);
  return (
    <main className="my-10 lg:my-14">
      <Container>
        <div className="grid grid-cols-12 gap-8 mx-auto">
          {loading.state ? (
            "loading.."
          ) : (
            <>
              <LeftSide />
              <RightSide />
            </>
          )}
        </div>
      </Container>
    </main>
  );
};

export default NewsContainer;
