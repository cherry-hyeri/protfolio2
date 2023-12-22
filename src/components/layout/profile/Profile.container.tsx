import Link from "next/link";
import * as S from "./Profile.style";

export default function LayoutProfile() {
  return (
    <S.ProfileWrapper>
      <S.ProfileImg src="images/profile.png"></S.ProfileImg>
      <S.Profilecontent>
        <S.ProfileHedaer>Front-end 개발자 홍혜리입니다.</S.ProfileHedaer>
        <p>
          스스로의 가치를 더할 수 있는 기회를 탐색하기위해 항상 준비되어
          있습니다.
          <br />
          퍼블리셔로 업무를 진행하면서 더 다양한 기술을 배워 프로젝트에 기여하고
          싶었고 프론트엔드개발자로 전향하는 계기가 되었습니다.
          <br />그 과정에서 수 많은 시간의 연구, 실습 및 문제 해결을 하면서
          기술을 연마하고 깊게 이해하는 시간이 되어 성장할 수 있게 되었습니다.
        </p>
        <div>
          <S.Contect>
            <S.IconEmail src="images/email.png" />
            Contact : rnd903@gmail.com
          </S.Contect>
          <S.Github>
            <S.IconGit src="images/github.png" />
            github :
            <Link href="https://github.com/cherry-hyeri">
              <S.Giturl>https://github.com/cherry-hyeri</S.Giturl>
            </Link>
          </S.Github>
        </div>
      </S.Profilecontent>
    </S.ProfileWrapper>
  );
}
