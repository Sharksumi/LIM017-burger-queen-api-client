import axios, { AxiosError } from "axios";
import {
  createNewUsers,
  getUsers,
  updateUser,
  deleteUser,
} from "../../util/FunctionUsers";

jest.mock("axios");

const objUser = {
  config: {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1",
    },
  },
  data: [
    {
      email: "alf@burger.com",
      id: 7,
      password: "$2a$10$YzpON3GAaupH2IpwV4RnvOD3EMrY9nEtwm4j9JvpUbBaXnbB.MHeK",
      roles: { admin: true },
    },
  ],
};

const dataUser = [
  {
    email: "alf@burger.com",
    id: 7,
    password: "$2a$10$YzpON3GAaupH2IpwV4RnvOD3EMrY9nEtwm4j9JvpUbBaXnbB.MHeK",
    roles: { admin: true },
  },
];

const dataUserEdit = {
  email: "alf@burger.com",
  id: 7,
  password: "$2a$10$YzpON3GAaupH2IpwV4RnvOD3EMrY9nEtwm4j9JvpUbBaXnbB.MHeK",
  roles: { admin: true },
};

//Función crear nuevos usuarios

describe("createNewUsers", () => {
  test("should create New users", () => {
    axios.post.mockResolvedValue(objUser);
    return createNewUsers().then((res) => {
      expect(res).toStrictEqual(dataUser);
    });
  });
  test("should not create  product ", () => {
    axios.post.mockRejectedValue(AxiosError);
    return createNewUsers().catch((err) => {
      expect(err).toStrictEqual(AxiosError);
    });
  });
});

//Función obtener usuarios
describe("getUsers", () => {
  test("should get created users", () => {
    axios.get.mockResolvedValue(objUser);
    return getUsers().then((res) => {
      expect(res).toStrictEqual(dataUser);
    });
  });
  test("should not get  product ", () => {
    axios.get.mockRejectedValue([]);
    return getUsers(objUser).catch((err) => {
      expect(err).toStrictEqual([]);
    });
  });
});

//Función delete usuarios
describe("deleteUser", () => {
  test("should delete users", () => {
    axios.delete.mockResolvedValue([]);
    return deleteUser(objUser).then((res) => {
      expect(res).toStrictEqual([]);
    });
  });
  test("should show error when the product is not deleted ", () => {
    axios.delete.mockRejectedValue(dataUser);
    return deleteUser(objUser).catch((err) => {
      expect(err).toStrictEqual(dataUser);
    });
  });
});

// Función actualizar usuarios
describe("updateUser", () => {
  test("should edit and update users", () => {
    axios.patch.mockResolvedValue(objUser);
    return updateUser(dataUser).then((res) => {
      expect(res).toStrictEqual(dataUser);
    });
  });
  test("should show error when the product is updated ", () => {
    axios.patch.mockRejectedValue(dataUserEdit);
    return updateUser(dataUserEdit).catch((err) => {
      expect(err).toStrictEqual(dataUserEdit);
    });
  });
});

// {email: 'alf@burger.com', password: '$2a$10$Phxikxet8ZCx429HJYr46.rYKvboStgsNcjNhNn.vsscPr122UWnK', roles: {…}, id: 7}

// {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …}

// {accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…jcifQ.gC2LYr9GbT8lTGT0DRG82U4mNqcQD8_A-Zs4YzoNkTQ', user: {…}}
