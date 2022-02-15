import { css } from "twin.macro"

const Navbar = () => {
  return (
    <div
      tw="fixed bottom-0 h-[70px] w-screen bg-blue-400 rounded-t-2xl"
      css={css`
        box-shadow: 0px -5px 25px 0px rgb(0 0 0 / 0.1),
          0px -5px 25px 0px rgb(0 0 0 / 0.1);
        z-index: 50;
      `}
    >
      <div tw="flex items-center justify-evenly h-full">
        <h1>Home</h1>
        <h1>Help Center</h1>
        <h1>History</h1>
        <h1>Profile</h1>
      </div>
    </div>
  )
}

export { Navbar }
