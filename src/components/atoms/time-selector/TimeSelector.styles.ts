import styled from "styled-components";
import { fieldsBackground, fieldsBorder, fieldsBorderRadius, fieldsPadding, fieldsTextColor, fieldsOutline } from "../../../utils/style-enums";

export default styled.div`
    position: relative;
    input::-webkit-calendar-picker-indicator{
        position: absolute;
        margin: -30px;
        font-size: 15px;
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
        font-size: 15px;
        font-weight: 500;
        color: ${fieldsBackground};
        font-size: 0px;
        &:focus {
            outline: ${fieldsOutline};;
        }


        &[value] {
            color: ${fieldsTextColor};
            font-size: 15px;

            &::before {
                display: none;
            }            
        }
        
        &::before, &[value='']::before  {
            content: 'Time';
            display: block;
            width: 100px;
            height: 100%;
            font-size: 15px;
            line-height: 1.41;
            color: ${fieldsTextColor};
        }

        &[value=''] {
            color: ${fieldsBackground};
            font-size: 0px;
        }


    }
`