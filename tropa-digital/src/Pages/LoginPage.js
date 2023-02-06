import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Routes/RouterFunctions";
import logo from "../images/logoTropa.png";
import ceu from "../images/ceuEstrelado.png";
import pc from "../images/pc.png";
import senha from "../images/senha.png";
import {
    ContainerButton, ContainerCard, ContainerGeral, ContainerImagemPc, ContainerLetras,
    ContainerPrancheta, ContainerRetangulo3, ContainerBox1, ContainerBox2, Laranja
} from "../PageStyles/LoginStyles";
import { onDragOver, onDragStart, onDrop } from "../dnd/dndFunctions";


export const LoginPage = () => {

    const navigate = useNavigate()



    return (
        <div>

            <div id={'dragabble'} draggable="true" ondragstart={(e) => onDragStart(e.target)}>
                <ContainerCard></ContainerCard>
                <ContainerLetras>Bem Vindo ao <Laranja>painel</Laranja></ContainerLetras>
                <ContainerRetangulo3 src={ceu} ></ContainerRetangulo3>
                <ContainerPrancheta src={logo}></ContainerPrancheta>
                <ContainerImagemPc src={pc}></ContainerImagemPc>
                <ContainerBox1>Digite seu e-mail </ContainerBox1>
                <ContainerBox2>Digite sua senha
                    <img src={senha} /> </ContainerBox2>
                <ContainerButton onClick={() => goToHomePage(navigate)} >Acessar</ContainerButton>
            </div>
            <ContainerGeral ondragover={(e) => onDragOver(e.target)} ondrop={(e) => onDrop(e.target)}></ContainerGeral>

        </div>
    )
};