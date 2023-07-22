import AddClient from "../components/AddClient";
import AddProject from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Header from "../components/Header";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex gap-3 mb-4">
          <AddClient />
          <AddProject />
        </div>
        <Projects />
        <hr />
        <Clients />
      </div>
    </>
  );
};

export default HomePage;
