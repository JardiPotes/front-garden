import React from "react";
import { WORDINGS } from "../../wordings";

export function Description() {
  return (
    <div>
      <h1>{WORDINGS.title}</h1>
      <p>{WORDINGS.description}</p>
    </div>
  );
}
