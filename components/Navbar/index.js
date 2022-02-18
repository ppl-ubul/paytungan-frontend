import { useState } from "react"
import tw, { css } from "twin.macro"

const Navbar = () => {
  const [menuNavbar, setMenuNavbar] = useState(0)
  return (
    <div
      className="footbar"
      tw="flex items-center justify-evenly"
      css={css`
        position: fixed;
        z-index: 50;
        bottom: 0;
        width: 100%;
        height: 60px;

        margin-top: 150px;

        background-color: #fabada;
        background: radial-gradient(
            circle at ${menuNavbar == 0 ? '85px' : menuNavbar == 1 ? '230px' : '350px'} 0,
            transparent 50px,
            #fabada 0
          )
          0 0;
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .button {
          position: absolute;
          top: -45px;
          left: ${menuNavbar == 0 ? '40px' : menuNavbar == 1 ? '185px' : '305px'};

          height: 90px;
          width: 90px;

          background: blue;

          border-radius: 50%;
          line-height: 90px;
          text-align: center;
          font-size: 40px;
          color: white;
        }
      `}
    >
      <div className="button">
        <img src="/images/logo/logo.png" tw="w-[50px] ml-6" />
      </div>
      <div css={menuNavbar == 0 && tw`opacity-0`}
        onClick={() => {
          setMenuNavbar(0)
        }}
      >Home</div>
      <div css={menuNavbar == 1 && tw`opacity-0`}
        onClick={() => {
          setMenuNavbar(1)
        }}
      >FAQ</div>
      <div css={menuNavbar == 2 && tw`opacity-0`}
        onClick={() => {
          setMenuNavbar(2)
        }}
      >Profile</div>
    </div>

    // <div tw="fixed bottom-0 h-[70px] w-screen">
    //   <div
    //     tw="relative rounded-t-2xl bg-white flex items-center justify-evenly"
    //     css={css`
    //       box-shadow: 0px -5px 25px 0px rgb(0 0 0 / 0.1),
    //         0px -5px 25px 0px rgb(0 0 0 / 0.1);
    //       z-index: 50;

    //       :after {
    //         content: "";
    //         position: absolute;
    //         left: 10px;
    //         top: 10px;
    //         border-radius: 100%;
    //         width: 10px;
    //         height: 10px;
    //         box-shadow: 0px 0px 0px 10px white;
    //       }
    //     `}
    //   >
    //     <div
    //       tw="p-3 rounded-full"
    //       css={css`
    //         border: 20px solid transparent;
    //       `}
    //     >
    //       Home
    //     </div>
    //     <div>Help Center</div>
    //     <div>History</div>
    //     <div>Profile</div>
    //   </div>
    // </div>
  )
}

export { Navbar }
