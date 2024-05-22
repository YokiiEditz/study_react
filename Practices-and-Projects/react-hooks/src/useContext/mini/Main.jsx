import AllContext from "./All";
import Side from "./Side";

const Main = () => {
  return (
    <>
      <AllContext>
        <Side />
      </AllContext>
      {/* <AllContext>
        <Side />
      </AllContext>
      <AllContext>
        <Side />
      </AllContext> */}
    </>
  );
};

export default Main;
