import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
height: 500px;


.sidebar {
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline: auto;
}

.filter {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #64626239;
}

button {
  background-color: #e1ecf4;
  border-radius: 9px;
  border: 1px solid #06151f7a;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #38393a;
  cursor: pointer;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;
  
}

.button:hover,
.button:focus {
  opacity: 0.6;
  color: #303234a5;
}

.button:focus {
  box-shadow: 0 0 0 4px #2c2d2e9a;
}

.button:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}


@media (max-width: 768px) {
    .video-container {
  width: 480px;
  height: 300px;

}

  }
  @media (max-width: 420px) {
    .video-container {
  width: 340px;
  height: 200px;

}}

`