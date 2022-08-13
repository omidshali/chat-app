import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="w-full max-w-[728px]  mx-auto ">
      <section className="bg-gray-100 flex flex-col mt-10  h-[90vh] border shadow-lg ">
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
