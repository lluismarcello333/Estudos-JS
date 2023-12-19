async function getUsers() {
  try {
    const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
      headers: {
        "app-id": "6580b6bac24a7152458fb9df",
      },
    });
    const users = await resposta.json();

    console.log(users.data);
  } catch (erro) {
    console.log("Erro na requisição!", erro);
  }
}

async function getUser() {
  const response = await fetch(
    "https://dummyapi.io/data/v1/user/6581af45b2eede0e9138f096",
    {
      headers: {
        "app-id": "6580b6bac24a7152458fb9df",
      },
    }
  );
  const user = await response.json();
  console.log(user);
}

async function createUser() {
  const userData = {
    firstName: "Guilherme",
    lastName: "Saboia",
    email: "agorasfoi@gmail.com",
  };

  try {
    await fetch("https://dummyapi.io/data/v1/user/create", {
      method: "POST",
      headers: {
        "app-id": "6581a06bef60534cb2d2a9c2",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  } catch (erro) {
    console.log("Erro ao criar usuário!", erro);
  }
}

async function deleteUser() {
  try {
    const retorno = await fetch(
      "https://dummyapi.io/data/v1/user/65819fb59a6c3f6ccd673949",
      {
        method: "DELETE",
        headers: {
          "app-id": "6580b6bac24a7152458fb9df",
          "Content-Type": "application/json",
        },
    }
    );
    const userDeleted = await retorno.json();
  } catch (erro) {
    console.log("Erro na requisição!", erro);
  }
}

//getUsers();
//getUser();
//createUser;
deleteUser();
