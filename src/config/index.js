export const services = [
  {
    route: "/auth",
    target: "http://localhost:3001/auth",
  },
  {
    route: "/users",
    target: "http://localhost:3004/users",
  },
  {
    route: "/chats",
    target: "http://localhost:3002/chats",
  },
  {
    route: "/payment",
    target: "http://localhost:3003/payment",
  },
  // Add more services as needed either deployed or locally.
];
