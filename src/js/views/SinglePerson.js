import React from "react";
import { useParams } from "react-router";

export const SinglePerson = (props) => {
  const params = useParams();
  {
    uid: "some-value";
  }
  const { store, actions } = useContext(Context);
  const [detail, setDetail] = useState();
  useEffect(() => {
    actions
      .getCharacter(params.uid)
      .then((detailCharacter) => setDetail(detailCharacter));
  }, []);
  return (
    <React.Fragment>
      {detail !== undefined ? (
        <div className="d-flex flex-column">
          <h2>hello person with id: {params.uid}</h2>
          <p>{detail.properties.eye_color}</p>
          <p>{detail.properties.eye_color}</p>
          <p>{detail.description}</p>
        </div>
      ) : null}
    </React.Fragment>
  );
};
