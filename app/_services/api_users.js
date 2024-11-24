import supabase from "../_lib/supabase";

async function signUp(user) {
  let { error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      data: {
        fullName: user.firstName + " " + user.lastName,
      },
    },
  });

  if (error) {
    console.error(error.message);
    return false;
  }
  return true;
}

async function getUser() {
  const {
    error,
    data: { user },
  } = await supabase.auth.getUser();

  if (error) {
    console.error(error.message);
    return false;
  }
  console.log(user);

  return user;
}
export { signUp, getUser };
