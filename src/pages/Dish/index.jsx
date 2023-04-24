import { Container } from "./styles";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { ButtonSvg } from "../../componentes/buttonSvg";
import { Input } from "../../componentes/Input";
import { IngredientsTags } from "../../componentes/IngredientsTags"
import { RiArrowLeftSLine, RiUpload2Fill } from "react-icons/ri";
import { Button } from "../../componentes/button";
import { TextArea } from "../../componentes/textArea"


export function Dish() {

    const isToEdit = false

    return (
        <Container>
            <Header />
            <div id="button-back">
                <ButtonSvg icon={RiArrowLeftSLine} title="voltar" />
            </div>
            {
                isToEdit ? <h2>Editar prato</h2>
                    :
                    <h2>Adicionar prato</h2>
            }
            <main>
                <div className="box-one">
                    <div id="info-dish">
                        <label htmlFor="file">Imagem do prato</label>
                        <div id="file">
                            <label for="arquivo"> <RiUpload2Fill /> Selecione imagem </label>
                            <input type="file" name="arquivo" id="arquivo" />
                        </div>
                    </div>
                    <div id="name-dish">
                        <label htmlFor="name">Nome </label>
                        <Input
                            type="name"
                            placeholder="Ex.: Salada Ceasar"
                        />
                    </div>
                    <div id="category">
                        <label htmlFor="category">Categoria</label>
                        <select>
                            <option value={"Selecione uma categoria"}>Selecione uma categoria</option>
                        </select>
                    </div>

                </div>
                <div className="box-two">
                    <div className="ingradients-wrapper">
                        <label htmlFor="ingredients" id="ingredients">Ingredientes</label>
                        <div id="input-tags">
                            <IngredientsTags
                                value="pão"
                            />
                            <IngredientsTags
                                placeholder="Adicionar"
                                isNew
                            />
                        </div>
                    </div>
                    <div id="price">
                        <label htmlFor="price">Preço</label>
                        <Input
                            type="number"
                            placeholder="R$ 00,00"
                        />
                    </div>
                </div>
                <div id="description">
                    <label htmlFor="description">Descrição</label>
                    <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
                </div>
                {
                    isToEdit ?
                        <>
                            <div className="button-wrapper">
                                <Button title="Excluir prato" id="button-delete" />
                                <Button title="Salvar alterações" className="button-save" />
                            </div>
                        </>
                        :
                        <div className="button-wrapper">
                            <Button title="Salvar alterações" className="button-save" />
                        </div>
                }
            </main>
            <Footer />
        </Container>
    )
}