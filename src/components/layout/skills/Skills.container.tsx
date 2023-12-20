import * as S from "./Skills.style";

export default function LayoutSkills() {
  return (
    <>
      <S.Wrapper>
        <S.Title>Skills</S.Title>
        <S.SkillBox>
          <li>
            <S.Orange>HTML</S.Orange>
          </li>
          <li>
            <S.Blue>CSS</S.Blue>
          </li>
          <S.Yellow>JavaScript</S.Yellow>
          <S.Pink>JQuery</S.Pink>
          <S.Aqua>React</S.Aqua>
          <S.Blue>TypeScript</S.Blue>
          <S.Aqua>NodeJS</S.Aqua>
          <S.Blue>PhotoShop</S.Blue>
          <S.Orange>Illustration</S.Orange>
          <S.Pink>Figma</S.Pink>
          <S.Yellow>Github</S.Yellow>
          <S.Aqua>Gitlab</S.Aqua>
          <S.Aqua>Confluence</S.Aqua>
          <S.Pink>Jira</S.Pink>
        </S.SkillBox>
        <S.ProgressBox>
          <S.Bar></S.Bar>
        </S.ProgressBox>
      </S.Wrapper>
    </>
  );
}
