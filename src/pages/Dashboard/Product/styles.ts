import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`

export const TableContainer = styled.div`
    position: relative;
    padding: 1rem;

    .create-button {
        position: absolute;
        width: auto;

        display: inline-flex;
        align-items: center;
        text-transform: none;
        
        i {
            margin-left: 10px;
            padding-right: 5px;
            font-size: 1rem;
            font-style: normal;
        }
    }

    table {
        position: relative;
        top: 80px;
        border-spacing: 0;

        tr {
        :last-child {
            td {
                border-bottom: 0;
            }
        }
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid #c7c7c7;
            border-right: 1px solid #c7c7c7;

        :last-child {
            border-right: 0;
        }
        }
    }
`