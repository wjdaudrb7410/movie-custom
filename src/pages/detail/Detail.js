import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovDetail, Movid } from "../../api/api";
import { Loading } from "../../components/Loading";
import { Content } from "./Content";
import { HelmetTitle } from "../../components/HelmeTitle";
export const Detail = () => {
  const { id } = useParams();
  const [vid, Setvid] = useState();
  const [isLoading, IsLoading] = useState(true);
  const [data, SetData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const details = await MovDetail(id);
        const vid = await Movid(id);
        console.log(vid);
        console.log(details);
        SetData(details);
        Setvid(vid);
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
            <Content Data={data} Vids={vid.results[0].key} />
          </>
        )
      )}
    </>
  );
};
