import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToGridPage } from "../Routes/RouterFunctions";
import logo from "../images/logoTropa.png";
import ceu from "../images/ceuEstrelado.png";
import pc from "../images/pc.png";
import senha from "../images/senha.png";

const ContainerGeral = styled.div`
    background-color: #FF6C22;
    position: absolute;
    width: 2280px;
    height: 1209px;
    left: -116px;
    top: -43px;

`
const ContainerRetangulo = styled.div`
    position: absolute;
    width: 857px;
    height: 512px;
    left: 504px;
    top: 306px;
    background: #FFFFFF;
    box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

const ContainerRetangulo3 = styled.img`
    position: absolute;
    width: 389px;
    height: 512px;
    left: 972px;
    top: 306px;
    border-radius: 0px 4px 4px 0px;
`

const Containerretangulo5 = styled.div`
    display:flex;
    box-sizing: border-box;
    position: absolute;
    width: 313px;
    height: 44px;
    left: 561px;
    top: 572px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;
    border-radius: 5px;

    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 161.5%;
    color: rgba(0, 0, 0, 0.35);
    padding: 10px;
`

const Containerretangulo5Dois = styled.div`
    display:flex;
    box-sizing: border-box;
    position: absolute;
    width: 313px;
    height: 44px;
    left: 561px;
    top: 629px;;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;
    border-radius: 5px;
    
    font-family: 'Advent Pro';
    color: rgba(0, 0, 0, 0.35);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 161.5%;
    padding: 10px;

    img{
    width: 24px;
    height: 24px;
    left: 837px;
    top: 639px;
    filter: grayscale(100%) opacity(40%);
    margin-left: 180px;
    }
`


const ContainerImagemPc = styled.img`
    position: absolute;
    width: 414px;
    height: 413px;
    left: 898px;
    top: 405px;
`

const ContainerPrancheta = styled.img`
    position: absolute;
    width: 259px;
    height: 77.54px;
    left: 588px;
    top: 376px;
`

const ContainerLetras = styled.span`
    position: absolute;
    width: 230px;
    height: 54px;
    left: 563px;
    top: 498px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 47px;
    text-align: center;
    color: rgba(0, 0, 0, 0.44);
`

const ContainerButton = styled.button`
    position: absolute;
    width: 151px;
    height: 40px;
    left: 562px;
    top: 686px; 
    background: #2EAFB2;
    border-color: white;
    border-radius: 5px;
    color: white;
`
const Laranja = styled.span`
    color: #FF6C22;
`


export const HomePage = () => {

    const navigate = useNavigate()

    return (
        <ContainerGeral>
            <h3>HomePage</h3>
            <ContainerRetangulo></ContainerRetangulo>
            <ContainerLetras>Bem Vindo ao <Laranja>painel</Laranja></ContainerLetras>
            <ContainerRetangulo3 src={ceu} ></ContainerRetangulo3>
            <ContainerPrancheta src={logo}></ContainerPrancheta>
            <ContainerImagemPc src={pc}></ContainerImagemPc>
            <Containerretangulo5>Digite seu e-mail </Containerretangulo5>
            <Containerretangulo5Dois>Digite sua senha
                <img src={senha} /> </Containerretangulo5Dois>
            <ContainerButton onClick={() => goToGridPage(navigate)} >Acessar</ContainerButton>
        </ContainerGeral>
    )
};