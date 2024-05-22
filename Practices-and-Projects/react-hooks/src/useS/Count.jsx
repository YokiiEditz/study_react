const Count = ({ text, count }) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} is {count}
    </div>
  );
};

export default Count;
