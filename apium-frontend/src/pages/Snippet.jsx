import React from 'react'
import { useSelector } from 'react-redux'
import { Copy } from 'lucide-react';
import { CodeEditor } from '../Index'

function Snippet() {

    const logos = [
        { value: "javascript", label: "JavaScript", logo: "javascript.png" },
        { value: "python", label: "Python", logo: "python.png" },
        { value: "java", label: "Java", logo: "java.png" },
        { value: "cpp", label: "C++", logo: "c++.png" },
        { value: "c", label: "C", logo: "c.png" },
        { value: "rust", label: "Rust", logo: "rust.png" },
        { value: "go", label: "Go", logo: "go.png" },
        { value: "r", label: "R", logo: "r.png" },
        { value: "php", label: "PHP", logo: "php.svg" },
        { value: "html", label: "HTML", logo: "html.png" },
        { value: "sql", label: "SQL", logo: "sql.png" },
        { value: "csharp", label: "C#", logo: "csharp.png" },
        { value: "swift", label: "Swift", logo: "swift.svg" }
    ];

    const shareCode = useSelector((state) => state.snippet.shareCodeDetails)
    console.log(shareCode)

    const getLogo = (language) => {
        const logo = logos.filter((logo) => logo.value === language)[0]
        return logo.logo
    }

    const getFormatedDate = (isoDate) => {
        const date = new Date(isoDate);

        // Extract parts
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();

        // Format as dd/mm/yyyy
        const formatted = `${day}/${month}/${year}`;
        return formatted
    }

    const retrieveAllComments = () => {

    }


    return (
        <div className='w-full flex flex-col gap-[3vh] p-[5vh]'>
            <div className='w-full h-[20vh] flex items-center justify-between border border-black p-[5vh] rounded-xl'>
                <div className="flex justify-center items-center gap-3">
                    <img src={getLogo(shareCode.code.language)} alt="logo" className="w-10 h-10" />
                    <div className='flex flex-col'>
                        <div>
                            <h1 className='font-poppins-medium'>{shareCode.description}</h1>
                        </div>
                        <div className='flex justify-between items-center gap-2'>

                            <div className='flex justify-center items-center gap-1'>
                                <svg className='w-3 h-3' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1342]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#1342]"> </path> </g> </g> </g> </g></svg>
                                <div className='text-[2.5vh] font-poppins'>{shareCode.user.username}</div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="black"></path> <path d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z" fill="black"></path> </g></svg>
                                <div className='text-xs font-poppins'>{getFormatedDate(shareCode.share_at)}</div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <svg className='w-4 h-4' viewBox="0 -2 24 24" id="meteor-icon-kit__regular-comment" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C3.34315 2 2 3.34315 2 5V17.9868L5.64242 15H19C20.6569 15 22 13.6569 22 12V5C22 3.34315 20.6569 2 19 2H5zM6.35758 17L3.26816 19.5333C2.41403 20.2337 1.15385 20.1091 0.453464 19.2549C0.160246 18.8974 0 18.4492 0 17.9868V5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V12C24 14.7614 21.7614 17 19 17H6.35758z" fill="black"></path></g></svg>
                                <div className='text-xs font-poppins'>comments</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-fit font-poppins  bg-black/10 px-3 py-0.5 rounded-lg text-black'>
                        {shareCode.code.language}
                    </div>
                </div>
            </div>

            <div className="flex flex-col border border-black rounded-xl">
                <div className='px-[4vh] py-[3vh] flex items-center justify-between border border-transparent border-b-black'>
                    <div className='flex items-center justify-center gap-2'>
                        <svg className='h-4 w-4' fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m590.454 251 125.963 104.97-502.979 603.575 502.98 603.575-125.964 104.97L0 959.544 590.454 251Zm738.395 0 590.454 708.545-590.454 708.544-126.073-104.97 503.089-603.574-503.089-603.575L1328.85 251Z" fill-rule="evenodd"></path> </g></svg>
                        <div className='font-inter'>Source Code</div>
                    </div>
                    <button>
                        <Copy size={"3vh"} />
                    </button>
                </div>
                <div>
                    <CodeEditor code={shareCode.code.content} selectedLanguage={shareCode.code.language} theme={"vs-light"} readOnly />
                </div>
            </div>

            <div className="flex flex-col border border-black rounded-xl">
                <div className='px-[4vh] py-[3vh] flex items-center justify-between border border-transparent border-b-black'>
                    <div className='flex items-center justify-center gap-2'>
                        <svg className='w-5 h-5' viewBox="0 -2 24 24" id="meteor-icon-kit__regular-comment" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C3.34315 2 2 3.34315 2 5V17.9868L5.64242 15H19C20.6569 15 22 13.6569 22 12V5C22 3.34315 20.6569 2 19 2H5zM6.35758 17L3.26816 19.5333C2.41403 20.2337 1.15385 20.1091 0.453464 19.2549C0.160246 18.8974 0 18.4492 0 17.9868V5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V12C24 14.7614 21.7614 17 19 17H6.35758z" fill="black"></path></g></svg>
                        <div className='font-poppins-medium'>Discussion (0)</div>
                    </div>
                </div>

                <div className='w-full flex flex-col justify-between items-center p-[4vh]'>
                    <div className='w-full flex-col items-center'>
                        <div className='w-full flex items-center justify-end'>
                            <button className='font-inter'>Preview</button>
                        </div>
                        <textarea 
                            name="comment" 
                            id="comment"
                            placeholder='Add to the discussion...'
                            rows={4}
                            className='w-full outline-none text-black resize-none'
                        >
                        </textarea>
                        <div className='flex items-center justify-between'>
                            <div className='font-inter'>Formate code with ```language</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Snippet
