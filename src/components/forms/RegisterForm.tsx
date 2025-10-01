

export default function RegisterForm() {
    return (
        <form action="">
            <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}