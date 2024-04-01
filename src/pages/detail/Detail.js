import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovDetail } from "../../api/api";
import { Loading } from "../../components/Loading";
import { Content } from "./Content";
import { HelmetTitle } from "../../components/HelmeTitle";
export const Detail = () => {
  const { id } = useParams();
  const [isLoading, IsLoading] = useState(true);
  const [data, SetData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const details = await MovDetail(id);
        console.log(details);
        SetData(details);
        IsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <>
            <HelmetTitle title={"Detail"} />
            <Content Data={data} />
          </>
        )
      )}
    </>
  );
};
