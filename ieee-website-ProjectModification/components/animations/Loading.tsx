import React from "react";
import { Dna } from "react-loader-spinner";

export default function Loading() {
  return (
    <div>
      <Dna
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}
