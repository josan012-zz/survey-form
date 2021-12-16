import styled from '@emotion/styled';

export const Pagina1 = styled.div`
.center {
    display: flex;
    justify-content: center;
  }
  
  .background {
    position: relative;
    width: 1440px;
    height: 1024px;
  
    background: #555596;
  }
  
  .albastru {
    position: absolute;
    left: 40px;
    right: 40px;
    top: 12.7%;
    bottom: 3.91%;
    background: #3d91f3;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
  }
  .text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 41px;
    line-height: 48px;
    color: #ffffff;
    margin-top: 28px;
  }
  
  .text1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #ffffff;
    width: 1173px;
    height: 113px;
    margin-top: 150px;
    margin-left: -28px;
  }
  #nume {
    outline: none;
    border: 0;
    width: 1166px;
  }
  .input,
  .input-email {
    outline: none;
    border: 0;
    width: 1166px;
    border-bottom: 2px solid #e5e5e5;
    margin-top: 85px;
    margin-left: -20px;
  }
  
  #nume:hover,
  .input:hover {
    border-bottom: 2px solid #425dea;
  }
  input[type="text"] {
    background: #3d91f3;
    height: 29px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
  
  ::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
  
  label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
  
  #title1 {
    margin-top: 0px;
    margin-left: -90px;
  }
  
  .buton {
    position: absolute;
    width: 196px;
    height: 65px;
    right: 105px;
    bottom: 82px;
    background: #d99f0b;
    border-radius: 4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 1.25px;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
  }
  
  .trecere {
    background: #e5e5e5;
    width: 1440px;
    height: 140px;
  }
  
  #title2 {
    margin-top: 0;
    margin-left: -90px;
  }
  
  .input-email {
    margin-top: 340px;
  }
  
  #title3 {
    margin-top: 0;
    margin-left: -90px;
  }
  
  .text-select {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #ffffff;
    margin-left: 97px;
    margin-top: 161px;
  }
  
  .select {
    width: 278px;
    height: 50px;
    background-color: #3d91f3;
    color: white;
    border: 0;
    border-bottom: 2px solid #e5e5e5;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    padding-left: 16px;
    margin-top: 70px;
    margin-left: 97px;
    position: relative;
  }
  
  .custom-select::after {
    content: "▼";
    font-size: 1rem;
    top: 6px;
    right: 10px;
    position: absolute;
  }
  
  .select:focus,
  .select:hover {
    border-bottom: 2px solid #425dea;
  }
  
  .select option {
    background-color: #ffffff;
    color: black;
    padding-left: 16px;
  }
  
  #title4 {
    margin-top: 0;
    margin-left: -90px;
  }
  
  .text-radio {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #ffffff;
    margin-top: 163px;
    margin-left: 88px;
  }
  
  #defenitely {
    margin-top: 124px;
    margin-left: 91px;
  }
  
  #maybe {
    margin-top: 104px;
    margin-left: 91px;
  }
  
  #not_sure {
    margin-top: 98px;
    margin-left: 91px;
  }
  
  #title5 {
    margin-top: 0;
    margin-left: -90px;
  }
  
  #check {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #ffffff;
    margin: 0;
    margin-top: 163px;
    margin-left: 89px;
  }
  
  #text-check {
    border: 0;
    border-bottom: 2px solid #e5e5e5;
    width: 1009px;
    margin-top: 9px;
    margin-left: 88px;
  }
  
  #check2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin: 0;
    margin-top: 34px;
    margin-left: 88px;
  }
  
  #front {
    margin-top: 38px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #back {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #data {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #challenges {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #community {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #help {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #videos {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #city {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #wiki {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #forum {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #courses {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  #comments {
    margin-top: 17px;
    margin-left: 92px;
    filter: hue-rotate(150deg);
  }
  
  input[type="checkbox"] {
    transform: scale(2);
    margin: 10px;
    cursor: pointer;
  }
  
  #title6 {
    margin-top: 0;
    margin-left: -90px;
  }
  
  #comm {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 52px;
    letter-spacing: 1.25px;
    margin: 0;
    color: #ffffff;
    margin-top: 182px;
    margin-left: 88px;
  }
  
  #comentarii {
    width: 1167px;
    height: 278px;
    margin-top: 80px;
    margin-left: 90px;
  }
  
  #comentarii::placeholder {
    color: black;
    margin-top: 27px;
    margin-left: 37px;
  }
  
  #title7 {
    margin-top: 0;
    margin-left: -90px;
  }
  
  #final {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 53px;
    letter-spacing: 1.25px;
    color: #ffffff;
    margin: 0;
    margin-top: 199px;
    margin-left: 91px;
  }
  
  #multumire {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    display: flex;
    align-items: center;
    letter-spacing: 1.25px;
    color: #ffffff;
    width: 869px;
    height: 137px;
    margin-top: 76px;
    margin-left: 95px;
  }
  `;
  export default Pagina1;  