import '../App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event) {
        // to stop the refreshing of the page
        event.preventDefault();

        const response = await fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify
            ({
                email,
                password,
            }),
        })

        const data = await response.json();

        console.log(data);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder={"Email"}
                />
                <br/>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder={"Password"}
                />
                <br/>
                <input
                    type="submit"
                    value={"Register"}/>
            </form>
        </div>
    );
}

export default App;
