import Link from "next/link";
import * as S from "./Works.style";

export default function LayoutWorks() {
  return (
    <>
      <S.Wrapper>
        <S.Title>works</S.Title>
        <S.ContainerBox>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/ykmw1__.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://www.yukhoemawang.com/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.Infotxt>
                  <S.InfoTitle>육회마왕</S.InfoTitle>
                  <S.Text>육회전문점 육회마왕 소개를 위한 사이트입니다.</S.Text>
                  <S.InfoButton>보러가기</S.InfoButton>
                </S.Infotxt>
              </Link>
            </S.Boxinfo>
          </S.BoxWrapper>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/ykmw2__.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://yukhoemawang.co.kr/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.Infotxt>
                  <S.InfoTitle>육회마왕</S.InfoTitle>
                  <S.Text>
                    육회전문점 육회마왕 가맹점 홍보를 위한 사이트입니다.
                  </S.Text>
                  <S.InfoButton>보러가기</S.InfoButton>
                </S.Infotxt>
              </Link>
            </S.Boxinfo>
          </S.BoxWrapper>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/adbid.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://www.adbid.co.kr/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.Infotxt>
                  <S.InfoTitle>애드비드</S.InfoTitle>
                  <S.Text>
                    네이버 파워링크 광고 입찰 서비스 제공하는 웹 페이지입니다.
                  </S.Text>
                  <S.InfoButton>보러가기</S.InfoButton>
                </S.Infotxt>
              </Link>
            </S.Boxinfo>
          </S.BoxWrapper>
        </S.ContainerBox>
        <S.ContainerBox>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg
              style={{ padding: "0px" }}
              src="images/works/adbid_program.png"
            ></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://www.adbid.co.kr/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.Infotxt>
                  <S.InfoTitle>애드비드</S.InfoTitle>
                  <S.Text>
                    네이버 파워링크 광고 입찰 서비스 제공하는 웹 프로그램입니다.
                    electron 사용하여 작업하였습니다.
                  </S.Text>
                  <S.InfoButton>보러가기</S.InfoButton>
                </S.Infotxt>
              </Link>
            </S.Boxinfo>
          </S.BoxWrapper>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/esvpn.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://www.esvpn.co.kr/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.Infotxt>
                  <S.InfoTitle>esvpn</S.InfoTitle>
                  <S.Text>
                    vpn 서비스 제공하는 웹 페이지입니다.
                    <br /> 유지보수 진행했습니다.
                  </S.Text>
                  <S.InfoButton>보러가기</S.InfoButton>
                </S.Infotxt>
              </Link>
            </S.Boxinfo>
          </S.BoxWrapper>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/hero1.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <S.Infotxt>
                <S.InfoTitle>빌딩히어로</S.InfoTitle>
                <S.Text>건물관리 서비스 제공하는 웹 사이트입니다.</S.Text>
                <S.InfoButton>보러가기</S.InfoButton>
              </S.Infotxt>
            </S.Boxinfo>
          </S.BoxWrapper>
        </S.ContainerBox>
        <S.ContainerBox>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg
              style={{
                padding: "0px",
                width: "155%",
                margin: "-25px 0px 0px 0px",
              }}
              src="images/works/jt.png"
            ></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <S.Infotxt>
                <S.InfoTitle>JT친애저축은행</S.InfoTitle>
                <S.Text>JT친애저축은행 모바일 어플입니다.</S.Text>
              </S.Infotxt>
            </S.Boxinfo>
          </S.BoxWrapper>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/2gate__.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="http://www.gallery2gate.kr/g_test2/page/index.jsp"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.Infotxt>
                  <S.InfoTitle>투게이트컴즈</S.InfoTitle>
                  <S.Text>투게이트컴즈 웹 사이트입니다.</S.Text>
                  <S.InfoButton>보러가기</S.InfoButton>
                </S.Infotxt>
              </Link>
            </S.Boxinfo>
          </S.BoxWrapper>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/kiwom.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <S.Infotxt>
                <S.InfoTitle>키움저축은행</S.InfoTitle>
                <S.Text>키움저축은행 웹 사이트입니다.</S.Text>
                <S.InfoButton>보러가기</S.InfoButton>
              </S.Infotxt>
            </S.Boxinfo>
          </S.BoxWrapper>
        </S.ContainerBox>
      </S.Wrapper>
    </>
  );
}
