import { MouseEvent, useCallback, useState } from "react";
import * as S from "./Works.style";

export default function LayoutWorks() {
  return (
    <>
      <S.Wrapper>
        <S.Title>works</S.Title>
        <S.ContainerBox>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/ykmw1.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <S.Infotxt>
                <S.InfoTitle>육회마왕</S.InfoTitle>
                <p>육회전문점 육회마왕 소개를 위한 사이트입니다.</p>
                <S.InfoButton>보러가기</S.InfoButton>
              </S.Infotxt>
            </S.Boxinfo>
          </S.BoxWrapper>

          <S.BoxWrapper>site2</S.BoxWrapper>
          <S.BoxWrapper>site3</S.BoxWrapper>
        </S.ContainerBox>
      </S.Wrapper>
    </>
  );
}
