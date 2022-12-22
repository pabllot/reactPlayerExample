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