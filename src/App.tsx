import Title from "./components/Title.tsx";
import OTPExample from "./components/OTPExample.tsx";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
        <Title />
        <OTPExample />
      </div>
    </>
  );
}

export default App;
