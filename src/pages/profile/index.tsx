import {  useSession } from "next-auth/react";

const ProfilePage = () => {
    const { data } : any = useSession();
    return (
        <div>
            Profile Page
            <h2>{data && data.user.fullname}</h2>
        </div>
    )
}
export default ProfilePage;