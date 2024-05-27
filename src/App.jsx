import ImpureComponent from "./components/ImpureComponent";
import MediaComponent from "./components/MediaComponent";
import PureComponent from "./components/PureComponent";
import Sum from "./components/Sum";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <Sum />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-center text-gray-700">React Project</h1>
        <Todos />
        <PureComponent count={10} />
        <ImpureComponent count={20} />
        <MediaComponent />
      </div>
    </div>
  );
};

export default App;
