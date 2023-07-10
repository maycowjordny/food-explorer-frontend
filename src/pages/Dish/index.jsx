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
import { useParams } from "react-router-dom";

export function Dish() {
    const { id } = useParams();
    const [nameDish, setNameDish] = useState("")
    const [price, setPrice] = useState("")
    const [isToEdit, setIsToEdit] = useState("")

    const [categories, setCategories] = useState([])
    const [newCategories, setNewCategories] = useState({ id: 0 })

    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")

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
        if (id) {
            setIsToEdit(true)
        } else {
            setIsToEdit(false)
        }
    }, [id])

    useEffect(() => {
        if (!nameDish.id || !categories.length) {
            return
        }

        setNewCategories(categories.filter(category => { return category.id == nameDish.category_id })[0])

    }, [categories, nameDish])

    const handleAddIngredient = () => {
        setIngredients(prevState => [...prevState, newIngredients])
        setNewIngredients("")
    }

    const handleRemoveIngredient = (deleted) => {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    return (
        <Container>
            <Header />
            <main>
                <div id="button-back">
                    <ButtonSvg icon={RiArrowLeftSLine} title="voltar" />
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
                            <label htmlFor="arquivo"> <RiUpload2Fill /> Selecione imagem </label>
                            <input type="file" name="arquivo" id="arquivo" />
                        </div>
                    </div>
                    <div id="name-dish">
                        <label htmlFor="name">Nome </label>
                        <Input
                            type="name"
                            placeholder="Ex.: Salada Ceasar"
                            onChange={(e) => setNameDish(e.target.value)}
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
                            placeholder="R$ 00,00"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="box-three">
                    <div id="inputTextArea">
                        <label htmlFor="description">Descrição</label>
                        <TextArea
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        />
                    </div>
                    {
                        isToEdit ?
                            <div id="buttons">
                                < Button
                                    id="buttonDelete"
                                    title="Excluir prato"
                                />
                                < Button
                                    id="button-save"
                                    title="Salvar alterações"
                                />
                            </div>
                            :
                            < Button
                                id="button-save"
                                title="Salvar alterações"
                            />
                    }
                </div>
            </main>
            <Footer />
        </Container>
    )
}