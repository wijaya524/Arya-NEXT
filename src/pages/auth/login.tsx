import { useRouter } from "next/router"


const Login = () => {
    const { push } = useRouter()
    const handleLogin = () => {
        push("/product")
    }
    return (
        <div className="flex  min-h-screen flex-col items-center justify-between p-24 text-3xl text-blue-500">
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )
}

export default Login