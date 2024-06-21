

const Skill = () => {
    return (
        <div id={'my_skill'}>
            <div className="my-8">
                <h2 className="text-4xl py-10 text-center">My Skill</h2>
                {/* Fontend Skill */}
                <div className= "border-2 my-5 p-4 ghost_color_border">
                    <h2>Frontend Technology
                    </h2>
                   <div className="flex flex-wrap gap-5">
                   <li className="ghost_color_bg p-2 border-1 px-10 rounded text-[#F4F403]">
                        Next Js
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded text-white border-1">
                        React Js
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded border-1 text-[#F97316]">
                    UI Libraries
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded border-1 text-[#F000B8]">
                       Javascript
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded border-1 text-[#35CE97]">
                        Typescript
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded border-1 text-[#F97316]">
                        Html/Css
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded border-1 text-[#0EA0E2]">
                       TailwindCss
                    </li>
                   </div>
                </div>
                {/* Backend Skill */}
                <div className= "border-2 p-4  ghost_color_border">
                    <h2>Backend Technology</h2>
                   <div className="flex flex-wrap gap-5">
                   <li className="ghost_color_bg p-2 border-1 px-10 rounded text-[#F4F403]">
                        Node Js
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded text-white border-1">
                        Express Js
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded border-1 text-[#F97316]">
                    MongoDb
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded border-1 text-[#F000B8]">
                       Mongoose
                    </li>
                   </div>
                </div>
                {/* Other Skill */}
                <div className= "border-2 p-4 my-4 ghost_color_border">
                    <h2>Other Skill</h2>
                   <div className="flex flex-wrap gap-5">
                  
                    <li className="ghost_color_bg p-2 px-10 rounded border-1 text-[#35CE97]">
                    Github Collaboration
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded border-1 text-[#F97316]">
                        PostMan
                    </li>
                    <li className="ghost_color_bg p-2 px-10 rounded border-1 text-[#0EA0E2]">
                       Figma
                    </li>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;