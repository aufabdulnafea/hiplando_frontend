import TextInput from "./TextInput"


export default function LoginForm() {
    return (
        <form action="">
            <TextInput id="email" type="email" placeholder="E-mail" />
            <TextInput id="password" type="password" placeholder="Password" />
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}