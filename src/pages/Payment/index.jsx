import { Container } from "./styles"
import { PayOut } from "../../componentes/payOut"
import { NewHeader } from "../../componentes/newHeader"
import { Footer } from "../../componentes/footer"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { Resize } from "../../utils/index";
export function Payment() {
    const onlyMobile = Resize()
    return (
        <Container>
            <NewHeader />

            {
                onlyMobile < WINDOW_MOBILE_WIDTH ?
                    < main >
                        <h2>Pagamento</h2>
                        <PayOut />
                    </main>
                    :
                    null
            }
            <Footer />
        </Container >
    )
}