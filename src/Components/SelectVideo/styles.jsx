import styled from "styled-components";

export const Container = styled.div`
width: 310px;
height: 100px;
background-color: blue;
display: flex;
align-items: center;
justify-content: space-evenly;

.left {
    background-color: red;
    width: 130px;
    height: 70px;
}

.right {
    background-color: yellow;
    width: 145px;
    height: 70px;
}

h3 {
    font-size: 12px;
    margin: 0;
}

p {
    font-size: 9px;
    font-weight: 700;
    margin: 0;
}

`