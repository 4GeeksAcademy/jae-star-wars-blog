import React from "react";
import { useParams } from "react-router";

export const SingleVehicle = (props) => {
  const params = useParams();
  {
    uid: "some-value";
  }
  const { store, actions } = useContext(Context);
  const [detail, setDetail] = useState();
  useEffect(() => {
    actions
      .getVehicle(params.uid)
      .then((detailVehicle) => setDetail(detailVehicle));
  }, []);
  return (
    <React.Fragment>
      {detail !== undefined ? (
        <div className="d-flex flex-column">
          <h2>hello vehicle with id: {params.uid}</h2>
          <p>{detail.properties.model}</p>
          <p>{detail.properties.vehicle_class}</p>
          <p>{detail.properties.manufacturer}</p>
        </div>
      ) : null}
    </React.Fragment>
  );
};
