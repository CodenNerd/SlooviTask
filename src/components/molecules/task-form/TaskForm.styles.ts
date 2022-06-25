import styled from "styled-components";
import { border, formBackgroundColor } from "../../../utils/style-enums";

export default styled.div`
    border-top: ${border};
    background-color: ${formBackgroundColor};
    padding: 10px;
    .form-inner {
        form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 10px;

            .grid-col-2 {
                grid-column: 1/3;
            }
        }
    }
`