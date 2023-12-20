import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 23px 50px;
    border: 1px solid green;
`

export const Title = styled.h2`
    font-size: 22px;
`

export const SkillBox = styled.ul`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
`

export const Orange = styled.p`
    margin-right: 7px;
    padding: 2px;
    color: #ff5c01;
    border: 1px solid #ff5c01;
    border-radius: 3px;
    cursor: pointer;
`

export const Blue = styled.p`
    margin-right: 7px;
    padding: 2px;
    color: #0019ff;
    border: 1px solid #0019ff;
    border-radius: 3px;
`

export const Yellow = styled.p`
    margin-right: 7px;
    padding: 2px;
    color: #ffc700;
    border: 1px solid #ffc700;
    border-radius: 3px;
`

export const Pink = styled.p`
    margin-right: 7px;
    padding: 2px;
    color: #FF00D6;
    border: 1px solid #ff00d6;
    border-radius: 3px;
`

export const Aqua = styled.p`
    margin-right: 7px;
    padding: 2px;
    color: #61dafb;
    border: 1px solid #61dafb;
    border-radius: 3px;
    cursor: pointer:
`

export const ProgressBox = styled.div`
    margin-top: 20px;
    width: 100%;
`

export const Bar = styled.div`
    position: relative;
    width: 100%;
    height: 20px;
    border: 1px solid #ff5c01;
    border-radius: 30px;

    ::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 5px;
        width: 99%;
        height: 10px;
        background-color: #ff5c01;
        border-radius: 30px;
    }
`