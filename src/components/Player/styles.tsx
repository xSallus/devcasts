import styled from 'styled-components'
import colors from '../../../colors.json'

export const PlayerContainer = styled.div`
    height: 100vh;
    width: 26.5rem;

    padding: 2rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    background: ${colors.primary.purple.dark};
    color: ${colors.items.line};
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        height: 25px;
    }
`

export const Timer = styled.div`
    display: flex;
    gap: .25rem;
    justify-content: center;
`

export const Actions = styled.div`
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: center;

    gap: .75rem;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 1rem 1.15rem;
    border-radius: 25%;
    border: 0;
    font-size: 0;
    transition: filter .2s ease;

    &:hover:not(:disabled) {
        filter:  brightness(.75);
        border-bottom: 1px solid rgba(0,0,0,.5); 
    }

    &:disabled {
        opacity: .45;
        cursor: default;
    }

    &.isActive {
        filter: invert(.35) sepia(1) saturate(3) hue-rotate(100deg);
    }
`

export const Empty = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22.25rem;
    width: 18.5rem;
    background: linear-gradient(180deg, rgba(145,100,250,.8) 0%, rgba(0,0,0,0) 100%);
    border-radius: 18px;
`

export const Playing = styled.section`
    text-align: center;
    margin-top: .75rem;
    height: 22.25rem;
    width: 18.5rem;

    img {
        border-radius: 1.5rem;
    }

    strong {
        display: block;
        margin-top: 2rem;
        font: 400 1.25rem 'Inter';
        line-height: 1.75rem;
    }

    span {
        display: block;
        margin-top: 1rem;
        opacity: .6;
        line-height: 1.5rem;
    }
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
