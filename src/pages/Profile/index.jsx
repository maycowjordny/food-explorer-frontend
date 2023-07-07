import { Container, ProfileImg, Form } from "./style";
import { Input } from "../../componentes/Input"
import { ButtonSvg } from "../../componentes/buttonSvg"
import { Button } from "../../componentes/button"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { AvatarPlaceHolder } from "../../assets/avatarPlaceHolder.jpg"

export function Profile() {
    const { user, updateProfile } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const [password, setPassword] = useState("")
    const [newPassword, setNewpassord] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceHolder;
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

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