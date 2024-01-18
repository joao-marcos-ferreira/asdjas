import styled from "styled-components"

export const Container = styled.div`
  background-color: var(--g-colorGray100);
  height: 5.625rem;
  border-radius: 4.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`

export const Logo = styled.img`
  align-self: center;
`

export const Menu = styled.ul`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  padding: 1.375rem 2rem;
  border-radius: 4.375rem;
  background-color: var(--color-g-white);
`

export const MenuItem = styled.li`
  font-size: 0.8rem;
`

export const SubMenu = styled.ul`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  border-radius: 4.375rem;
`

export const SubMenuItem = styled.li`
  font-size: 0.8rem;
`
