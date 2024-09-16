import { User } from "../../user.schema";

async function userExits(username) {
  const user = await User.findOne({ username: username });
  return user ? user : null;
}
