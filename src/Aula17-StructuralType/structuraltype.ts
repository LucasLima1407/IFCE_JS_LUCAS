type User = { username: string, password: string }
type VerifyUserfn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserfn = (user, setValue) => {
  return user.username === setValue.username && user.password === setValue.password;
};
const bdUser = { username: "João", password: "12345678" };
const sentUser = { username: "João", password: "12345678" };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
