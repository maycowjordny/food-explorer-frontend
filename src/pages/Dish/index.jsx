import { Container } from "./styles";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { ButtonSvg } from "../../componentes/buttonSvg";
import { Input } from "../../componentes/Input";
import { IngredientsTags } from "../../componentes/IngredientsTags"
import { RiArrowLeftSLine, RiUpload2Fill } from "react-icons/ri";
import { Button } from "../../componentes/button";
import { TextArea } from "../../componentes/textArea"
import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { useParams, useNavigate, Link } from "react-router-dom";

export function Dish() {
    const { id } = useParams();
    const [isToEdit, setIsToEdit] = useState("")
    const [dish, setDish] = useState({})
    const [nameDish, setNameDish] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [newCategories, setNewCategories] = useState({ id: 0 })
    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")

    const [image, setImage] = useState()
    const [imageFile, setImageFile] = useState(null)

    useEffect(() => {
        if (id) {
            setIsToEdit(true)
        } else {
            setIsToEdit(false)
        }
    }, [id])


    useEffect(() => {
        async function FetchCategories() {
            const response = await api.get("/categories")
            setCategories(response.data)
        }

        async function FetchDishById() {
            const response = await api.get(`/dishes/${id}`)
            setDish(response.data)
        }

        FetchCategories()
        if (isToEdit) {
            FetchDishById();
        }
    }, [isToEdit])

    useEffect(() => {
        if (!dish.id || !categories.length) {
            return
        }

        setNameDish(dish.name)
        setDescription(dish.description)
        setPrice(dish.price)
        setNewCategories(categories.filter(category => { return category.id == dish.category_id })[0])
        const ingredientsName = dish.ingredients.map(ingredient => {
            return ingredient.name
        })
        setIngredients(ingredientsName)
        setImageFile(dish.image)
    }, [categories, dish])

    function handleChangeImage(event) {
        const file = event.target.files[0]
        setImageFile(file)
        const imagePreview = URL.createObjectURL(file)
        setImage(imagePreview)
    }
    const handleAddIngredient = () => {
        if (!newIngredients) {
            return alert("Você esqueceu de adicionar um novo ingrediente.");
        }

        setIngredients(prevState => [...prevState, newIngredients])
        setNewIngredients("")
    }

    const handleRemoveIngredient = (deleted) => {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    async function handleNewDish() {
        if (!nameDish) {
            return alert("Você esqueceu de adicionar um nome para seu prato.")
        }

        if (newCategories == "Selecione uma categoria" || newCategories.id == 0) {
            return alert("Você esqueceu de adicionar uma categoria para seu prato.")
        }

        if (!price) {
            return alert("Você esqueceu de adicionar um preço para seu prato.")
        }

        if (ingredients.length === 0) {
            return alert("Você esqueceu de adicionar os ingredientes do seu prato.");
        }

        if (!description) {
            return alert("Você esqueceu de adicionar uma descrição para seu prato.")
        }


        let body = new FormData();

        if (imageFile) {
            body.append("image", imageFile);
        } else {
            body.append("image", imageFile || dish.image);
        }
        body.append("name", nameDish)
        body.append("description", description)
        body.append("category_id", parseInt(newCategories.id ? newCategories.id : newCategories))
        body.append("price", price)
        body.append("ingredients[]", ingredients)


        if (isToEdit) {
            await api.put(`/dishes/${id}`, body, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            alert("Prato atualizado com sucesso!");
            navigate("/")

        } else {
            await api.post("/dishes", body, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }

            })

            setIngredients([])
            setImageFile(null)
            setNameDish('')
            setDescription('')
            setPrice('')
            setNewCategories({ id: 0 })

            alert("Prato criado com sucesso!");
            navigate("/")
        }

    }

    async function handleDeleteDish() {
        if (confirm("Deseja realmente deletar este prato?")) {
            await api.delete(`dishes/${id}`)

            alert("Prato deletado com sucesso!");
            navigate("/")
        } else {
            return
        }
    }

    return (
        <Container>
            <Header />
            <main>
                <div id="button-back">
                    <ButtonSvg icon={RiArrowLeftSLine} title="voltar" onClick={() => navigate(-1)} />
                </div>
                <div className="box-title">
                    {
                        isToEdit ?
                            <h2>Editar prato</h2>
                            :
                            <h2>Adicionar prato</h2>
                    }
                </div>
                <div className="box-one">
                    <div id="info-dish">
                        <label htmlFor="file">Imagem do prato</label>
                        <div id="file">
                            <label htmlFor="arquivo">
                                <RiUpload2Fill /> Selecione imagem
                            </label>
                            <input
                                type="file"
                                name="arquivo"
                                id="arquivo"
                                onChange={handleChangeImage}
                            />
                        </div>
                    </div>
                    <div id="name-dish">
                        <label htmlFor="name">Nome </label>
                        <Input
                            type="name"
                            id="name"
                            value={nameDish}
                            placeholder="Ex.: Salada Ceasar"
                            onChange={e => setNameDish(e.target.value)}
                        />
                    </div>
                    <div id="category">
                        <label htmlFor="category">Categoria</label>
                        <select value={newCategories.id} onChange={e => setNewCategories(e.target.value)}>
                            <option value={"Selecione uma categoria"}>Selecione uma categoria</option>
                            {
                                categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                </div>
                <div className="box-two">
                    <div className="ingradients-wrapper">
                        <label htmlFor="ingredients" id="ingredients">Ingredientes</label>
                        <div id="input-tags">
                            {
                                ingredients.map((ingredient, index) => (

                                    <IngredientsTags
                                        value={ingredient}
                                        key={String(index)}
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                    />

                                ))
                            }
                            <IngredientsTags
                                isNew
                                placeholder="Adicionar"
                                value={newIngredients}
                                onChange={e => setNewIngredients(e.target.value)}
                                onClick={handleAddIngredient}
                            />
                        </div>
                    </div>
                    <div id="price">
                        <label htmlFor="price">Preço</label>
                        <Input
                            type="number"
                            id="price"
                            placeholder="R$ 00,00"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="box-three">
                    <div id="inputTextArea">
                        <label htmlFor="description">Descrição</label>
                        <TextArea
                            id="description"
                            value={description}
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    {
                        isToEdit ?
                            <div id="buttons">
                                < Button
                                    id="buttonDelete"
                                    title="Excluir prato"
                                    onClick={handleDeleteDish}
                                />
                                < Button
                                    id="button-save"
                                    title="Salvar alterações"
                                    onClick={handleNewDish}
                                />
                            </div>
                            :
                            < Button
                                id="button-save"
                                title="Salvar alterações"
                                onClick={handleNewDish}
                            />
                    }
                </div>
            </main>
            <Footer />
        </Container>
    )
}