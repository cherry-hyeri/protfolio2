import { useState } from "react";
import * as S from "./Skills.style";

export default function LayoutSkills() {
  return (
    <>
      <S.Wrapper>
        <S.Title>Skills</S.Title>
        <S.SkillContainer>
          <S.SkillBox>
            <S.Boxtitle>Front-end</S.Boxtitle>
            <S.Bar></S.Bar>
            <S.IconBox>
              <S.Icon2 src="images/HTML.png"></S.Icon2>
              <S.Icon src="images/CSS3.png"></S.Icon>
              <S.Icon src="images/Javascript.png"></S.Icon>
            </S.IconBox>
            <S.IconBox>
              <S.Icon3 src="images/JQuery.png"></S.Icon3>
              <S.Icon3 src="images/node.png"></S.Icon3>
            </S.IconBox>
            <S.IconBox>
              <S.Icon src="images/react.png"></S.Icon>
              <S.Icon src="images/typescript.png"></S.Icon>
            </S.IconBox>
          </S.SkillBox>
          <S.SkillBox>
            <S.Boxtitle>Design</S.Boxtitle>
            <S.Bar></S.Bar>
            <S.IconBox>
              <S.Icon src="images/Photoshop.png"></S.Icon>
              <S.Icon src="images/Illustrator.png"></S.Icon>
              <S.Icon src="images/figma.png"></S.Icon>
            </S.IconBox>
          </S.SkillBox>
          <S.SkillBox>
            <S.Boxtitle>etc.</S.Boxtitle>
            <S.Bar></S.Bar>
            <S.IconBox>
              <S.Icon3 src="images/gitlab.png"></S.Icon3>
              <S.Icon3 src="images/GitHub-logo.png"></S.Icon3>
            </S.IconBox>
            <S.IconBox>
              <S.Icon4 src="images/jira.png"></S.Icon4>
            </S.IconBox>
            <S.IconBox>
              <S.Icon5 src="images/confluence.png"></S.Icon5>
            </S.IconBox>
          </S.SkillBox>
        </S.SkillContainer>
      </S.Wrapper>
    </>
  );
}
