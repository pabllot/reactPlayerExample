import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
height: 500px;
width: 340px;
background-color: #121212f4;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;


.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline: auto;


    
}

.filter {
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
}

button {
  background-color: white;
  border-radius: 50px;
  color: #000000;
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  outline-style: none;

  
}

.button:hover,
.button:focus {
  opacity: 0.6;
}

.button:focus {
  box-shadow: 0 0 0 4px #2c2d2e9a;
}

.button:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #000000;
}

@media (max-width: 1024px) {
width: 320px;
border-top-right-radius: 0px;
border-bottom-left-radius: 10px;

}

@media (max-width: 768px) {
  width: 420px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;


  }
@media (max-width: 620px) {
  width: 350px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;


  }
  @media (max-width: 350px) {
  width: 300px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;


}


`