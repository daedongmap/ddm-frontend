import React from "react";
import { useParams } from "react-router-dom";

function ClubDetailPage() {
  const { clubName } = useParams();

  return (
    <>
      <div>{clubName}</div>
    </>
  );
}

export default ClubDetailPage;
