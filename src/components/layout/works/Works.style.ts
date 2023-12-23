import styled from "@emotion/styled";

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
`

export const Boxinfo = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 330px;
    height: 260px;
    background: #fff;
`