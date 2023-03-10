export default function WaitingDogsCard() {
  return (
     <div className=" bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12 rounded">
     <div className="max-w-5xlxl mx-auto">
       <div className="relative group">
         <div className="absolute -inset-1 bg-gradient-to-r from-orange-700 to-rose-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
         <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
           <div className="space-y-2">
             <p className="text-slate-800 uppercase font-semibold">Em breve</p>
           </div>
         </div>
       </div>
     </div>
   </div>
  )
}