import {  useSession } from "next-auth/react";
import { Roboto } from "next/font/google"; 

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["900", "900"],
})
const ProfilePage = () => {
    const { data } : any = useSession();
    return (
        <div className={roboto.className}>
            Profile Page
            <h2>{data && data.user.fullname}</h2>
        </div>
    )
}
export default ProfilePage;