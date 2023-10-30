export const DogFact = (props) => {
  // Render the 'body' if available, otherwise show a loading message
  return <div className="fact">{props.body || "Loading..."}</div>;
};