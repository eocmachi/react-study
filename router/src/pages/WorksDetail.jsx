import React from "react";
import { useParams } from "react-router-dom";

export default function WorksDetail() {
  const { worksId } = useParams();
  return <div>WorksDetail {worksId}</div>;
}
