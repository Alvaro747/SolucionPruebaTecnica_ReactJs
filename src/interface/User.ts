export interface InterfaceUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
  };
  dob: {
    date: string;
  };
  cell: string;
  email: string;
  login: {
    password: string;
  };
  picture: {
    large: string;
  };
}

export interface IUserName {
  name: {
    title: string;
    first: string;
    last: string;
  };
}

export interface IUserLogin {
  login: {
    password: string;
  };
}

export interface IAddress {
  location: {
    street: {
      number: number;
      name: string;
    };
  };
}

export interface IEmail {
  email: string;
}
export interface IBirthday {
  dob: {
    date: string;
  };
}

export interface ICell {
  cell: string;
}

