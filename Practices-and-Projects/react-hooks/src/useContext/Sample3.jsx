// import { CountContext } from "./Sample1";

const Sample3 = ({ countValue, setCountValue }) => {
  return (
    <div>
      <p>{countValue}</p>
      <button onClick={() => setCountValue(countValue + 1)}>click!!</button>
      {/* {({ count, setcount }) => (
        <>
          <p>{count}</p>
          <button onClick={() => setcount(count + 1)}>click!!</button>
        </>
      )} */}
      <Layout title="Welcome">
        <div style={{ border: "1px solid #a3a3a3" }}>
          <p>This is the main content.</p>
          <p>More content goes here.</p>
        </div>
      </Layout>
    </div>
  );
};

export default Sample3;

function Layout({ title, children }) {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
