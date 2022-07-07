import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1100px;
    background: rgba(255,255,255, 0.2);
    border-radius: 10px;
    border: none;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    text-align: center;

    p {
        font-size: 1.5rem;
    }
`
type Props = {
    correct: boolean;
    userClicked: boolean;
}
export const ButtonWrapper = styled.div<Props>`

     button {
        cursor: pointer;
        user-select: none;
        font-size: .8rem;
        
        width: 50%;
        height: 40px;
        margin: 5px 0;

        border-radius: 2rem;
        border: none;

        transition: .2s ease-in-out;

        background: ${({ correct, userClicked}) => 
            correct ? 'green'
            : !correct && userClicked
            ? 'red'
            : 'white'
        };

        :hover {
            transform: scale(110%);
        }

     };
`