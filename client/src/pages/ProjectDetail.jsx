import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_PROJECT } from "../queries/projectQueries";
import Loader from "../components/Loader";
import Header from "../components/Header";
import ClientInfo from "../components/ClientInfo";

const ProjectDetail = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Loader />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      <Header />
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to={"/"} className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1 className="mt-3">{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>

          <ClientInfo client={data.project.client} />
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
