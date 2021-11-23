import styled from 'styled-components'

export const Container = styled.header`
    background: var(--black);
`
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        max-width: 200px;
        border-radius:10%;
    }

    button{
        font-size: 1rem;
        color: var(--black);
        background-color: var(--white);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2rem;

        transition: filter 0.3s;

            &:hover{
                filter: brightness(0.7);
            }
    }
`