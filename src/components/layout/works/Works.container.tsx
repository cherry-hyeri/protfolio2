import * as S from "./Works.style";

export default function LayoutWorks() {
  return (
    <>
      <S.Wrapper>
        <S.Title>works</S.Title>
        <S.ContainerBox>
          <S.BoxWrapper>
            site1
            <S.Boxinfo>text</S.Boxinfo>
          </S.BoxWrapper>

          <S.BoxWrapper>site2</S.BoxWrapper>
          <S.BoxWrapper>site3</S.BoxWrapper>
        </S.ContainerBox>
      </S.Wrapper>
    </>
  );
}
