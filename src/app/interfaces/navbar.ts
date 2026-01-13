export interface Navbar {
  id: string;
  text: string;
  link: string;
}

export interface FooterNavbar {
  id: string;
  title: string;
  items: Navbar[];
}
