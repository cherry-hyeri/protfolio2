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
              <S.Icon src="images/HTML5.png"></S.Icon>
              <S.Icon src="images/CSS3.png"></S.Icon>
              <S.Icon src="images/Javascript.png"></S.Icon>
            </S.IconBox>
            <S.IconBox>
              <S.Icon src="images/JQuery.png"></S.Icon>
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
              <S.Icon src="images/Adobe_Photoshop.png"></S.Icon>
              <S.Icon src="images/Adobe_Illustrator.png"></S.Icon>
              <S.Icon src="images/figma.png"></S.Icon>
            </S.IconBox>
          </S.SkillBox>
          <S.SkillBox>
            <S.Boxtitle>etc.</S.Boxtitle>
            <S.Bar></S.Bar>
            <S.IconBox>
              <S.Icon src="images/gitlab.png"></S.Icon>
              <S.Icon src="images/gitlogo.png"></S.Icon>
            </S.IconBox>
            <S.IconBox>
              <S.Icon src="images/jira.png"></S.Icon>
            </S.IconBox>
            <S.IconBox>
              <S.Icon src="images/confluence.png"></S.Icon>
            </S.IconBox>
          </S.SkillBox>
        </S.SkillContainer>
      </S.Wrapper>
    </>
  );
}
