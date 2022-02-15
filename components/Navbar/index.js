import { css } from "twin.macro"

const Navbar = () => {
  return (
    <div
      tw="fixed bottom-0 h-[150px] w-screen bg-blue-400 rounded-t-2xl"
      css={css`
        box-shadow: 0px -5px 25px 0px rgb(0 0 0 / 0.1),
          0px -5px 25px 0px rgb(0 0 0 / 0.1);
        z-index: 100;
      `}
    >
      <div tw="flex items-center justify-center h-full">
        <h1>Ceritanya Component Navbar</h1>
      </div>
    </div>
  )
}

export { Navbar }
