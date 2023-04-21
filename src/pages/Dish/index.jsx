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
    return (
        <Container>
            <Header />
            <main>
                <ButtonSvg icon={RiArrowLeftSLine} title="voltar" />
                <h2>Adicionar prato</h2>

                <div id="info-dish">

                    <div id="file">
                        <label htmlFor="file">Imagem do prato</label>
                        <label htmlFor="arquivo" id="labelFile"><RiUpload2Fill />selecione uma imagem</label>
                        <input
                            type="file"
                            name="arquivo"
                            id="arquivo"
                            placeholder="Selecione imagem" />
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

                <div className="ingradients-wrapper">
                    <label htmlFor="ingredients">Ingredientes</label>
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

                <div id="description">
                    <label htmlFor="description">Descrição</label>
                    <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
                </div>

                <div id="button-save-delete">
                    <Button title="Salvar alterações" />
                    <Button title="Excluir prato" />
                </div>
            </main>
            <Footer />
        </Container>
    )
}