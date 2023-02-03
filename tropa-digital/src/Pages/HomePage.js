import {
    ContainerGeral, ContainerMenu, ContainerGrid, ContainerHeader, MenuInicio, BarraLoad1, BarraLoad2,
    BarraLoad3, ButtonFrase, MenuButton1, MenuButton2, MenuButton3, MenuButton4, MenuButton5,
    CardFraseBold, CardPrincipal1, CardPrincipal2, CardPrincipal3, CardPrincipal4, CardPrincipal5, CardPrincipal6, ImageCard, Image, CardFrase,
    CardData, CardDataFrase,
} from "../PageStyles/HomeStyles";
import logo from "../images/logoTropa.png";
import foto from "../images/fotoCard.png";
import vetorDoc from "../images/vetordoc.png";
import vetorData from "../images/vetorData.png";
import vetorSeta from "../images/vetorSeta.png";
import { goToLoginPage } from "../Routes/RouterFunctions";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {

    const navigate = useNavigate();

    return (<div>

        <ContainerGeral>

            <ContainerHeader>
                <p>Olá <span><strong>Usuário</strong></span></p>
                <hr />
            </ContainerHeader>

            <ContainerMenu>
                <img src={logo} onClick={() => goToLoginPage(navigate)}/>

                <MenuInicio>
                    <BarraLoad1 />
                    <BarraLoad2 />
                    <BarraLoad3 />
                    <p>Inicio</p>
                </MenuInicio>

                <MenuButton1>
                    <img src={vetorDoc} />
                    <ButtonFrase>Contatos</ButtonFrase>
                </MenuButton1>
                <MenuButton2>
                    <img src={vetorSeta} />
                    <ButtonFrase>Relatórios</ButtonFrase>
                </MenuButton2>
                <MenuButton3>
                    <img src={vetorDoc} />
                    <ButtonFrase>Contatos</ButtonFrase>
                </MenuButton3>
                <MenuButton4>
                    <img src={vetorDoc} />
                    <ButtonFrase>Contatos</ButtonFrase>
                </MenuButton4>
                <MenuButton5>
                    <img src={vetorDoc} />
                    <ButtonFrase>Contatos</ButtonFrase>
                </MenuButton5>
            </ContainerMenu>

            <ContainerGrid>
                <CardPrincipal1>
                    <ImageCard>
                        <Image src={foto} />
                        <CardData>
                            <img src={vetorData} />
                            <CardDataFrase>2 min atrás</CardDataFrase>
                        </CardData>
                    </ImageCard>
                    <CardFraseBold>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFraseBold>
                    <CardFrase>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFrase>
                </CardPrincipal1>

                <CardPrincipal2>
                    <ImageCard>
                        <Image src={foto} />
                        <CardData>
                            <img src={vetorData} />
                            <CardDataFrase>2 min atrás</CardDataFrase>
                        </CardData>
                    </ImageCard>
                    <CardFraseBold>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFraseBold>
                    <CardFrase>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFrase>
                </CardPrincipal2>

                <CardPrincipal3>
                    <ImageCard>
                        <Image src={foto} />
                        <CardData>
                            <img src={vetorData} />
                            <CardDataFrase>2 min atrás</CardDataFrase>
                        </CardData>
                    </ImageCard>
                    <CardFraseBold>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFraseBold>
                    <CardFrase>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFrase>
                </CardPrincipal3>

                <CardPrincipal4>
                    <ImageCard>
                        <Image src={foto} />
                        <CardData>
                            <img src={vetorData} />
                            <CardDataFrase>2 min atrás</CardDataFrase>
                        </CardData>
                    </ImageCard>
                    <CardFraseBold>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFraseBold>
                    <CardFrase>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFrase>
                </CardPrincipal4>

                <CardPrincipal5>
                    <ImageCard>
                        <Image src={foto} />
                        <CardData>
                            <img src={vetorData} />
                            <CardDataFrase>2 min atrás</CardDataFrase>
                        </CardData>
                    </ImageCard>
                    <CardFraseBold>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFraseBold>
                    <CardFrase>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFrase>
                </CardPrincipal5>

                <CardPrincipal6>
                    <ImageCard>
                        <Image src={foto} />
                        <CardData>
                            <img src={vetorData} />
                            <CardDataFrase>2 min atrás</CardDataFrase>
                        </CardData>
                    </ImageCard>
                    <CardFraseBold>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFraseBold>
                    <CardFraseBold>Lorem lpsum is simple dummy text of the printing and the typeselting...</CardFraseBold>
                </CardPrincipal6>
            </ContainerGrid>

        </ContainerGeral>
    </div>
    )
};