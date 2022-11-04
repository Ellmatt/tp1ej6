const URL = "http://localhost:4000/apiColor/colores";

export const consultarApi = async () => {
  try {
    const respuesta = await fetch(URL);

    const listaProductos = await respuesta.json();

    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const crearColorApi = async (tarea) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarColorApi = async (id) => {
  console.log(id);
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};