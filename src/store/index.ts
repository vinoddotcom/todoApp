import { type } from "os";
import { defineStore } from "pinia";
import { Ref } from "vue";
import axios from "axios";
type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

const useStore = defineStore("todo", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically

      users: [] as Array<User>,
      user: "" as string,
      userName: "" as string,
      email: "" as string,
      counter: 11 as number,
      addOrUpdate: true as boolean,
      upadteUser: null as User | null,
    };
  },
  getters: {
    getTodoById: (state) => {
      return (userId: number) => state.users.find((user) => user.id === userId);
    },
  },
  actions: {
    addUser() {
      let Geo: Geo = {
        lat: "string",
        lng: "string",
      };

      let Address: Address = {
        street: "string",
        suite: "string",
        city: "string",
        zipcode: "string",
        geo: Geo,
      };

      let Company: Company = {
        name: "string",
        catchPhrase: "string",
        bs: "string",
      };

      this.users.push({
        id: this.counter,
        name: this.user,
        username: this.userName,
        email: this.email,
        address: Address,
        phone: "string",
        website: "Website",
        company: Company,
      });
      this.counter++;
      this.user = "";
      this.userName = "";
      this.email = "";
    },
    onDelete(id: number) {
      this.users = this.users.filter((item: User) => item.id !== id);
    },
    onEdit(id: number) {
      this.addOrUpdate = false;
      let editUser = this.users.find((item: User) => item.id === id);
      if (editUser !== undefined) {
        this.user = editUser.name;
        this.userName = editUser.username;
        this.email = editUser.email;
        this.upadteUser = editUser;
      }
    },
    onUpdate() {
      if (this.upadteUser !== null) {
        let foundIndex = this.users.findIndex(
          (x) => x.id == this.upadteUser?.id
        );
        this.users[foundIndex].name = this.user;
        this.users[foundIndex].username = this.userName;
        this.users[foundIndex].email = this.email;
      }
      this.user = "";
      this.userName = "";
      this.email = "";
      this.addOrUpdate = true;
    },
  },
});

export default useStore;
