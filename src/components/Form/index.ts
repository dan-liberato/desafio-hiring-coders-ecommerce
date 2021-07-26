import styled from "styled-components";

export const Form = styled.form`
    margin: auto;
    width: 320px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    input {
        width: 100%;
        height: 50px;
        padding: 12px 16px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
`

export const FormInput = styled.input`
    border-radius: 8px;
    border: 2px solid black;
`

export const Text = styled.span`
    font-size: 14px;
    color: #838383;

    .register {
        color: black;
        &:hover {
            color: #11d652;
        }
    }
`