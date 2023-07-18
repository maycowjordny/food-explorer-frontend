import { Container, Form } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from "../../componentes/Input";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"
import { Button } from "../../componentes/button"
import { Resize } from "../../utils/index";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signIn } = useAuth()

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSignIn();
        }
    };

    function handleSignIn() {
        signIn({ email, password })
    }


    const isMobile = Resize();
    return (
        <Container>
            <section>
                <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C" />
                </svg>

                <h6>food explorer</h6>
            </section>

            <main>
                <Form onKeyDown={handleKeyDown}>

                    {
                        isMobile > WINDOW_MOBILE_WIDTH ?
                            <h2>Faça login</h2> : null
                    }

                    <div>
                        <label htmlFor="email">Email</label>
                        <Input
                            type="email"
                            icon={FiMail}
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>


                    <div>
                        <label htmlFor="password">Senha</label>
                        <Input
                            type="password"
                            icon={FiLock}
                            placeholder="No mínimo 6 caracteres"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button title="Entrar" onClick={handleSignIn} />
                    <Link to="/register">Criar uma conta</Link>
                </Form>
            </main>
        </Container>
    )
}