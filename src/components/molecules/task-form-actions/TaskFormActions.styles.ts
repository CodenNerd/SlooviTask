import styled from "styled-components";

export default styled.div`
    margin: 12px 0 20px;
    .form-action-inner {
        display: flex;
        justify-content: space-between;
        .delete-btn {
            padding: 0px 10px;
            svg {
                color: #444;
            }
        }
        .buttons {
            display: flex;
            gap: 10px;
        }
    }
`