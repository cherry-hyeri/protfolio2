import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Fluffy = keyframes`
    0% {
        top: 3px;

    }

    60% {
        top: -10px;
    }

    100% {
        top: 5px;
    }
`

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 40px 50px;
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
    padding: 20px;
    background: #f9f9f9;
    border-radius: 5px;
    margin-bottom: 50px;
    text-align: center;

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

export const BoxBorder = styled.span`
    position: absolute;
    background-color: #fff;
    transition: all 0.5s;
    &:nth-of-type(1) {
        left: 15px;
        top: 15px;
        width: 0;
        height: 1px;    
    }
    &:nth-of-type(2) {
        right: 15px;
        top: 15px;
        width: 1px;
        height: 0;
    }
    &:nth-of-type(3) {
        right: 15px;
        bottom: 15px;
        width: 0;
        height: 1px;
    }
    &:nth-of-type(4) {
        left: 15px;
        bottom: 15px;
        width: 1px;
        height: 0;
    }
`

export const Boxinfo = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 330px;
    height: 260px;
    background: rgba(3,3,3,0.8);
    border-radius: 5px;

    &:hover .boxBorder:nth-of-type(1) {
        width: 90.7%;
    }
    &:hover .boxBorder:nth-of-type(2) {
        height: 88%;
    }
    &:hover .boxBorder:nth-of-type(3) {
        width: 90.7%;
    }
    &:hover .boxBorder:nth-of-type(4) {
        height: 88%;
    }
`

export const Workimg = styled.img`
    padding-top: 20px;
    width: 100%;
`

export const Infotxt = styled.div`
    padding: 52px 0;
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    align-items: center;
    animation: ${Blink} 1s linear;

    &.infotxt {
        padding: 57px 0;
    }
`

export const InfoTitle = styled.p`
    position: relative;
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

export const Text = styled.p`
    margin-top: 40px;
    width: 290px;
    word-break: keep-all;
    line-height: 1.7;
`

export const Text2 = styled.p`
    margin-top: 25px;
    width: 290px;
    word-break: keep-all;
    line-height: 1.7;
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

export const notice = styled.span`
    font-size: 11px;
    color: #999;
`