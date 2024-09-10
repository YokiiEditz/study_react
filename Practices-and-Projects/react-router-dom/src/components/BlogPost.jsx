import { useSearchParams } from "react-router-dom";

const BlogPost = () => {
  const [search, setSearch] = useSearchParams();

  const showActiveUsers = search.get("filters") === "active";

  return (
    <div>
      <button onClick={() => setSearch({ filters: "active" })}>
        Active Users
      </button>

      <button onClick={() => setSearch({})}>Reset</button>

      {showActiveUsers ? <h2>Showing Active users</h2> : <h2>All Users</h2>}
    </div>
  );
};

export default BlogPost;
