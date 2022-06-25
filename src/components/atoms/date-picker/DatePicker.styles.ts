import styled from "styled-components";
import { fieldsBackground, fieldsBorder, fieldsBorderRadius, fieldsOutline, fieldsPadding, fieldsTextColor } from "../../../utils/style-enums";

export default styled.div`
    position: relative;

    input::-webkit-calendar-picker-indicator{
        position: absolute;
        margin: -25px;
        opacity: 0;
    }

    input {
        display: block;
        width: 100%;
        outline: none;
        background: ${fieldsBackground};
        border: ${fieldsBorder};
        border-radius: ${fieldsBorderRadius};
        padding: ${fieldsPadding};
        padding-left: 35px;
        color: ${fieldsTextColor};
        font-size: 15px;
        font-weight: 500;
        &:focus {
            outline: ${fieldsOutline};;
        }
    }

    span {
        position: absolute;
        left: 4px;
        top: 7.5%;
        padding: ${fieldsPadding};
        display: inline-block;
        height: 85%;
        pointer-events: none;
        svg {
            width: 100%;
            height: 100%;
            color: grey;
        }
    }

`