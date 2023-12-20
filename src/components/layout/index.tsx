import LayoutHeader from "./header/Header.container";
import LayoutProfile from "./profile/Profile.container";
import LayoutSkills from "./skills/Skills.container";

export default function Layout() {
  return (
    <>
      <LayoutHeader />
      <LayoutProfile />
      <LayoutSkills />
    </>
  );
}
