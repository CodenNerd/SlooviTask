import styled from "styled-components";
import { border } from "../../../utils/style-enums";

export default styled.div`
    .header-inner {
        display: grid;
        grid-template-columns: auto auto;
        background: whitesmoke;
        border-bottom: ${border};
        .title {
            text-transform: uppercase;
            font-weight: 600;
            color: dimgrey;
            font-size: medium;
            padding: 10px;

            .count {
                color: #aaa;
                display: inline-block;
                font-size: 16px;
                padding-left: 10px;
            }
        }

        .new-task {
            text-align: right;
            button {
                aspect-ratio: 1;
                height: 100%;
                min-width: 39px;
                background-color: none;
                border: none;
                border-left: ${border};
                cursor: pointer;

            }
        }
    }
`