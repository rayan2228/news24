import { useContext } from "react";
import Container from "../layouts/Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { NewsContext } from "../../context/news/newsContext";

const NewsContainer = () => {
  const { loading, error, noData } = useContext(NewsContext);
  return (
    <main className="my-10 lg:my-14">
      <Container>
        <div className="grid grid-cols-12 gap-8 mx-auto">
          {loading.state || error || noData ? (
            <p
              className={`text-2xl ${
                loading.state ? "text-green-500" : "text-red-500"
              } col-span-full text-center  tracking-[10px]`}
            >
              {loading.message ||
                (error && "fetching news  failed") ||
                (noData && "no news found")}
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
