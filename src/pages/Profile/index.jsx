import { Container, ProfileImg, Form } from "./style";
import { Input } from "../../componentes/Input"
import { ButtonSvg } from "../../componentes/buttonSvg"
import { Button } from "../../componentes/button"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'
export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/"><ButtonSvg icon={FiArrowLeft} id="button-back" /></Link>
            </header>
            <Form>

                <ProfileImg>
                    <img src="https://github.com/maycowjordny.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">

                        <FiCamera />
                        <input id="avatar" type="file" />
                    </label>
                </ProfileImg>

                <Input
                    icon={FiUser}
                    type="name"
                    placeholder="Nome"
                />
                <Input
                    icon={FiMail}
                    type="email"
                    placeholder="E-mail"
                />
                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Senha atual"
                />
                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Nova senha"
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}