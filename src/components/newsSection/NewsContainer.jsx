import { useContext } from "react";
import Container from "../layouts/Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { NewsContext } from "../../context/news/newsContext";

const NewsContainer = () => {
  const { loading } = useContext(NewsContext);
  return (
    <main className="my-10 lg:my-14">
      <Container>
        <div className="grid grid-cols-12 gap-8 mx-auto">
          {loading.state ? (
            <p className="text-2xl text-green-500 col-span-full text-center  tracking-[10px]">
              {loading.message}
            </p>
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
