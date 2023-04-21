import { Container } from "./styles";
import { FiX, FiPlus } from "react-icons/fi"

export function IngredientsTags({ value, onClick, isNew, ...rest }) {

    return (
        <Container isNew={isNew}>
            <input type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}>
                {isNew ? < FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}