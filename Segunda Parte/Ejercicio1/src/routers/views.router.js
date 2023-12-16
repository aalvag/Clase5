import { Router } from "express";

const users = [
  {
    name: "David",
    lastName: "Gonzalez",
    age: 23,
    phone: 123456789,
    email: "d@g.com",
    role: "admin",
  },
  {
    name: "Ana",
    lastName: "Gonzalez",
    age: 23,
    phone: 123456789,
    email: "a@g.com",
    role: "user",
  },
  {
    name: "Maria",
    lastName: "Gonzalez",
    age: 23,
    phone: 123456789,
    email: "m@g.com",
    role: "user",
  },
  {
    name: "Luis",
    lastName: "Gonzalez",
    age: 23,
    phone: 123456789,
    email: "l@g.com",
    role: "user",
  },
  {
    name: "Pedro",
    lastName: "Gonzalez",
    age: 23,
    phone: 123456789,
    email: "p@g.com",
    role: "admin",
  },
];

const food = [
  { name: "Pizza", price: 10 },
  { name: "Hamburguesa", price: 5 },
  { name: "Papas", price: 3 },
  { name: "Patatas", price: 2 },
  { name: "Coca Cola", price: 1 },
  { name: "Pepsi", price: 1 },
];

const router = Router();

router.get("/", (req, res) => {
  const random = Math.floor(Math.random() * users.length);
  res.render("index", { user: users[random], isAdmin: users[random].role === "admin", food });
});

export default router;
