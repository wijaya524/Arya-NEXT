import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data } : any = useSession();
  return (
    <div className="w-full bg-slate-500 text-white p-5 flex justify-between">
      <h2>Navbar</h2>
      <h2>{data && data.user.fullname}</h2>
      {data ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
};

export default Navbar;
