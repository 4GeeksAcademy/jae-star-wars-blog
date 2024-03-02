import React from "react";
import { useParams } from "react-router";

export const SinglePlanet = (props) => {
  const params = useParams();
  {
    uid: "some-value";
  }
  const { store, actions } = useContext(Context);
  const [detail, setDetail] = useState();
  useEffect(() => {
    actions
      .getPlanet(params.uid)
      .then((detailPlanet) => setDetail(detailPlanet));
  }, []);
  return (
    <React.Fragment>
      {detail !== undefined ? (
        <div className="d-flex flex-column">
          <h2>hello planet with id: {params.uid}</h2>
          <p>{detail.properties.population}</p>
          <p>{detail.properties.terrain}</p>
        </div>
      ) : null}
    </React.Fragment>
  );
};
