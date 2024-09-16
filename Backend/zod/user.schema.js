import zod from "zod";
export const userSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8),
});
