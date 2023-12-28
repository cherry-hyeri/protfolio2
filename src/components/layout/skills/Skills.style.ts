import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 23px 50px;
`

export const Title = styled.h2`
    font-size: 22px;
`

export const SkillContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`

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

export const SkillBox = styled.div`
    width: 340px;
    height: 340px;
    border-radius: 30px;
    padding: 20px;
    position: relative;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
    &:hover {
        animation: ${Fluffy} 3s linear infinite;
    }
`

export const Boxtitle = styled.span`
    display: inline-block;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 600;
    margin-right: 20px;
`

export const Bar = styled.div`
    position: absolute;
    top: 26px;
    right: 40px;
    width: 180px;
    height: 1px;
    background: #000;
`
export const IconBox = styled.div`
    widht: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`

export const Icon = styled.img`
    display: inline-bolck;
    margin-top: 30px;
    width: 40px;
`

export const Icon2 = styled.img`
    display: inline-block;
    margin-top: 30px;
    width: 55px;
`

export const Icon3 = styled.img`
    display: inline-block;
    margin-top: 30px;
    width: 100px;
`

export const Icon4 = styled.img`
    display: inline-block;
    margin-top: 30px;
    width: 210px;
`

export const Icon5 = styled.img`
    display: inline-block;
    margin-top: 30px;
    width: 205px;
`