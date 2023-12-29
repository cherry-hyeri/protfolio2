import LayoutFooters from "./footer/Footer.container";
import LayoutHeader from "./header/Header.container";
import LayoutProfile from "./profile/Profile.container";
import LayoutSkills from "./skills/Skills.container";
import LayoutWorks from "./works/Works.container";

export default function Layout() {
  return (
    <>
      <LayoutHeader />
      <LayoutProfile />
      <LayoutSkills />
      <LayoutWorks />
      <LayoutFooters />
    </>
  );
}
