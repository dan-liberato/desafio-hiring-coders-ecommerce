import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    position: relative;

    .back-button {
        width: 28px;
        height: 20px;
        background: none;
        background-image: url('/assets/icons/back_arrow.svg');
        background-repeat: no-repeat;
        background-size: 28px 20px;
        background-position: center;
        position: absolute;
        top: 30px;
        left: 30px;
    }

    @media (min-width: 720px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const FormArea = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
`

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

export const About = styled.div`
    background-color: black;
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`