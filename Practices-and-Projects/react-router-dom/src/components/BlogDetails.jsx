import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();
  const data = blogId;
  return (
    <div>
      <h2>BlogDetails</h2>
      <p>Data is: {data} </p>
    </div>
  );
};

export default BlogDetails;
