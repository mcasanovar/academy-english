import React from "react";
// fake data
import levelsData from "../fakeData/levels";
// components
import { WrapperSection, CardLevel, AddCardLevel } from "../components";

export default function Levels() {
  return (
    <WrapperSection title="Niveles">
      <div className="row">
        {levelsData.map((level, index) => (
          <div key={index} className="col-lg-3">
            <CardLevel
              title={level.title}
              description={level.description}
            />
          </div>
        ))}
        <div className="col-lg-3">
            <AddCardLevel />
          </div>
      </div>
    </WrapperSection>
  );
}
