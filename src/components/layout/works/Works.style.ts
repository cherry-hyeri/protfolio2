import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 40px 50px;
    border: 1px solid red;
`

export const Title = styled.h2`
    font-size: 22px;
    margin-bottom: 30px;
`

export const ContainerBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const BoxWrapper = styled.div`
    position: relative;
    width: 330px;
    height: 260px;
    background: gray;

    &:hover .Boxinfo {
        display: block;
    }
`

export const Blink = keyframes`
    0% {
        opacity: 0;
    }

    20% {
        opacity: 30%;
    }

    40% {
        opacity: 50%;
    }

    60% {
        opacity: 70%;
    }

    80% {
        opacity: 90%;
    }

    100% {
        opacity: 1;
    }
`

export const Boxinfo = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 330px;
    height: 260px;
    background: rgba(0,0,0,0.5);
`

export const Workimg = styled.img`
    width: 100%;
    height: 100%;
`

export const Infotxt = styled.div`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    align-items: center;
    animation: ${Blink} 1s linear;
`

export const InfoTitle = styled.p`
    position: relative;
    margin-bottom: 40px;
    font-size: 22px;
    font-weigth: 600;

    &:after {
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%, 0);
        content: "";
        width: 130px;
        height: 1px;
        background: #fff;
    }
`
export const InfoButton = styled.button`
    margin-top: 20px;
    padding: 10px;
    width: 100px;
    border: 0;
    background: #fff;
    cursor: pointer;
    text-align: center;
`