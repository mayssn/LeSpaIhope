import styled from "styled-components";
import img from "../imgs/snap.png"
import { ContactInfo } from "../data/contactInfo";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Maps from "./Maps";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';



const Contact = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyCh_zx4qawF0Xx70tk6tRz100L7i7PWN64" })


    const data = ContactInfo
    // console.log("data", data)
    return (
        <Wrap>
            <Container>
                {
                    data.map(x => {
                        return (
                            <Branch key={x.location.lat}>
                                {(!isLoaded) ?
                                    <div>Loading...</div> :
                                    <Maps
                                        address={x.location.address}
                                        lat={x.location.lat}
                                        lng={x.location.lng} />}
                                <Title>{x.branch}</Title>
                                <Box>
                                    <Icon>
                                        <CiLocationOn />
                                    </Icon>
                                    {x.location.address}
                                </Box>
                                <Box>
                                    <Icon>
                                        <BsTelephone />
                                    </Icon>
                                    {x.tel}
                                </Box>
                            </Branch>
                        )


                    }
                    )
                }
            </Container>

        </Wrap >
    );
}

const Wrap = styled.div`
    background-color: black;
    background-image: url(${img});
    /* height: calc(100vh - 100px); */
    color: black;
    font-family:" Arial, Helvetica, sans-serif";
    font-size: 16px;
    padding: 0 0 40px 0;
    `
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: -20px;
`

const Branch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color: white;
    width: 600px;
    padding: 10px 50px;
    border-radius:12px;
    opacity: 0.75;

    `

const Title = styled.p``

const Box = styled.div`
    display: flex;
    align-items:center;
    font-size: 14px`


const Icon = styled.p`
    display: inline-flex;
    font-size:20px;
    margin-right:20px`

export default Contact;