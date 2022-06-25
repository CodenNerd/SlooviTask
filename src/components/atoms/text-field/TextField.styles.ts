import styled from "styled-components";
import { fieldsOutline, fieldsBackground, fieldsBorder, fieldsBorderRadius, fieldsPadding, fieldsTextColor } from "../../../utils/style-enums";

export default styled.div`
    position: relative;
    input {
        display: block;
        width: 100%;
        outline: none;
        background: ${fieldsBackground};
        border: ${fieldsBorder};
        border-radius: ${fieldsBorderRadius};
        padding: ${fieldsPadding};
        color: ${fieldsTextColor};
        font-size: 15px;
        font-weight: 500;
        &:focus {
            outline: ${fieldsOutline};;
        }
        &:focus ~ span, &:hover ~ span {
            svg {
                transition: all .3s;
                color: black;
            }
        }
    }
    span {
        position: absolute;
        right: 10px;
        top: 0;
        padding: ${fieldsPadding};
        display: inline-block;
        height: 100%;
        svg {
            width: 100%;
            height: 100%;
            color: grey;
        }
    }
`