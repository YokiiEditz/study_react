import CompA from "./CompA";
import Sample1 from "./Sample1";
import Main from "./mini/Main";

const Comp = () => {
  return (
    <div>
      <h1>useContext HOOK</h1>
      <h2>eg-1:</h2>
      <CompA />

      <br />
      <h2>eg-2:</h2>
      <Sample1 />
      <br />
      <Main />
    </div>
  );
};

export default Comp;
