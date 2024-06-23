
const SkillSection = () => {
    return (
        <div className="md:py-10 md:mx-14 py-5 ">
              <div className="mt-4">
                <h2 className="text-4xl md:text-5xl md:py-10 text-center">My Skill</h2>
                {/* Fontend Skill */}
                <div className= "border-2 my-5 p-4 flex justify-center rounded-md ghost_color_border">
                   <div className=" md:flex flex-wrap justify-center md:gap-10">
                   <li className="ghost_color_bg p-3 border-1 px-20 rounded text-[#F4F403]">
                        Next Js
                    </li>
                    <li className="ghost_color_bg p-3 px-20 rounded text-white border-1">
                        React Js
                    </li>
                    <li className="ghost_color_bg text-center p-3 px-20rounded border-1 text-[#F97316]">
                    UI Libraries
                    </li>
                    <li className="ghost_color_bg p-3 px-20 rounded border-1 text-[#F000B8]">
                       Javascript
                    </li>
                    <li className="ghost_color_bg p-3 px-20 rounded border-1 text-[#35CE97]">
                        Typescript
                    </li>
                    <li className="ghost_color_bg p-3 px-20 rounded border-1 text-[#F97316]">
                        Html/Css
                    </li>
                    <li className="ghost_color_bg p-3 px-20 rounded border-1 text-[#0EA0E2]">
                       TailwindCss
                    </li>
 {/* Backend Skill */}
 <li className="ghost_color_bg p-3 px-20 rounded border-1 text-[#35CE97]">
                       Node Js
                    </li>
                    <li className="ghost_color_bg p-3 px-20 rounded text-white border-1">
                        Express Js
                    </li>
                    <li className="ghost_color_bg p-3 px-20 rounded border-1 text-[#F97316]">
                    MongoDb
                    </li>
                    <li className="ghost_color_bg p-3 px-20 rounded border-1 text-[#F000B8]">
                       Mongoose
                    </li>
 {/* Other Skill */}
                    <li className="ghost_color_bg p-3 px-20 rounded border-1 text-[#35CE97]">
                    Github Collaboration
                    </li>
                    <li className="ghost_color_bg p-3 px-20 rounded border-1 text-[#F97316]">
                        PostMan
                    </li>
                    <li className="ghost_color_bg p-3 px-20 rounded border-1 text-[#0EA0E2]">
                       Figma
                    </li>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;