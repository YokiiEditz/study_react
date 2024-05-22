function Message() {
  const personName = "Yokesh.B";
  if (personName) return <h2>Hello {personName}</h2>;
  return <h2>Hello Bruh!</h2>;
}

export default Message;
