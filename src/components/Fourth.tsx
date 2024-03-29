import React from "react";
import phone from "../images/phone.png";
import mail from "../images/email.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import stack from "../images/stack.png";
import project from "../images/project.png";
import steam from "../images/steam-logo.png";
import { Tooltip } from 'react-tooltip'

export default function Fourth({ count, height, block, width }: { count: number; height: number; block: boolean; width: number }) {

  return (
    <div className="flex flex-col" style={{ height: height, width: width }}>
      {block ? (
        <div className="title w-fit">Contact</div>
      ) : (
        <div className="w-full h-full flex ">
          <div className="w-full h-fit flex xl:flex-row flex-col my-auto">
            <div className="my-auto border-4 border-black sm:p-3 p-1 xl:text-xl text-lg rounded-3xl xl:ml-10 mx-auto">
              <p className="text-4xl">Ondřej Hájek</p>
              <p>Frontend developer</p>
              <div className="flex">
                <img src={phone} alt="" className="w-10 h-10 m-2" />
                <p className="my-auto">731721507</p>
              </div>
              <div className="flex">
                <img src={mail} alt="" className="w-10 h-10 m-2" />
                <p className="my-auto md:text-base text-sm">ondrej.hajek.profi@gmail.com</p>
              </div>
              <div className="flex justify-center">
                <img src="./photo.png" alt="" className="rounded-full"/>
              </div>
            </div>

            <div className="flex-1 flex xl:m-0 m-4">
              <div className="flex flex-col w-fit mx-auto justify-between px-2">
                <p className="xl:text-5xl text-3xl text-center">With 💘 by Ondřej Hájek</p>
                <div className="flex justify-between text-center text-xl xl:my-0 my-5">
                  <a href="https://github.com/OndrejHj04" target="_blank" rel="noreferrer" data-tooltip-id="GitHub tooltip" data-tooltip-content="Follow to my GitHub account" data-tooltip-place="bottom">
                    <img src={github} alt="" className="xl:w-20 w-12  xl:h-20 h-12" />
                  </a>
                  <Tooltip id="GitHub tooltip" />
                  <a href="https://stackoverflow.com/users/16744844/ondrejhj04" target="_blank" rel="noreferrer" data-tooltip-id="Stack tooltip" data-tooltip-content="Follow to my StackOverflow account" data-tooltip-place="bottom">
                    <img src={stack} alt="" className="xl:w-20 w-12  xl:h-20 h-12" />
                  </a>
                  <Tooltip id="Stack tooltip" />
                  <a href="https://www.linkedin.com/in/ondřej-hájek-600527206/" target="_blank" rel="noreferrer" data-tooltip-id="LinkedIn tooltip" data-tooltip-content="Follow to my LinkedIn account" data-tooltip-place="bottom">
                    <img src={linkedin} alt="" className="xl:w-20 w-12  xl:h-20 h-12" />
                  </a>
                  <Tooltip id="LinkedIn tooltip" />
                  <a href="https://ondrejhj-showroom.netlify.app" target="_blank" rel="noreferrer" data-tooltip-id="Showroom tooltip" data-tooltip-content="Follow to page with my projects" data-tooltip-place="bottom">
                    <img src={project} alt="" className="xl:w-20 w-12  xl:h-20 h-12" />
                  </a>
                  <Tooltip id="Showroom tooltip" />
                  <a href="https://steamcommunity.com/profiles/76561198152899592/" target="_blank" rel="noreferrer" data-tooltip-id="Steam tooltip" data-tooltip-content="Follow to my steam account" data-tooltip-place="bottom">
                    <img src={steam} alt="" className="xl:w-20 w-12  xl:h-20 h-12" />
                  </a>
                  <Tooltip id="Steam tooltip" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
