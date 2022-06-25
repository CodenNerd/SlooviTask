import styled from "styled-components";
import { border } from "../../../utils/style-enums";

export default styled.div`
    border-top: ${border};
    .container {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .img-title-container{
            display: flex;
            gap: 10px;

            .profile-img-container{

                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 5px;
                }
            }

            .title {
                .follow-up {
                    font-weight: 600;
                    font-size: 16px;
                }

                .date {
                    font-size: 13px;
                    color: red;
                }
            }
        }

        .icons-container {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;

            .right {
                display: flex;
            }

            .edit-container, .bell-container, .check-container {
                border: 1px solid #ccc;
                padding: 7px 7px 4px;
                border-radius: 3px;
                cursor: pointer;
                svg {
                    font-size: 15px;
                    color: #444;
                }
            }

            .check-container {
                border-radius: 0 3px 3px 0;
            }

            .bell-container {
                border-radius: 3px 0 0 3px;
                border-right: none;
            }
        }
    }

`