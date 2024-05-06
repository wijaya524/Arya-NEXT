
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data } : any = useSession();
  return (
    <div className="w-full bg-slate-500 text-white p-5 flex justify-between items-center">
      <h2>Navbar</h2>
      <div className="flex items-center justify-center gap-5 ">
      {data?.user?.image && (<Image  className="w-12 h-12 rounded-full" src={data.user.image} alt={data.user.fullname} />)}
      <h2 className=" text-2xl font-bold">{data && data.user.fullname}{''}</h2>
      {data ? (
        <button className=" bg-slate-300 text-black"  onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button  className=" bg-slate-300 text-black"  onClick={() => signIn()}>Sign in</button>
      )}
      </div>
    </div>
  );
};

export default Navbar;
