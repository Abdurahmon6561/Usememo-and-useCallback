const ImpureComponent = ({ count }) => {
  console.log("Impure Component Rendered");
  return (
    <div className="text-center mt-4 text-yellow-500">
      Impure Component Count: {count}
    </div>
  );
};

export default ImpureComponent;
