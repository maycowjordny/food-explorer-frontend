import { Container } from "./styles";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { ButtonSvg } from "../../componentes/buttonSvg";
import { Input } from "../../componentes/Input";
import { IngredientsTags } from "../../componentes/IngredientsTags"
import { RiArrowLeftSLine, RiUpload2Fill } from "react-icons/ri";

export function Dish() {
    return (
        <Container>
            <Header />
            <main>
                <ButtonSvg icon={RiArrowLeftSLine} title="voltar" />
                <h2>Adicionar prato</h2>

                <div id="info-dish">

                    <div>
                        <label htmlFor="file">Imagem do prato</label>
                        <label htmlFor="arquivo" id="labelFile"><RiUpload2Fill />selecione uma imagem</label>
                        <input
                            type="file"
                            name="arquivo"
                            id="arquivo"
                            placeholder="Selecione imagem" />
                    </div>

                    <div>
                        <label htmlFor="name">Nome </label>
                        <Input
                            type="name"
                            placeholder="Ex.: Salada Ceasar"
                        />
                    </div>

                    <div>
                        <label htmlFor="category">Categoria</label>
                        <select>
                            <option value={"Selecione uma categoria"}>Selecione uma categoria</option>
                        </select>
                    </div>

                </div>

                <div id="ingredients-tags">
                    <IngredientsTags

                        value="ALOO"
                        isNew
                    />
                </div>
            </main>
            <Footer />
        </Container>
    )
}