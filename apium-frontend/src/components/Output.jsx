import React from 'react';
import { Clock } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Output() {

  const response = useSelector((state) => state.code.output)
  const success = useSelector((state) => state.code.success)
  const error = useSelector((state) => state.code.error)
  const running = useSelector((state) => state.code.isRunning)

  return (
    <div className="w-full h-[82vh] bg-[#0c0e17] rounded-lg flex flex-col items-center">
      <div className="flex items-center px-3 py-2 rounded-t-lg w-full">
        <div className="w-6 h-6 flex justify-center items-center rounded-md bg-gray-800 mr-2">
          <svg
            className="w-4 h-4 text-blue-500"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11 12l-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93 11 12zm0 7h10v2H11v-2z"></path>
          </svg>
        </div>

        <div className="text-white text-sm font-medium">Output</div>
      </div>
      <div className='w-[96%] h-full rounded-lg border mb-2 border-gray-800 overflow-y-scroll'>
        {response || error ? (
          <div className='py-1'>
            {success ? (
              <>
                <div className='flex justify-between items-center w-[31vh] px-3'>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 15.25C10.307 15.2353 10.1276 15.1455 9.99998 15L6.99998 12C6.93314 11.8601 6.91133 11.7029 6.93756 11.55C6.96379 11.3971 7.03676 11.2562 7.14643 11.1465C7.2561 11.0368 7.39707 10.9638 7.54993 10.9376C7.70279 10.9114 7.86003 10.9332 7.99998 11L10.47 13.47L19 5.00004C19.1399 4.9332 19.2972 4.91139 19.45 4.93762C19.6029 4.96385 19.7439 5.03682 19.8535 5.14649C19.9632 5.25616 20.0362 5.39713 20.0624 5.54999C20.0886 5.70286 20.0668 5.86009 20 6.00004L11 15C10.8724 15.1455 10.6929 15.2353 10.5 15.25Z" fill="green"></path> <path d="M12 21C10.3915 20.9974 8.813 20.5638 7.42891 19.7443C6.04481 18.9247 4.90566 17.7492 4.12999 16.34C3.54037 15.29 3.17596 14.1287 3.05999 12.93C2.87697 11.1721 3.2156 9.39921 4.03363 7.83249C4.85167 6.26578 6.1129 4.9746 7.65999 4.12003C8.71001 3.53041 9.87134 3.166 11.07 3.05003C12.2641 2.92157 13.4719 3.03725 14.62 3.39003C14.7224 3.4105 14.8195 3.45215 14.9049 3.51232C14.9903 3.57248 15.0622 3.64983 15.116 3.73941C15.1698 3.82898 15.2043 3.92881 15.2173 4.03249C15.2302 4.13616 15.2214 4.2414 15.1913 4.34146C15.1612 4.44152 15.1105 4.53419 15.0425 4.61352C14.9745 4.69286 14.8907 4.75712 14.7965 4.80217C14.7022 4.84723 14.5995 4.87209 14.4951 4.87516C14.3907 4.87824 14.2867 4.85946 14.19 4.82003C13.2186 4.52795 12.1987 4.43275 11.19 4.54003C10.193 4.64212 9.22694 4.94485 8.34999 5.43003C7.50512 5.89613 6.75813 6.52088 6.14999 7.27003C5.52385 8.03319 5.05628 8.91361 4.77467 9.85974C4.49307 10.8059 4.40308 11.7987 4.50999 12.78C4.61208 13.777 4.91482 14.7431 5.39999 15.62C5.86609 16.4649 6.49084 17.2119 7.23999 17.82C8.00315 18.4462 8.88357 18.9137 9.8297 19.1953C10.7758 19.4769 11.7686 19.5669 12.75 19.46C13.747 19.3579 14.713 19.0552 15.59 18.57C16.4349 18.1039 17.1818 17.4792 17.79 16.73C18.4161 15.9669 18.8837 15.0864 19.1653 14.1403C19.4469 13.1942 19.5369 12.2014 19.43 11.22C19.4201 11.1169 19.4307 11.0129 19.461 10.9139C19.4914 10.8149 19.5409 10.7228 19.6069 10.643C19.6728 10.5631 19.7538 10.497 19.8453 10.4485C19.9368 10.3999 20.0369 10.3699 20.14 10.36C20.2431 10.3502 20.3471 10.3607 20.4461 10.3911C20.5451 10.4214 20.6372 10.471 20.717 10.5369C20.7969 10.6028 20.863 10.6839 20.9115 10.7753C20.9601 10.8668 20.9901 10.9669 21 11.07C21.1821 12.829 20.842 14.6026 20.0221 16.1695C19.2022 17.7363 17.9389 19.0269 16.39 19.88C15.3288 20.4938 14.1495 20.8755 12.93 21C12.62 21 12.3 21 12 21Z" fill="green"></path> </g></svg>
                  <div className='text-[#008000] font-light'>Execution Successful</div>
                </div>
                <div className='w-auto h-auto px-3 py-1 font-mono text-xs text-white whitespace-pre-wrap'>
                  {response}
                </div>
              </>
            ) :
              (
                <>
                  <div className='flex justify-between items-center w-[25vh] px-3'>
                    <svg fill="red" className='w-4 h-4' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M520.741 163.801a10.234 10.234 0 00-3.406-3.406c-4.827-2.946-11.129-1.421-14.075 3.406L80.258 856.874a10.236 10.236 0 00-1.499 5.335c0 5.655 4.585 10.24 10.24 10.24h846.004c1.882 0 3.728-.519 5.335-1.499 4.827-2.946 6.352-9.248 3.406-14.075L520.742 163.802zm43.703-26.674L987.446 830.2c17.678 28.964 8.528 66.774-20.436 84.452a61.445 61.445 0 01-32.008 8.996H88.998c-33.932 0-61.44-27.508-61.44-61.44a61.445 61.445 0 018.996-32.008l423.002-693.073c17.678-28.964 55.488-38.113 84.452-20.436a61.438 61.438 0 0120.436 20.436zM512 778.24c22.622 0 40.96-18.338 40.96-40.96s-18.338-40.96-40.96-40.96-40.96 18.338-40.96 40.96 18.338 40.96 40.96 40.96zm0-440.32c-22.622 0-40.96 18.338-40.96 40.96v225.28c0 22.622 18.338 40.96 40.96 40.96s40.96-18.338 40.96-40.96V378.88c0-22.622-18.338-40.96-40.96-40.96z"></path></g></svg>
                    <div className='text-[#FF0000] font-light'>Execution Error</div>
                  </div>
                  <div className='w-auto h-auto px-3 py-1 font-mono text-xs text-[#FF0000] whitespace-pre-wrap'>
                    {error}
                  </div>
                </>
              )
            }
          </div>
        ) : running ? (
          <div role="status" className="max-w-sm animate-pulse py-2 px-3">
            <div class="h-2.5 rounded-full bg-gray-600/40 w-48 mb-4"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[360px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[330px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[300px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[360px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[330px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[300px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[360px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[330px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[300px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[360px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[330px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[300px] mb-2.5"></div>
            <div class="h-2 rounded-full bg-gray-600/40 max-w-[360px] mb-2.5"></div>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="h-full w-full rounded-md flex flex-col items-center justify-center space-y-1">
            <div className="w-8 h-8 rounded-lg flex justify-center items-center border border-white/20 shadow-lg bg-gray-800">
              <Clock size={20} color="white" />
            </div>
            <p className="text-gray-400">Run your code to see the output here...</p>
          </div>
        )}
      </div>
    </div>
  );
}
