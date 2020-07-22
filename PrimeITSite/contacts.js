import React from "react";

export const Contacts = () => {
  return (
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">
              PRIME IT - PORTO
            </strong>
            <h3 className="mb-0">AVENIDA DE FRANÇA, 20, 4º 4050-275 PORTO</h3>
            <div className="mb-1 text-muted">_____________</div>
            <p className="card-text mb-auto">+351 226 000 605</p>
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg
              className="bd-placeholder-img"
              width="200"
              height="250"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">
              PRIME IT - LISBOA
            </strong>
            <h3 className="mb-0">
              AVENIDA 5 DE OUTUBRO, Nº 125, 9º-B 1050 - 052 LISBOA
            </h3>
            <div className="mb-1 text-muted">_____________</div>
            <p className="mb-auto">+351 210 174 016</p>
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg
              className="bd-placeholder-img"
              width="200"
              height="250"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>
          </div>
        </div>
      </div>

      <h2 className="mt-5 contacts">Contacte-nos</h2>
      <form
        className="col-12 px-0 row"
        onSubmit={(event) => {
          alert("Formulario submetido!");
          event.preventDefault();
        }}
      >
        <div className="col-6">
          <label>Nome</label>
          <input className="w-100" type="text" />
          <br />
        </div>
        <div className="col-6">
          <label>Email</label>
          <input className="w-100" type="email" />
          <br />
        </div>
        <div className="col-12 mt-3">
          <label>Mensagem</label>
          <br />
          <textarea className="w-100" rows="5" />
          <br />
        </div>
        <div className="col-auto ml-auto mt-3">
          <button className="submit" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
