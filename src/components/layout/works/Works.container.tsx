import Link from "next/link";
import * as S from "./Works.style";

export default function LayoutWorks() {
  return (
    <>
      <S.Wrapper>
        <S.Title>works</S.Title>
        <S.ContainerBox>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg
              src="images/works/board.png"
              style={{ padding: "10px" }}
            ></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://github.com/he-hea/codecamp_frontend/tree/master/freeboard-frontend"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.Infotxt>
                  <S.InfoTitle>게시판</S.InfoTitle>
                  <S.Text2>
                    codecamp에서 제공된 db연결을 통해 게시판 작성, 수정 페이지와
                    게시판 불러오기 댓글 기능 작업
                  </S.Text2>
                  <S.InfoButton>보러가기</S.InfoButton>
                </S.Infotxt>
              </Link>
            </S.Boxinfo>
          </S.BoxWrapper>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg
              src="images/works/counter.png"
              style={{ marginTop: "40px" }}
            ></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://github.com/he-hea/precampJs/tree/master/D-Day-Counter2"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.Infotxt className="infotxt">
                  <S.InfoTitle>D-Day Counter</S.InfoTitle>
                  <S.Text>D-Day Counter 제작</S.Text>
                  <S.InfoButton>보러가기</S.InfoButton>
                </S.Infotxt>
              </Link>
            </S.Boxinfo>
          </S.BoxWrapper>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/todo.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://github.com/he-hea/precampJs/tree/master/D-Day-Counter2"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.Infotxt>
                  <S.InfoTitle>ToDoList</S.InfoTitle>
                  <S.Text>
                    접속 지역 날씨에 맞게 배경화면 출력하는 기능과 ToDoList 제작
                  </S.Text>
                  <S.InfoButton>보러가기</S.InfoButton>
                </S.Infotxt>
              </Link>
            </S.Boxinfo>
          </S.BoxWrapper>
        </S.ContainerBox>
        <S.ContainerBox>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/ykmw1__.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://www.yukhoemawang.com/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
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
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
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
            <S.Workimg
              src="images/works/banner.png"
              style={{ padding: "0px", width: "73%" }}
            ></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://www.adbid.co.kr/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.Infotxt className="infotxt">
                  <S.InfoTitle>육회마왕</S.InfoTitle>
                  <S.Text>육회마왕 배너 디자인 시안 작업물입니다.</S.Text>
                  <S.InfoButton>보러가기</S.InfoButton>
                </S.Infotxt>
              </Link>
            </S.Boxinfo>
          </S.BoxWrapper>
        </S.ContainerBox>
        <S.ContainerBox>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/adbid.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <Link
                href="https://www.adbid.co.kr/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
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
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
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
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
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
        </S.ContainerBox>
        <S.ContainerBox>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg src="images/works/hero1.png"></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.Infotxt>
                <S.InfoTitle>빌딩히어로</S.InfoTitle>
                <S.Text>
                  건물관리 서비스 제공하는 웹 사이트입니다.
                  <br />
                  <S.notice>
                    * 업체 사정으로 사이트 미 운영중 소스코드로 대체
                  </S.notice>
                </S.Text>
                <S.InfoButton>보러가기</S.InfoButton>
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
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
                <S.BoxBorder className="boxBorder"></S.BoxBorder>
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
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.Infotxt>
                <S.InfoTitle>키움저축은행</S.InfoTitle>
                <S.Text>
                  키움저축은행 웹 사이트입니다. 유지보수 진행했습니다.
                </S.Text>
                <S.InfoButton>보러가기</S.InfoButton>
              </S.Infotxt>
            </S.Boxinfo>
          </S.BoxWrapper>
        </S.ContainerBox>
        <S.ContainerBox>
          <S.BoxWrapper className="Boxwrapper">
            <S.Workimg
              src="images/works/jt.png"
              style={{ padding: "0px", width: "150%", marginTop: "-20px" }}
            ></S.Workimg>
            <S.Boxinfo className="Boxinfo">
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.BoxBorder className="boxBorder"></S.BoxBorder>
              <S.Infotxt>
                <S.InfoTitle>JT친애저축은행</S.InfoTitle>
                <S.Text>모바일 어플 여신쪽 신규메뉴 작업</S.Text>
              </S.Infotxt>
            </S.Boxinfo>
          </S.BoxWrapper>
        </S.ContainerBox>
      </S.Wrapper>
    </>
  );
}
