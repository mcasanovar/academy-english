import React from "react";
// fake data
import levelsData from "../fakeData/levels";
// components
import { WrapperSection, CardLevel, AddCardLevel, Modal } from "../components";

export default function Levels() {
  return (
    <WrapperSection title="Niveles">
      <div className="row">
        {levelsData.map((level, index) => (
          <div key={index} className="col-lg-3">
            <CardLevel title={level.title} description={level.description} />
          </div>
        ))}
        <div className="col-lg-3">
          <AddCardLevel />
        </div>
      </div>
      {/* Crear Nivel */}
      <Modal title="Nuevo Nivel" textAcceptButton="Crear">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Titulo
        </label>
        <input
          class="form-control form-control-sm"
          type="text"
          placeholder=""
          aria-label=".form-control-sm example"
        />
        <br/>
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Descripción
        </label>
        <textarea
          class="form-control"
          placeholder=""
          id="floatingTextarea"
        ></textarea>
      </Modal>
    </WrapperSection>
  );
}
