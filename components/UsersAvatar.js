import Router from "next/router";

const UsersAvatar = (props) => {
  return (
    <div
      className="container d-flex "
      style={{ justifyContent: "space-around", flexWrap: "wrap" }}
    >
      {props.user.map((user) => (
        <div key={user.id} className="card mt-3" style={{ width: "13rem" }}>
          <img
            src={user.avatar}
            className="card-img-top"
            alt={user.first_name + user.last_name}
            style={{ objectFit: "none", borderRadius: "50%" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {user.first_name} {user.last_name}
            </h5>
            <p className="card-text">{user.email}</p>
            <a
              href="#"
              className="btn btn-primary text-center"
              onClick={(e) =>
                Router.push("/UsersAvatar/[id]", `/UsersAvatar/${user.id}`)
              }
            >
              Ver perfil
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersAvatar;
