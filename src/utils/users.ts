type userType = {
  name: string;
  email: string;
  password: string;
  favorites: string[];
};
type outputFunction = Omit<userType, "password">;

export let users: userType[] = [
  {
    name: "ali",
    email: "ali@gmail.com",
    password: "12345",
    favorites: ["1", "2"],
  },
];

export const findUserByEmail = async (
  mail: string,
  pass: string
): Promise<{ message: string; user: null | outputFunction }> => {
  const user = users.find(
    (user) => user.email.toLocaleLowerCase() === mail.toLocaleLowerCase()
  );
  if (!user) {
    return { message: "Your Email doesn't Exist! please Signup!", user: null };
  }
  if (user.password !== pass) {
    return {
      message: "Your Password is incorrect, please enter carefully!",
      user: null,
    };
  }
  return {
    message: "Welcome, you logged in successfully!",
    user: { email: user.email, name: user.name, favorites: user.favorites },
  };
};

export const isInFavorites = async (carsId: string, favorites: string[]) => {
  const isLiked = favorites.includes(carsId);
  return isLiked;
};
