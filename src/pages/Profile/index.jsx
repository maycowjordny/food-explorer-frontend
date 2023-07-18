import { Container, ProfileImg, Form } from "./style";
import { Input } from "../../componentes/Input"
import { ButtonSvg } from "../../componentes/buttonSvg"
import { Button } from "../../componentes/button"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import ProfileAvatarPlaceholder from "../../assets/ProfileAvatarPlaceholder.png"
import { Footer } from "../../componentes/footer"
import { api } from "../../service/api";

export function Profile() {
    const { user, updateProfile } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState("")
    const [passwordNew, setPasswordNew] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : ProfileAvatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)


    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleUpdate();
        }
    };
    return (
        <Container>
            <header>
                <Link to="/"><ButtonSvg icon={FiArrowLeft} id="button-back" /></Link>
            </header>
            <Form onKeyDown={handleKeyDown}>

                <ProfileImg>
                    <img src={avatar}
                        alt="Foto do usuário"
                    />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </ProfileImg>

                <Input
                    icon={FiUser}
                    type="text"
                    value={name}
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    icon={FiMail}
                    type="email"
                    value={email}
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Senha atual"
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Nova senha"
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar"
                    onClick={handleUpdate}
                />
            </Form>
            <Footer />
        </Container>
    )
}